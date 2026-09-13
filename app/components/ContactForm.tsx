"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-vyana-dark"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition placeholder:text-gray-400 focus:border-vyana-green"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-vyana-dark"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition placeholder:text-gray-400 focus:border-vyana-green"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-vyana-dark"
          >
            Phone
            <span className="ml-1 text-gray-400">(optional)</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="Your phone number"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition placeholder:text-gray-400 focus:border-vyana-green"
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="mb-2 block text-sm font-medium text-vyana-dark"
          >
            Reason for Contact
          </label>

          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition focus:border-vyana-green"
          >
            <option value="" disabled>
              Select a reason
            </option>

            <option value="consultation">Consultation question</option>
            <option value="services">Services</option>
            <option value="booking">Booking support</option>
            <option value="collaboration">Collaboration / partnership</option>
            <option value="general">General enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-vyana-dark"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={2000}
          placeholder="How can VYANA Wellness help you?"
          className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition placeholder:text-gray-400 focus:border-vyana-green"
        />
      </div>

      <div className="rounded-2xl bg-white p-4">
        <p className="text-xs leading-5 text-gray-500">
          By submitting this form, you understand that this contact form is for
          general enquiries and is not intended for emergency medical concerns.
          Please do not include detailed medical records, test results,
          prescriptions, or other sensitive health information.
        </p>
      </div>

      {status === "success" && (
        <div
          role="status"
          className="rounded-2xl border border-green-200 bg-green-50 p-4"
        >
          <p className="text-sm font-medium text-green-800">
            Thank you. Your message has been sent successfully.
          </p>
          <p className="mt-1 text-sm text-green-700">
            VYANA Wellness will get back to you as soon as possible.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-2xl border border-red-200 bg-red-50 p-4"
        >
          <p className="text-sm font-medium text-red-800">
            We couldn&apos;t send your message.
          </p>
          <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-vyana-green px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}