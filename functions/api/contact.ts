interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
}

interface ContactFormData {
  name?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
}

const allowedReasons: Record<string, string> = {
  consultation: "Consultation question",
  services: "Services",
  booking: "Booking support",
  collaboration: "Collaboration / partnership",
  general: "General enquiry",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  try {
    const body = (await context.request.json()) as ContactFormData;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const reason = body.reason?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    // Validate required fields
    if (!name || !email || !reason || !message) {
      return Response.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate email
    if (!isValidEmail(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate contact reason
    if (!allowedReasons[reason]) {
      return Response.json(
        {
          error: "Please select a valid reason for contacting us.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate field lengths
    if (
      name.length > 100 ||
      email.length > 254 ||
      phone.length > 30 ||
      message.length > 2000
    ) {
      return Response.json(
        {
          error: "One or more fields are too long.",
        },
        {
          status: 400,
        }
      );
    }

    // Make submitted content safe for HTML email
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeReason = escapeHtml(allowedReasons[reason]);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: "VYANA Wellness <contact@vyanaawellness.com>",

        to: [context.env.CONTACT_TO_EMAIL],

        reply_to: email,

        subject: `VYANA Wellness enquiry — ${allowedReasons[reason]}`,

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
        `,
      }),
    });

    // Handle Resend failure
    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();

      console.error("Resend error:", resendError);

      return Response.json(
        {
          error:
            "Your message could not be delivered. Please try again shortly.",
        },
        {
          status: 500,
        }
      );
    }

    // Successful submission
    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      {
        error:
          "Something went wrong while sending your message. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}