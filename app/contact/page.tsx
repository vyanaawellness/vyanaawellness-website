import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
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

              <ContactForm />
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