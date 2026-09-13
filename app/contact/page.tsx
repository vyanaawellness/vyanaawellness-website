import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact VYANA Wellness or book an online consultation with Dr. Bhoomi Panchal.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-vyana-cream px-6 pb-20 pt-40 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                Contact VYANA Wellness
              </p>

              <h1 className="mt-5 font-serif text-5xl leading-tight text-vyana-dark sm:text-6xl">
                We&apos;re here to help you take the next step.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
                Have a question about consultations, services, or your wellness
                journey? Send us a message or connect with VYANA Wellness
                directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Area */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                Get in touch
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark">
                Choose the way that works best for you.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-gray-600">
                You can reach VYANA Wellness by email, WhatsApp, Instagram, or
                book a consultation directly through our online booking page.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:dr.bhoomi15@gmail.com"
                  className="block rounded-3xl bg-vyana-cream p-6 transition hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                    Email
                  </p>

                  <p className="mt-3 font-serif text-xl text-vyana-dark">
                    dr.bhoomi15@gmail.com
                  </p>
                </a>

                <a
                  href="https://wa.me/919537571125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-3xl bg-vyana-cream p-6 transition hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                    WhatsApp
                  </p>

                  <p className="mt-3 font-serif text-xl text-vyana-dark">
                    +91 95375 71125
                  </p>
                </a>

                <a
                  href="https://instagram.com/vyanaawellness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-3xl bg-vyana-cream p-6 transition hover:-translate-y-1"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                    Instagram
                  </p>

                  <p className="mt-3 font-serif text-xl text-vyana-dark">
                    @vyanaawellness
                  </p>
                </a>
              </div>

              <div className="mt-8 rounded-3xl bg-vyana-green p-7 text-white">
                <p className="font-serif text-2xl">
                  Prefer to book directly?
                </p>

                <p className="mt-3 text-sm leading-6 text-white/80">
                  Choose an available time and schedule your online consultation
                  with Dr. Bhoomi Panchal.
                </p>

                <Link
                  href="/book"
                  className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-vyana-green"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[2rem] border border-vyana-sage/30 bg-vyana-cream p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                Send a message
              </p>

              <h2 className="mt-4 font-serif text-3xl text-vyana-dark">
                How can we help?
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                Please avoid including detailed medical records, test results,
                prescriptions, or other sensitive health information in this
                form.
              </p>

              <form className="mt-8 space-y-6">
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

                      <option value="consultation">
                        Consultation question
                      </option>

                      <option value="services">Services</option>

                      <option value="booking">Booking support</option>

                      <option value="collaboration">
                        Collaboration / partnership
                      </option>

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
                    placeholder="How can VYANA Wellness help you?"
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-vyana-dark outline-none transition placeholder:text-gray-400 focus:border-vyana-green"
                  />
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-xs leading-5 text-gray-500">
                    By submitting this form, you understand that this contact
                    form is for general enquiries and is not intended for
                    emergency medical concerns.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-vyana-green px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-5 text-center text-xs text-gray-500">
                Form submission will be activated before the website goes live.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Note */}
        <section className="bg-vyana-cream py-14">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm leading-7 text-gray-600">
              If you are experiencing a medical emergency or require urgent
              medical attention, please contact your local emergency services or
              an appropriate healthcare professional.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}