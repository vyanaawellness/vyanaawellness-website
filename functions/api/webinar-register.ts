/**
 * VYANA Wellness — Navratri Webinar Registration
 *
 * Cloudflare Pages Function
 *
 * POST /api/webinar-register
 *   Saves registration and sends confirmation emails.
 *
 * GET /api/webinar-register?calendar=ics
 *   Downloads a calendar event compatible with Apple Calendar,
 *   Outlook, and other calendar applications.
 *
 * Required Cloudflare bindings:
 * DB                 D1 database
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

/* =========================================================
   WEBINAR CONFIGURATION

   Duration is provisional.
   Change the end time once the duration is confirmed.
   ========================================================= */

const WEBINAR_ID = "navratri-2026";

const WEBINAR_TITLE =
  "VYANA Wellness - Therapeutic Fasting During Navratri";

const WEBINAR_DATE_LABEL =
  "Sunday, 4 October 2026";

const WEBINAR_TIME_LABEL =
  "6:00 PM IST";

const WEBINAR_DURATION_LABEL =
  "Approximately 60 minutes (provisional)";

// UTC equivalent of October 4, 2026, 6:00 PM IST.
const WEBINAR_START_UTC = "2026-10-04T12:30:00Z";

// Provisional end: October 4, 2026, 7:00 PM IST.
const WEBINAR_END_UTC = "2026-10-04T13:30:00Z";

const WEBSITE_URL = "https://vyanaawellness.com";

const NOTIFICATION_EMAIL =
  "info@vyanaawellness.com";

const MAX_REQUEST_LENGTH = 30000;

/* =========================================================
   JSON RESPONSE
   ========================================================= */

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

/* =========================================================
   INPUT HELPERS
   ========================================================= */

function cleanText(
  value: unknown,
  maxLength: number
): string {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

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

    fastingSymptoms: cleanArray(
      input.fastingSymptoms
    ),

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

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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

/* =========================================================
   CALENDAR HELPERS
   ========================================================= */

function compactUtc(value: string): string {
  return value.replace(/[-:]/g, "").replace(".000", "");
}

function createGoogleCalendarUrl(): string {
  const parameters = new URLSearchParams({
    action: "TEMPLATE",

    text: WEBINAR_TITLE,

    dates:
      `${compactUtc(WEBINAR_START_UTC)}/` +
      compactUtc(WEBINAR_END_UTC),

    details:
      "Thank you for registering for the VYANA Wellness webinar. " +
      "The end time is provisional. " +
      "Joining instructions and any schedule updates " +
      "will be shared before the event.",

    location: "Online - joining link to be shared",
  });

  return (
    "https://calendar.google.com/calendar/render?" +
    parameters.toString()
  );
}

function createOutlookCalendarUrl(): string {
  const parameters = new URLSearchParams({
    path: "/calendar/action/compose",

    rru: "addevent",

    subject: WEBINAR_TITLE,

    startdt: WEBINAR_START_UTC,

    enddt: WEBINAR_END_UTC,

    body:
      "Thank you for registering for the VYANA Wellness webinar. " +
      "The end time is provisional. " +
      "Joining instructions and any schedule updates " +
      "will be shared before the event.",

    location: "Online - joining link to be shared",
  });

  return (
    "https://outlook.live.com/calendar/0/deeplink/compose?" +
    parameters.toString()
  );
}

function createIcsUrl(): string {
  return `${WEBSITE_URL}/api/webinar-register?calendar=ics`;
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

/**
 * Fold long iCalendar lines at UTF-8 byte boundaries.
 * Continuation lines begin with one space.
 */
function foldIcsLine(line: string): string {
  const encoder = new TextEncoder();

  const output: string[] = [];

  let current = "";

  let currentBytes = 0;

  for (const character of line) {
    const characterBytes =
      encoder.encode(character).length;

    const limit = output.length === 0 ? 75 : 74;

    if (
      currentBytes + characterBytes > limit &&
      current.length > 0
    ) {
      output.push(current);

      current = character;

      currentBytes = characterBytes;
    } else {
      current += character;

      currentBytes += characterBytes;
    }
  }

  output.push(current);

  return output.join("\r\n ");
}

function createIcsContent(): string {
  const description =
    "VYANA Wellness webinar. " +
    "The end time is provisional. " +
    "Joining instructions and any schedule updates " +
    "will be shared before the event.";

  const lines = [
    "BEGIN:VCALENDAR",

    "VERSION:2.0",

    "PRODID:-//VYANA Wellness//Webinar Calendar//EN",

    "CALSCALE:GREGORIAN",

    "METHOD:PUBLISH",

    "BEGIN:VEVENT",

    "UID:navratri-2026@vyanaawellness.com",

    "DTSTAMP:20260917T000000Z",

    `DTSTART:${compactUtc(WEBINAR_START_UTC)}`,

    `DTEND:${compactUtc(WEBINAR_END_UTC)}`,

    `SUMMARY:${escapeIcsText(WEBINAR_TITLE)}`,

    `DESCRIPTION:${escapeIcsText(description)}`,

    "LOCATION:Online - joining link to be shared",

    "STATUS:CONFIRMED",

    "END:VEVENT",

    "END:VCALENDAR",
  ];

  return (
    lines.map(foldIcsLine).join("\r\n") +
    "\r\n"
  );
}

/* =========================================================
   GET HANDLER — DOWNLOAD .ICS CALENDAR FILE
   ========================================================= */

export async function onRequestGet({
  request,
}: PagesContext): Promise<Response> {
  const url = new URL(request.url);

  if (url.searchParams.get("calendar") !== "ics") {
    return json(
      {
        success: false,
        error: "Calendar resource not found.",
      },
      404
    );
  }

  return new Response(createIcsContent(), {
    status: 200,

    headers: {
      "Content-Type":
        "text/calendar; charset=utf-8",

      "Content-Disposition":
        'attachment; filename="vyana-navratri-webinar.ics"',

      "Cache-Control":
        "public, max-age=300",
    },
  });
}

/* =========================================================
   RESEND EMAIL HELPER
   ========================================================= */

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
      "Resend request failed:",
      response.status,
      errorBody
    );

    throw new Error(
      "Resend could not accept the email request."
    );
  }
}

/* =========================================================
   POST HANDLER — WEBINAR REGISTRATION
   ========================================================= */

export async function onRequestPost({
  request,
  env,
}: PagesContext): Promise<Response> {
  try {
    /* 1. Check configuration */

    if (!env.DB) {
      console.error("Missing D1 binding: DB");

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

    /* 2. Validate request format */

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
            "Registration data is too large.",
        },
        413
      );
    }

    /* 3. Parse JSON */

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

    /* 4. Validate required fields */

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

    /* 5. Save registration */

    const registrationId = crypto.randomUUID();

    const createdAt = new Date().toISOString();

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

        JSON.stringify(
          registration.primaryGoals
        ),

        registration.fastingPattern,

        JSON.stringify(
          registration.fastingSymptoms
        ),

        JSON.stringify(
          registration.learningInterests
        ),

        registration.question,

        registration.referralSource,

        registration.educationalConsent ? 1 : 0,

        registration.webinarUpdatesConsent ? 1 : 0,

        registration.marketingConsent ? 1 : 0,

        createdAt
      )
      .run();

    /* 6. Escape email content */

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

    /* 7. Calendar links */

    const googleCalendarUrl =
      createGoogleCalendarUrl();

    const outlookCalendarUrl =
      createOutlookCalendarUrl();

    const icsCalendarUrl =
      createIcsUrl();

    /* 8. Admin notification email */

    const notificationHtml = `
      <div style="
        font-family:Arial,sans-serif;
        max-width:650px;
        margin:auto;
        color:#234D36;
        line-height:1.7;
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
          The complete registration has been saved
          in Cloudflare D1.
        </p>
      </div>
    `;

    /* 9. Attendee confirmation email */

    const confirmationHtml = `
      <div style="
        font-family:Arial,sans-serif;
        max-width:650px;
        margin:auto;
        padding:24px;
        color:#234D36;
        line-height:1.8;
      ">

        <h1 style="
          color:#234D36;
          font-size:30px;
          margin-bottom:4px;
        ">
          VYANA Wellness
        </h1>

        <p style="
          color:#4F7942;
          font-size:14px;
          margin-top:0;
        ">
          Restore Your Inner Rhythm
        </p>

        <hr style="
          border:none;
          border-top:1px solid #DDE8D9;
          margin:24px 0;
        ">

        <p>Dear ${safeName},</p>

        <p>
          Thank you for registering for our
          upcoming webinar!
        </p>

        <h2 style="
          color:#234D36;
          font-size:24px;
        ">
          Therapeutic Fasting During Navratri
        </h2>

        <div style="
          background:#F7F4ED;
          border:1px solid #DDE8D9;
          border-radius:12px;
          padding:20px;
          margin:24px 0;
        ">

          <p style="margin:0 0 8px;">
            <strong>Date:</strong>
            ${WEBINAR_DATE_LABEL}
          </p>

          <p style="margin:0 0 8px;">
            <strong>Time:</strong>
            ${WEBINAR_TIME_LABEL}
          </p>

          <p style="margin:0 0 8px;">
            <strong>Duration:</strong>
            ${WEBINAR_DURATION_LABEL}
          </p>

          <p style="margin:0;">
            <strong>Format:</strong>
            Online Webinar
          </p>

        </div>

        <p>
          Your registration has been received.
          We look forward to having you join us!
        </p>

        <p>
          Joining instructions will be shared
          before the webinar.
        </p>

        <hr style="
          border:none;
          border-top:1px solid #DDE8D9;
          margin:30px 0;
        ">

        <h2 style="
          color:#234D36;
          font-size:22px;
          text-align:center;
        ">
          Save the Date
        </h2>

        <p style="text-align:center;">
          Add this webinar to your personal
          calendar so you don't miss it.
        </p>

        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          style="margin:24px 0;"
        >
          <tr>
            <td align="center" style="padding:6px;">

              <a
                href="${escapeHtml(googleCalendarUrl)}"
                style="
                  display:inline-block;
                  background:#234D36;
                  color:#FFFFFF;
                  padding:13px 22px;
                  border-radius:8px;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:bold;
                "
              >
                Add to Google Calendar
              </a>

            </td>
          </tr>

          <tr>
            <td align="center" style="padding:6px;">

              <a
                href="${escapeHtml(outlookCalendarUrl)}"
                style="
                  display:inline-block;
                  background:#4F7942;
                  color:#FFFFFF;
                  padding:13px 22px;
                  border-radius:8px;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:bold;
                "
              >
                Add to Outlook Calendar
              </a>

            </td>
          </tr>

          <tr>
            <td align="center" style="padding:6px;">

              <a
                href="${escapeHtml(icsCalendarUrl)}"
                style="
                  display:inline-block;
                  background:#F7F4ED;
                  color:#234D36;
                  border:1px solid #A8C3A0;
                  padding:13px 22px;
                  border-radius:8px;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:bold;
                "
              >
                Apple Calendar / Download .ics
              </a>

            </td>
          </tr>
        </table>

        <p style="
          color:#666666;
          font-size:12px;
          text-align:center;
        ">
          Calendar events currently reserve
          6:00–7:00 PM IST as a provisional
          time slot. The final duration and
          joining link will be shared later.
        </p>

        <hr style="
          border:none;
          border-top:1px solid #DDE8D9;
          margin:30px 0;
        ">

        <p>
          Warm regards,
          <br>

          <strong>
            Dr. Bhoomi Panchal, BNYS
          </strong>
          <br>

          VYANA Wellness
        </p>

        <p style="
          color:#666666;
          font-size:12px;
        ">
          This webinar is educational and
          does not replace individualized
          medical advice.
        </p>

      </div>
    `;

    /* 10. Send both emails */

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

    /* 11. Update email statuses */

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
        "Failed to update email statuses:",
        error
      );
    }

    /* 12. Return registration result */

    if (
      notificationStatus === "failed" ||
      confirmationStatus === "failed"
    ) {
      console.error(
        "Registration saved, but email sending failed:",
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