import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for the VYANA Wellness website.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-vyana-cream px-6 pb-20 pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Privacy
            </p>

            <h1 className="mt-5 font-serif text-5xl text-vyana-dark sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-7 leading-7 text-gray-600">
              This page will explain how VYANA Wellness collects, uses, stores,
              and protects information submitted through this website.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl space-y-10 px-6 text-gray-600">
            <div>
              <h2 className="font-serif text-2xl text-vyana-dark">
                Information We Collect
              </h2>

              <p className="mt-4 leading-7">
                Information may include details you voluntarily provide through
                contact forms, consultation bookings, email communication, or
                other interactions with VYANA Wellness.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-vyana-dark">
                How Information Is Used
              </h2>

              <p className="mt-4 leading-7">
                Information may be used to respond to enquiries, coordinate
                consultations, provide requested services, maintain website
                functionality, and improve the visitor experience.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-vyana-dark">
                Third-Party Services
              </h2>

              <p className="mt-4 leading-7">
                The website may use third-party services for scheduling,
                analytics, hosting, and related functionality. These providers
                may process information according to their own privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-vyana-dark">
                Contact
              </h2>

              <p className="mt-4 leading-7">
                Questions regarding privacy can be sent to
                {" "}
                <a
                  href="mailto:dr.bhoomi15@gmail.com"
                  className="font-medium text-vyana-green"
                >
                  dr.bhoomi15@gmail.com
                </a>
                .
              </p>
            </div>

            <p className="rounded-2xl bg-vyana-cream p-6 text-sm leading-6">
              This is an initial website privacy-policy framework. Before
              production launch, we will review and expand it based on the
              actual contact form, analytics, Calendly configuration, cookies,
              and the jurisdictions in which VYANA Wellness provides services.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}