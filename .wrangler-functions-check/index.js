var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/contact.ts
var allowedReasons = {
  consultation: "Consultation question",
  services: "Services",
  booking: "Booking support",
  collaboration: "Collaboration / partnership",
  general: "General enquiry"
};
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
__name(escapeHtml, "escapeHtml");
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
__name(isValidEmail, "isValidEmail");
async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const reason = body.reason?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    if (!name || !email || !reason || !message) {
      return Response.json(
        {
          error: "Please complete all required fields."
        },
        {
          status: 400
        }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address."
        },
        {
          status: 400
        }
      );
    }
    if (!allowedReasons[reason]) {
      return Response.json(
        {
          error: "Please select a valid reason for contacting us."
        },
        {
          status: 400
        }
      );
    }
    if (name.length > 100 || email.length > 254 || phone.length > 30 || message.length > 2e3) {
      return Response.json(
        {
          error: "One or more fields are too long."
        },
        {
          status: 400
        }
      );
    }
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeReason = escapeHtml(allowedReasons[reason]);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "VYANA Wellness <contact@vyanaawellness.com>",
        to: [context.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `VYANA Wellness enquiry \u2014 ${allowedReasons[reason]}`,
        html: `
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              line-height: 1.6;
              color: #333333;
              max-width: 650px;
              margin: 0 auto;
            "
          >
            <div
              style="
                background: #4F7942;
                padding: 24px;
                border-radius: 16px 16px 0 0;
              "
            >
              <h1
                style="
                  margin: 0;
                  color: #F7F4ED;
                  font-size: 24px;
                "
              >
                VYANA Wellness
              </h1>

              <p
                style="
                  margin: 6px 0 0;
                  color: #F7F4ED;
                  font-size: 14px;
                "
              >
                New Website Enquiry
              </p>
            </div>

            <div
              style="
                background: #ffffff;
                border: 1px solid #eeeeee;
                padding: 28px;
              "
            >
              <p>
                A visitor submitted the contact form on
                <strong>vyanaawellness.com</strong>.
              </p>

              <hr
                style="
                  border: 0;
                  border-top: 1px solid #eeeeee;
                  margin: 24px 0;
                "
              />

              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />

                <a
                  href="mailto:${safeEmail}"
                  style="color: #4F7942;"
                >
                  ${safeEmail}
                </a>
              </p>

              <p>
                <strong>Phone:</strong><br />
                ${safePhone}
              </p>

              <p>
                <strong>Reason for Contact:</strong><br />
                ${safeReason}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <div
                style="
                  background: #F7F4ED;
                  padding: 18px;
                  border-radius: 12px;
                  margin-top: 8px;
                "
              >
                ${safeMessage}
              </div>

              <hr
                style="
                  border: 0;
                  border-top: 1px solid #eeeeee;
                  margin: 24px 0;
                "
              />

              <p
                style="
                  margin-bottom: 0;
                  font-size: 12px;
                  color: #777777;
                "
              >
                This email was generated from the VYANA Wellness website
                contact form.
              </p>
            </div>
          </div>
        `
      })
    });
    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend error:", resendError);
      return Response.json(
        {
          error: "Your message could not be delivered. Please try again shortly."
        },
        {
          status: 500
        }
      );
    }
    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully."
      },
      {
        status: 200
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        error: "Something went wrong while sending your message. Please try again."
      },
      {
        status: 500
      }
    );
  }
}
__name(onRequestPost, "onRequestPost");

// api/webinar-register.ts
var WEBINAR_ID = "navratri-2026";
var WEBINAR_TITLE = "VYANA Wellness - Therapeutic Fasting During Navratri";
var WEBINAR_DATE_LABEL = "Sunday, 4 October 2026";
var WEBINAR_TIME_LABEL = "6:00 PM IST";
var WEBINAR_DURATION_LABEL = "60 minutes (provisional)";
var WEBINAR_START_UTC = "2026-10-04T12:30:00Z";
var WEBINAR_END_UTC = "2026-10-04T13:30:00Z";
var WEBSITE_URL = "https://vyanaawellness.com";
var NOTIFICATION_EMAIL = "info@vyanaawellness.com";
var ZOOM_JOIN_URL = "https://us05web.zoom.us/j/6529768137?pwd=WwghR0hyr6W6owlGSLC5ljtO3uNpZs.1&omn=82041203554";
var ZOOM_MEETING_ID = "652 976 8137";
var ZOOM_PASSCODE = "Navratri";
var MAX_REQUEST_LENGTH = 3e4;
function json(body, status = 200) {
  return new Response(
    JSON.stringify(body),
    {
      status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      }
    }
  );
}
__name(json, "json");
function cleanText(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, maxLength);
}
__name(cleanText, "cleanText");
function cleanArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter(
    (item) => typeof item === "string"
  ).map(
    (item) => item.trim().slice(0, 150)
  ).filter(Boolean).slice(0, 30);
}
__name(cleanArray, "cleanArray");
function parseRegistration(input) {
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
    learningInterests: cleanArray(input.learningInterests),
    question: cleanText(input.question, 1e3),
    referralSource: cleanText(
      input.referralSource,
      100
    ),
    educationalConsent: input.educationalConsent === true,
    webinarUpdatesConsent: input.webinarUpdatesConsent === true,
    marketingConsent: input.marketingConsent === true
  };
}
__name(parseRegistration, "parseRegistration");
function isValidEmail2(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}
__name(isValidEmail2, "isValidEmail");
function escapeHtml2(value) {
  const replacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return value.replace(
    /[&<>"']/g,
    (character) => replacements[character] || character
  );
}
__name(escapeHtml2, "escapeHtml");
function compactUtc(value) {
  return value.replace(/[-:]/g, "").replace(".000", "");
}
__name(compactUtc, "compactUtc");
function calendarDescription() {
  return "VYANA Wellness - Therapeutic Fasting During Navratri\n\nHosted by Dr. Bhoomi Panchal, BNYS.\n\nJoin Zoom Meeting:\n" + ZOOM_JOIN_URL + "\n\nMeeting ID: " + ZOOM_MEETING_ID + "\nPasscode: " + ZOOM_PASSCODE + "\n\nThe calendar currently reserves 6:00-7:00 PM IST. The duration is provisional.";
}
__name(calendarDescription, "calendarDescription");
function createGoogleCalendarUrl() {
  const parameters = new URLSearchParams({
    action: "TEMPLATE",
    text: WEBINAR_TITLE,
    dates: `${compactUtc(WEBINAR_START_UTC)}/` + compactUtc(WEBINAR_END_UTC),
    details: calendarDescription(),
    location: ZOOM_JOIN_URL
  });
  return "https://calendar.google.com/calendar/render?" + parameters.toString();
}
__name(createGoogleCalendarUrl, "createGoogleCalendarUrl");
function createOutlookCalendarUrl() {
  const parameters = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: WEBINAR_TITLE,
    startdt: WEBINAR_START_UTC,
    enddt: WEBINAR_END_UTC,
    body: calendarDescription(),
    location: ZOOM_JOIN_URL
  });
  return "https://outlook.live.com/calendar/0/deeplink/compose?" + parameters.toString();
}
__name(createOutlookCalendarUrl, "createOutlookCalendarUrl");
function createIcsUrl() {
  return WEBSITE_URL + "/api/webinar-register?calendar=ics";
}
__name(createIcsUrl, "createIcsUrl");
function escapeIcsText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}
__name(escapeIcsText, "escapeIcsText");
function foldIcsLine(line) {
  const encoder = new TextEncoder();
  const output = [];
  let current = "";
  let currentBytes = 0;
  for (const character of line) {
    const characterBytes = encoder.encode(character).length;
    const limit = output.length === 0 ? 75 : 74;
    if (currentBytes + characterBytes > limit && current.length > 0) {
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
__name(foldIcsLine, "foldIcsLine");
function createIcsContent() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//VYANA Wellness//Webinar Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:navratri-2026@vyanaawellness.com",
    "DTSTAMP:20260918T000000Z",
    `DTSTART:${compactUtc(
      WEBINAR_START_UTC
    )}`,
    `DTEND:${compactUtc(
      WEBINAR_END_UTC
    )}`,
    `SUMMARY:${escapeIcsText(
      WEBINAR_TITLE
    )}`,
    `DESCRIPTION:${escapeIcsText(
      calendarDescription()
    )}`,
    `LOCATION:${escapeIcsText(
      ZOOM_JOIN_URL
    )}`,
    `URL:${ZOOM_JOIN_URL}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ];
  return lines.map(foldIcsLine).join("\r\n") + "\r\n";
}
__name(createIcsContent, "createIcsContent");
async function onRequestGet({
  request
}) {
  const url = new URL(request.url);
  if (url.searchParams.get(
    "calendar"
  ) !== "ics") {
    return json(
      {
        success: false,
        error: "Calendar resource not found."
      },
      404
    );
  }
  return new Response(
    createIcsContent(),
    {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'attachment; filename="vyana-navratri-webinar.ics"',
        "Cache-Control": "public, max-age=300"
      }
    }
  );
}
__name(onRequestGet, "onRequestGet");
async function sendEmail(apiKey, from, to, subject, html) {
  const response = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html
      })
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
__name(sendEmail, "sendEmail");
async function onRequestPost2({
  request,
  env
}) {
  try {
    if (!env.DB) {
      console.error(
        "Missing D1 binding: DB"
      );
      return json(
        {
          success: false,
          error: "Registration service is not configured."
        },
        503
      );
    }
    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL) {
      console.error(
        "Missing Resend environment variables."
      );
      return json(
        {
          success: false,
          error: "Registration email service is not configured."
        },
        503
      );
    }
    const contentType = request.headers.get(
      "content-type"
    ) || "";
    if (!contentType.toLowerCase().includes(
      "application/json"
    )) {
      return json(
        {
          success: false,
          error: "Invalid request format."
        },
        415
      );
    }
    const rawBody = await request.text();
    if (rawBody.length > MAX_REQUEST_LENGTH) {
      return json(
        {
          success: false,
          error: "Registration data is too large."
        },
        413
      );
    }
    let input;
    try {
      input = JSON.parse(rawBody);
    } catch {
      return json(
        {
          success: false,
          error: "Invalid registration data."
        },
        400
      );
    }
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
      return json(
        {
          success: false,
          error: "Invalid registration data."
        },
        400
      );
    }
    const registration = parseRegistration(
      input
    );
    if (!registration.name || !registration.whatsapp || !isValidEmail2(
      registration.email
    ) || !registration.fastingExperience || registration.primaryGoals.length === 0 || registration.learningInterests.length === 0 || !registration.educationalConsent || !registration.webinarUpdatesConsent) {
      return json(
        {
          success: false,
          error: "Please complete all required registration fields."
        },
        400
      );
    }
    const registrationId = crypto.randomUUID();
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
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
    ).bind(
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
    ).run();
    const safeName = escapeHtml2(
      registration.name
    );
    const safeEmail = escapeHtml2(
      registration.email
    );
    const safeWhatsapp = escapeHtml2(
      registration.whatsapp
    );
    const safeCity = escapeHtml2(
      registration.cityState || "Not provided"
    );
    const safeGoals = registration.primaryGoals.map(escapeHtml2).join(", ");
    const safeInterests = registration.learningInterests.map(escapeHtml2).join(", ");
    const safeMeetingId = escapeHtml2(
      ZOOM_MEETING_ID
    );
    const safePasscode = escapeHtml2(
      ZOOM_PASSCODE
    );
    const safeZoomUrl = escapeHtml2(
      ZOOM_JOIN_URL
    );
    const googleCalendarUrl = createGoogleCalendarUrl();
    const outlookCalendarUrl = createOutlookCalendarUrl();
    const icsCalendarUrl = createIcsUrl();
    const notificationHtml = `
      <div style="
        font-family:Arial,sans-serif;
        max-width:650px;
        margin:auto;
        color:#234D36;
        line-height:1.7;
      ">

        <h1>
          New VYANA Webinar Registration
        </h1>

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
          The complete registration has
          been saved in Cloudflare D1.
        </p>

      </div>
    `;
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

        <p>
          Dear ${safeName},
        </p>

        <p>
          Thank you for registering
          for our upcoming webinar!
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

          <p style="
            margin:0 0 8px;
          ">
            <strong>Date:</strong>
            ${WEBINAR_DATE_LABEL}
          </p>

          <p style="
            margin:0 0 8px;
          ">
            <strong>Time:</strong>
            ${WEBINAR_TIME_LABEL}
          </p>

          <p style="
            margin:0 0 8px;
          ">
            <strong>Duration:</strong>
            ${WEBINAR_DURATION_LABEL}
          </p>

          <p style="
            margin:0;
          ">
            <strong>Format:</strong>
            Live on Zoom
          </p>

        </div>

        <p>
          Your registration has been
          received successfully.
          We look forward to having you join us!
        </p>

        <!-- ZOOM JOINING SECTION -->

        <div style="
          background:#F0F7EE;
          border:1px solid #A8C3A0;
          border-radius:12px;
          padding:24px;
          margin:28px 0;
          text-align:center;
        ">

          <h2 style="
            color:#234D36;
            font-size:23px;
            margin-top:0;
            margin-bottom:12px;
          ">
            Your Webinar Joining Details
          </h2>

          <p style="
            color:#4F7942;
            font-size:14px;
            margin-bottom:22px;
          ">
            Join Dr. Bhoomi Panchal
            live on Zoom.
          </p>

          <a
            href="${safeZoomUrl}"
            style="
              display:inline-block;
              background:#234D36;
              color:#FFFFFF;
              padding:16px 30px;
              border-radius:8px;
              text-decoration:none;
              font-size:16px;
              font-weight:bold;
            "
          >
            Join Webinar on Zoom
          </a>

          <p style="
            margin-top:24px;
            margin-bottom:8px;
            font-size:14px;
          ">
            <strong>Meeting ID:</strong>
            ${safeMeetingId}
          </p>

          <p style="
            margin-top:0;
            margin-bottom:0;
            font-size:14px;
          ">
            <strong>Passcode:</strong>
            ${safePasscode}
          </p>

          <p style="
            margin-top:20px;
            margin-bottom:0;
            font-size:12px;
            color:#666666;
          ">
            We recommend joining
            5 minutes early to check
            your audio and internet connection.
          </p>

        </div>

        <p style="
          color:#666666;
          font-size:13px;
        ">
          Please keep this email handy
          on the day of the webinar.
          Use the Zoom button above
          to join the session.
        </p>

        <hr style="
          border:none;
          border-top:1px solid #DDE8D9;
          margin:30px 0;
        ">

        <!-- CALENDAR SECTION -->

        <h2 style="
          color:#234D36;
          font-size:22px;
          text-align:center;
        ">
          Save the Date
        </h2>

        <p style="
          text-align:center;
        ">
          Add this webinar to your
          personal calendar so
          you don't miss it.
        </p>

        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          style="
            margin:24px 0;
          "
        >

          <tr>
            <td
              align="center"
              style="padding:6px;"
            >

              <a
                href="${escapeHtml2(googleCalendarUrl)}"
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
            <td
              align="center"
              style="padding:6px;"
            >

              <a
                href="${escapeHtml2(outlookCalendarUrl)}"
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
            <td
              align="center"
              style="padding:6px;"
            >

              <a
                href="${escapeHtml2(icsCalendarUrl)}"
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
          The calendar currently reserves
          6:00-7:00 PM IST.
          The duration is provisional.
          Your calendar event includes
          the Zoom joining details.
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
          This webinar is educational
          and does not replace
          individualized medical advice.
        </p>

      </div>
    `;
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
        "Your VYANA Navratri Webinar Registration - Zoom Joining Details",
        confirmationHtml
      )
    ]);
    const notificationStatus = emailResults[0].status === "fulfilled" ? "sent" : "failed";
    const confirmationStatus = emailResults[1].status === "fulfilled" ? "sent" : "failed";
    try {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET notification_status = ?,
             confirmation_status = ?
         WHERE id = ?`
      ).bind(
        notificationStatus,
        confirmationStatus,
        registrationId
      ).run();
    } catch (error) {
      console.error(
        "Failed to update email statuses:",
        error
      );
    }
    if (notificationStatus === "failed" || confirmationStatus === "failed") {
      console.error(
        "Registration saved but email sending failed:",
        registrationId
      );
      return json({
        success: true,
        registrationId,
        emailStatus: "partial_failure",
        message: "Registration saved. Some emails could not be sent."
      });
    }
    return json({
      success: true,
      registrationId,
      emailStatus: "sent",
      message: "Registration completed successfully."
    });
  } catch (error) {
    console.error(
      "Webinar registration error:",
      error
    );
    return json(
      {
        success: false,
        error: "We could not complete your registration. Please try again later."
      },
      500
    );
  }
}
__name(onRequestPost2, "onRequestPost");

// ../.wrangler/tmp/pages-vbXsWg/functionsRoutes-0.9923427744699347.mjs
var routes = [
  {
    routePath: "/api/contact",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/webinar-register",
    mountPath: "/api",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/api/webinar-register",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  }
];

// ../node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
