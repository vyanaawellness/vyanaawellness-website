/**
 * VYANA Wellness — Navratri Webinar Registration
 *
 * Cloudflare Pages Function
 * Endpoint: POST /api/webinar-register
 *
 * Required Cloudflare bindings:
 * DB                 D1 database binding
 * RESEND_API_KEY     Secret
 * RESEND_FROM_EMAIL  Text variable
 */

type D1Statement = {
  bind: (...values: unknown[]) => D1Statement;
  run: () => Promise<unknown>;
};

type D1DatabaseBinding = {
  prepare: (query: string) => D1Statement;
};

type Env = {
  DB: D1DatabaseBinding;
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

type Registration = {
  name: string;
  whatsapp: string;
  email: string;
  cityState: string;
  ageGroup: string;
  gender: string;
  fastingExperience: string;
  primaryGoals: string[];
  fastingPattern: string;
  fastingSymptoms: string[];
  learningInterests: string[];
  question: string;
  referralSource: string;
  educationalConsent: boolean;
  webinarUpdatesConsent: boolean;
  marketingConsent: boolean;
};

const WEBINAR_ID = "navratri-2026";

const NOTIFICATION_EMAIL = "info@vyanaawellness.com";

const MAX_REQUEST_LENGTH = 30000;

/**
 * Return JSON consistently, including for errors.
 */
function json(
  body: Record<string, unknown>,
  status = 200
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/**
 * Normalize and limit user-provided text.
 */
function cleanText(
  value: unknown,
  maxLength: number
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

/**
 * Normalize checkbox values.
 */
function cleanArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string"
    )
    .map((item) => item.trim().slice(0, 150))
    .filter(Boolean)
    .slice(0, 30);
}

/**
 * Convert incoming JSON to a controlled registration object.
 */
function parseRegistration(
  input: Record<string, unknown>
): Registration {
  return {
    name: cleanText(input.name, 100),

    whatsapp: cleanText(input.whatsapp, 30),

    email: cleanText(input.email, 254).toLowerCase(),

    cityState: cleanText(input.cityState, 150),

    ageGroup: cleanText(input.ageGroup, 50),

    gender: cleanText(input.gender, 50),

    fastingExperience: cleanText(
      input.fastingExperience,
      100
    ),

    primaryGoals: cleanArray(input.primaryGoals),

    fastingPattern: cleanText(
      input.fastingPattern,
      100
    ),

    fastingSymptoms: cleanArray(input.fastingSymptoms),

    learningInterests: cleanArray(
      input.learningInterests
    ),

    question: cleanText(input.question, 1000),

    referralSource: cleanText(
      input.referralSource,
      100
    ),

    educationalConsent:
      input.educationalConsent === true,

    webinarUpdatesConsent:
      input.webinarUpdatesConsent === true,

    marketingConsent:
      input.marketingConsent === true,
  };
}

/**
 * Basic email format validation.
 */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Escape user input before inserting it into HTML emails.
 */
function escapeHtml(value: string): string {
  const replacements: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(
    /[&<>"']/g,
    (character) => replacements[character] || character
  );
}

/**
 * Send an email through Resend.
 *
 * A successful API response means Resend accepted the
 * request; it does not guarantee inbox delivery.
 */
async function sendEmail(
  apiKey: string,
  from: string,
  to: string,
  subject: string,
  html: string
): Promise<void> {
  const response = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();

    console.error(
      "Resend email request failed:",
      response.status,
      errorBody
    );

    throw new Error(
      "Resend could not accept the email request."
    );
  }
}

/**
 * Main Cloudflare Pages POST handler.
 */
export async function onRequestPost({
  request,
  env,
}: PagesContext): Promise<Response> {
  try {
    // -----------------------------------------
    // 1. Verify Cloudflare configuration
    // -----------------------------------------

    if (!env.DB) {
      console.error("Missing D1 database binding: DB");

      return json(
        {
          success: false,
          error:
            "Registration service is not configured.",
        },
        503
      );
    }

    if (
      !env.RESEND_API_KEY ||
      !env.RESEND_FROM_EMAIL
    ) {
      console.error(
        "Missing Resend environment variables."
      );

      return json(
        {
          success: false,
          error:
            "Registration email service is not configured.",
        },
        503
      );
    }

    // -----------------------------------------
    // 2. Validate request format
    // -----------------------------------------

    const contentType =
      request.headers.get("content-type") || "";

    if (
      !contentType
        .toLowerCase()
        .includes("application/json")
    ) {
      return json(
        {
          success: false,
          error: "Invalid request format.",
        },
        415
      );
    }

    const rawBody = await request.text();

    if (rawBody.length > MAX_REQUEST_LENGTH) {
      return json(
        {
          success: false,
          error:
            "Registration data exceeds the allowed size.",
        },
        413
      );
    }

    // -----------------------------------------
    // 3. Parse JSON safely
    // -----------------------------------------

    let input: unknown;

    try {
      input = JSON.parse(rawBody);
    } catch {
      return json(
        {
          success: false,
          error: "Invalid registration data.",
        },
        400
      );
    }

    if (
      input === null ||
      typeof input !== "object" ||
      Array.isArray(input)
    ) {
      return json(
        {
          success: false,
          error: "Invalid registration data.",
        },
        400
      );
    }

    const registration = parseRegistration(
      input as Record<string, unknown>
    );

    // -----------------------------------------
    // 4. Validate required fields
    // -----------------------------------------

    if (
      !registration.name ||
      !registration.whatsapp ||
      !isValidEmail(registration.email) ||
      !registration.fastingExperience ||
      registration.primaryGoals.length === 0 ||
      registration.learningInterests.length === 0 ||
      !registration.educationalConsent ||
      !registration.webinarUpdatesConsent
    ) {
      return json(
        {
          success: false,
          error:
            "Please complete all required registration fields.",
        },
        400
      );
    }

    // -----------------------------------------
    // 5. Generate registration details
    // -----------------------------------------

    const registrationId = crypto.randomUUID();

    const createdAt = new Date().toISOString();

    // -----------------------------------------
    // 6. Save registration to Cloudflare D1
    // -----------------------------------------

    await env.DB.prepare(
      `INSERT INTO webinar_registrations (
        id,
        webinar_id,
        name,
        whatsapp,
        email,
        city_state,
        age_group,
        gender,
        fasting_experience,
        primary_goals,
        fasting_pattern,
        fasting_symptoms,
        learning_interests,
        question,
        referral_source,
        educational_consent,
        webinar_updates_consent,
        marketing_consent,
        created_at
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?
      )`
    )
      .bind(
        registrationId,
        WEBINAR_ID,
        registration.name,
        registration.whatsapp,
        registration.email,
        registration.cityState,
        registration.ageGroup,
        registration.gender,
        registration.fastingExperience,
        JSON.stringify(registration.primaryGoals),
        registration.fastingPattern,
        JSON.stringify(registration.fastingSymptoms),
        JSON.stringify(registration.learningInterests),
        registration.question,
        registration.referralSource,
        registration.educationalConsent ? 1 : 0,
        registration.webinarUpdatesConsent ? 1 : 0,
        registration.marketingConsent ? 1 : 0,
        createdAt
      )
      .run();

    // -----------------------------------------
    // 7. Prepare safe HTML values
    // -----------------------------------------

    const safeName = escapeHtml(
      registration.name
    );

    const safeEmail = escapeHtml(
      registration.email
    );

    const safeWhatsapp = escapeHtml(
      registration.whatsapp
    );

    const safeCity = escapeHtml(
      registration.cityState || "Not provided"
    );

    const safeGoals = registration.primaryGoals
      .map(escapeHtml)
      .join(", ");

    const safeInterests =
      registration.learningInterests
        .map(escapeHtml)
        .join(", ");

    // -----------------------------------------
    // 8. Prepare admin notification
    // -----------------------------------------

    const notificationHtml = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: auto;
        color: #234D36;
        line-height: 1.7;
      ">
        <h1>New VYANA Webinar Registration</h1>

        <p>
          A new attendee has registered for
          Therapeutic Fasting During Navratri.
        </p>

        <hr>

        <p>
          <strong>Registration ID:</strong>
          ${registrationId}
        </p>

        <p>
          <strong>Name:</strong>
          ${safeName}
        </p>

        <p>
          <strong>Email:</strong>
          ${safeEmail}
        </p>

        <p>
          <strong>WhatsApp:</strong>
          ${safeWhatsapp}
        </p>

        <p>
          <strong>City / State:</strong>
          ${safeCity}
        </p>

        <p>
          <strong>Primary Goals:</strong>
          ${safeGoals}
        </p>

        <p>
          <strong>Learning Interests:</strong>
          ${safeInterests}
        </p>

        <hr>

        <p>
          The complete registration is stored
          in your Cloudflare D1 database.
        </p>

        <p>
          <strong>Webinar:</strong>
          Sunday, 4 October 2026
          at 6:00 PM IST.
        </p>
      </div>
    `;

    // -----------------------------------------
    // 9. Prepare attendee confirmation
    // -----------------------------------------

    const confirmationHtml = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 650px;
        margin: auto;
        color: #234D36;
        line-height: 1.8;
      ">

        <h1 style="
          color: #234D36;
          font-size: 30px;
        ">
          VYANA Wellness
        </h1>

        <p style="
          color: #4F7942;
          font-size: 14px;
        ">
          Restore Your Inner Rhythm
        </p>

        <hr style="
          border: none;
          border-top: 1px solid #DDE8D9;
        ">

        <p>Dear ${safeName},</p>

        <p>
          Thank you for registering for our
          upcoming webinar!
        </p>

        <h2 style="color: #234D36;">
          Therapeutic Fasting During Navratri
        </h2>

        <p>
          <strong>Date:</strong>
          Sunday, 4 October 2026
          <br>

          <strong>Time:</strong>
          6:00 PM IST
          <br>

          <strong>Format:</strong>
          Online Webinar
        </p>

        <p>
          Your registration has been received.
          We look forward to having you join us.
        </p>

        <p>
          Webinar joining instructions will be
          shared before the event.
        </p>

        <p>
          Warm regards,
          <br>

          <strong>
            Dr. Bhoomi Panchal, BNYS
          </strong>
          <br>

          VYANA Wellness
        </p>

        <hr style="
          border: none;
          border-top: 1px solid #DDE8D9;
        ">

        <p style="
          font-size: 12px;
          color: #666666;
        ">
          This webinar is educational and does
          not replace individualized medical
          advice.
        </p>

      </div>
    `;

    // -----------------------------------------
    // 10. Send both emails
    // -----------------------------------------

    const emailResults = await Promise.allSettled([
      sendEmail(
        env.RESEND_API_KEY,
        env.RESEND_FROM_EMAIL,
        NOTIFICATION_EMAIL,
        `New Webinar Registration: ${registration.name}`,
        notificationHtml
      ),

      sendEmail(
        env.RESEND_API_KEY,
        env.RESEND_FROM_EMAIL,
        registration.email,
        "Your VYANA Navratri Webinar Registration",
        confirmationHtml
      ),
    ]);

    const notificationStatus =
      emailResults[0].status === "fulfilled"
        ? "sent"
        : "failed";

    const confirmationStatus =
      emailResults[1].status === "fulfilled"
        ? "sent"
        : "failed";

    // -----------------------------------------
    // 11. Update email statuses in D1
    // -----------------------------------------

    try {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET notification_status = ?,
             confirmation_status = ?
         WHERE id = ?`
      )
        .bind(
          notificationStatus,
          confirmationStatus,
          registrationId
        )
        .run();
    } catch (error) {
      console.error(
        "Failed to update registration email statuses:",
        error
      );
    }

    // -----------------------------------------
    // 12. Return result to the website
    // -----------------------------------------

    if (
      notificationStatus === "failed" ||
      confirmationStatus === "failed"
    ) {
      console.error(
        "Registration saved but one or more emails failed:",
        registrationId
      );

      return json({
        success: true,
        registrationId,
        emailStatus: "partial_failure",
        message:
          "Registration saved. Some emails could not be sent.",
      });
    }

    return json({
      success: true,
      registrationId,
      emailStatus: "sent",
      message:
        "Registration completed successfully.",
    });
  } catch (error) {
    console.error(
      "Webinar registration error:",
      error
    );

    return json(
      {
        success: false,
        error:
          "We could not complete your registration. Please try again later.",
      },
      500
    );
  }
}