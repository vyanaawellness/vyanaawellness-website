 "use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

type CheckboxGroupProps = {
  name: string;
  options: string[];
  required?: boolean;
};

const primaryGoals = [
  "Learn how to fast correctly",
  "Weight management",
  "Improve digestion",
  "Better energy levels",
  "Metabolic health support",
  "Diabetes prevention & management",
  "Hormonal balance",
  "Mental clarity and focus",
  "Spiritual well-being",
  "General health improvement",
];

const fastingSymptoms = [
  "Weakness",
  "Acidity",
  "Headache",
  "Excessive hunger",
  "Low energy",
  "Dizziness",
  "Constipation",
  "Cravings",
  "None of the above",
];

const learningInterests = [
  "Science behind fasting",
  "Therapeutic benefits of fasting",
  "Foods to eat during Navratri",
  "Foods to avoid",
  "Weight loss during fasting",
  "Fasting for metabolic health",
  "Safe fasting practices",
  "Breaking the fast correctly",
  "Common mistakes during fasting",
  "Detoxification and healing",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DDE8D9] bg-white px-4 py-3.5 text-[#234D36] outline-none transition placeholder:text-gray-400 focus:border-[#4F7942] focus:ring-2 focus:ring-[#4F7942]/15";

const labelClass = "block text-sm font-semibold text-[#234D36]";

function CheckboxGroup({
  name,
  options,
  required = false,
}: CheckboxGroupProps) {
  const [selected, setSelected] = useState<string[]>([]);

  function handleChange(option: string, checked: boolean) {
    setSelected((current) => {
      if (checked) {
        if (option === "None of the above") {
          return [option];
        }

        return [...current.filter((item) => item !== "None of the above"), option];
      }

      return current.filter((item) => item !== option);
    });
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5EBDD] bg-[#FAFBF8] p-4 transition hover:border-[#A8C3A0]"
        >
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selected.includes(option)}
            onChange={(event) => handleChange(option, event.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#234D36]"
          />

          <span className="text-sm leading-6 text-gray-700">{option}</span>
        </label>
      ))}

      {required && (
        <input
          type="text"
          value={selected.length > 0 ? "selected" : ""}
          required
          tabIndex={-1}
          aria-hidden="true"
          onChange={() => {}}
          className="pointer-events-none absolute h-px w-px opacity-0"
        />
      )}
    </div>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 border-b border-[#E5EBDD] pb-6">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#234D36] font-serif text-lg text-[#F7F4ED]">
          {number}
        </span>

        <h3 className="font-serif text-2xl text-[#234D36] sm:text-3xl">
          {title}
        </h3>
      </div>

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>
      )}
    </div>
  );
}

export default function WebinarRegistrationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      whatsapp: String(formData.get("whatsapp") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      cityState: String(formData.get("cityState") || "").trim(),
      ageGroup: String(formData.get("ageGroup") || ""),
      gender: String(formData.get("gender") || ""),
      fastingExperience: String(formData.get("fastingExperience") || ""),
      primaryGoals: formData.getAll("primaryGoals").map(String),
      fastingPattern: String(formData.get("fastingPattern") || ""),
      fastingSymptoms: formData.getAll("fastingSymptoms").map(String),
      learningInterests: formData.getAll("learningInterests").map(String),
      question: String(formData.get("question") || "").trim(),
      referralSource: String(formData.get("referralSource") || ""),
      educationalConsent: formData.get("educationalConsent") === "on",
      webinarUpdatesConsent: formData.get("webinarUpdatesConsent") === "on",
      marketingConsent: formData.get("marketingConsent") === "on",
    };

    if (data.primaryGoals.length === 0 || data.learningInterests.length === 0) {
      setStatus("error");
      setErrorMessage(
        "Please select at least one primary goal and one learning topic."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/webinar-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Registration could not be completed."
        );
      }

      setStatus("success");
      form.reset();

      window.scrollTo({
        top: form.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-[#DDE8D9] bg-[#F7F4ED] px-6 py-14 text-center sm:px-12"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E0ECDC] text-4xl text-[#234D36]">
          ✓
        </div>

        <h3 className="mt-7 font-serif text-3xl text-[#234D36] sm:text-4xl">
          Thank You for Registering!
        </h3>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-600">
          Your registration for the Navratri Therapeutic Fasting Webinar
          with Dr. Bhoomi Panchal (BNYS) has been received.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
          Webinar joining instructions will be shared using the contact
          details you provided.
        </p>

        <p className="mt-8 font-serif text-xl text-[#234D36]">
          VYANA Wellness
        </p>

        <p className="mt-2 text-sm text-[#4F7942]">
          Restore Your Inner Rhythm
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* SECTION 1 */}
      <section>
        <SectionHeading
          number="01"
          title="Registration Details"
          description="Tell us how to contact you with webinar information."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="webinar-name" className={labelClass}>
              Full Name <span className="text-red-600">*</span>
            </label>

            <input
              id="webinar-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              required
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="webinar-whatsapp" className={labelClass}>
              WhatsApp Number <span className="text-red-600">*</span>
            </label>

            <input
              id="webinar-whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              required
              placeholder="+91 98765 43210"
              className={inputClass}
            />

            <p className="mt-2 text-xs text-gray-500">
              Include your country code if outside India.
            </p>
          </div>

          <div>
            <label htmlFor="webinar-email" className={labelClass}>
              Email Address <span className="text-red-600">*</span>
            </label>

            <input
              id="webinar-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="webinar-city" className={labelClass}>
              City &amp; State
            </label>

            <input
              id="webinar-city"
              name="cityState"
              type="text"
              maxLength={150}
              placeholder="e.g. Ahmedabad, Gujarat"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="webinar-age" className={labelClass}>
              Age Group
            </label>

            <select
              id="webinar-age"
              name="ageGroup"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select age group (optional)</option>
              <option value="Under 18">Under 18</option>
              <option value="18–25">18–25</option>
              <option value="26–35">26–35</option>
              <option value="36–45">36–45</option>
              <option value="46–55">46–55</option>
              <option value="Above 55">Above 55</option>
            </select>
          </div>

          <div>
            <label htmlFor="webinar-gender" className={labelClass}>
              Gender
            </label>

            <select
              id="webinar-gender"
              name="gender"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select (optional)</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section>
        <SectionHeading
          number="02"
          title="Your Fasting Experience"
          description="Help us understand your familiarity with Navratri fasting."
        />

        <div className="space-y-9">
          <div>
            <label htmlFor="webinar-experience" className={labelClass}>
              Have you observed Navratri fasting before?{" "}
              <span className="text-red-600">*</span>
            </label>

            <select
              id="webinar-experience"
              name="fastingExperience"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select your experience
              </option>
              <option value="Yes, every year">Yes, every year</option>
              <option value="Occasionally">Occasionally</option>
              <option value="Once or twice before">
                Once or twice before
              </option>
              <option value="No, this will be my first time">
                No, this will be my first time
              </option>
            </select>
          </div>

          <fieldset>
            <legend className={labelClass}>
              What is your primary goal for attending this webinar?{" "}
              <span className="text-red-600">*</span>
            </legend>

            <p className="mb-4 mt-2 text-xs text-gray-500">
              Select all that apply.
            </p>

            <CheckboxGroup
              name="primaryGoals"
              options={primaryGoals}
              required
            />
          </fieldset>

          <div>
            <label htmlFor="webinar-pattern" className={labelClass}>
              Which fasting pattern do you usually follow?
            </label>

            <select
              id="webinar-pattern"
              name="fastingPattern"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select (optional)</option>
              <option value="Fruit-only fasting">Fruit-only fasting</option>
              <option value="One meal per day">One meal per day</option>
              <option value="Two meals per day">Two meals per day</option>
              <option value="Milk and fruits">Milk and fruits</option>
              <option value="Water fasting">Water fasting</option>
              <option value="Not sure">Not sure</option>
              <option value="First time fasting">First time fasting</option>
            </select>
          </div>

          <fieldset>
            <legend className={labelClass}>
              Have you experienced any of the following during fasting?
            </legend>

            <p className="mb-4 mt-2 text-xs text-gray-500">
              Select all that apply.
            </p>

            <CheckboxGroup
              name="fastingSymptoms"
              options={fastingSymptoms}
            />
          </fieldset>
        </div>
      </section>

      {/* SECTION 3 */}
      <section>
        <SectionHeading
          number="03"
          title="Webinar Expectations"
          description="Let Dr. Bhoomi know which topics interest you most."
        />

        <div className="space-y-9">
          <fieldset>
            <legend className={labelClass}>
              What would you most like to learn during this webinar?{" "}
              <span className="text-red-600">*</span>
            </legend>

            <p className="mb-4 mt-2 text-xs text-gray-500">
              Select all that apply.
            </p>

            <CheckboxGroup
              name="learningInterests"
              options={learningInterests}
              required
            />
          </fieldset>

          <div>
            <label htmlFor="webinar-question" className={labelClass}>
              Is there a specific question you would like Dr. Bhoomi to
              address during the webinar?
            </label>

            <textarea
              id="webinar-question"
              name="question"
              rows={5}
              maxLength={1000}
              placeholder="Share a general question about fasting or the webinar..."
              className={inputClass}
            />

            <p className="mt-2 text-xs text-gray-500">
              Please do not include personal medical information.
            </p>
          </div>

          <div>
            <label htmlFor="webinar-source" className={labelClass}>
              How did you hear about this webinar?
            </label>

            <select
              id="webinar-source"
              name="referralSource"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select (optional)</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="VYANA Website">VYANA Website</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section>
        <SectionHeading
          number="04"
          title="Consent & Registration"
          description="Please review the following information before registering."
        />

        <div className="space-y-5">
          <div className="rounded-2xl border border-[#E8DFC8] bg-[#FFF9EB] p-5">
            <p className="text-sm font-semibold text-[#775A26]">
              Important information
            </p>

            <p className="mt-3 text-sm leading-7 text-[#775A26]">
              This webinar is educational and does not replace
              individualized medical advice. Fasting is not suitable
              for everyone. Please consult an appropriate healthcare
              professional before fasting if you have a medical
              condition, take medication, are pregnant or breastfeeding,
              or have other health concerns.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#775A26]">
              Do not submit medical records, laboratory reports,
              prescriptions, or sensitive health information through
              this form.
            </p>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5EBDD] p-4">
            <input
              type="checkbox"
              name="educationalConsent"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#234D36]"
            />

            <span className="text-sm leading-7 text-gray-700">
              I understand that this webinar is intended for educational
              purposes only and does not replace personalized medical
              advice. <span className="text-red-600">*</span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5EBDD] p-4">
            <input
              type="checkbox"
              name="webinarUpdatesConsent"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#234D36]"
            />

            <span className="text-sm leading-7 text-gray-700">
              I agree to receive webinar-related updates, joining
              instructions, and reminders from VYANA Wellness via
              WhatsApp and/or email.{" "}
              <span className="text-red-600">*</span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5EBDD] p-4">
            <input
              type="checkbox"
              name="marketingConsent"
              className="mt-1 h-4 w-4 shrink-0 accent-[#234D36]"
            />

            <span className="text-sm leading-7 text-gray-700">
              I would also like to receive future wellness information,
              educational resources, and event announcements from
              VYANA Wellness. (Optional)
            </span>
          </label>

          <p className="text-xs leading-6 text-gray-500">
            Your registration details will be used to manage this
            webinar and communicate event information. Future wellness
            marketing is optional.
          </p>

          {status === "error" && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-4"
            >
              <p className="text-sm font-semibold text-red-800">
                Registration could not be completed.
              </p>

              <p className="mt-2 text-sm text-red-700">
                {errorMessage}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-[#234D36] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#356447] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending"
              ? "Submitting Registration..."
              : "Complete My Registration"}
          </button>

          <p className="text-center text-xs leading-6 text-gray-500">
            Sunday, 4 October 2026 · 6:00 PM IST · Online Webinar
          </p>
        </div>
      </section>
    </form>
  );
}