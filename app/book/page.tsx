import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Book an online wellness consultation with Dr. Bhoomi Panchal, BNYS at VYANA Wellness.",
};

export default function BookPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-vyana-cream px-6 pb-14 pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Book Consultation
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight text-vyana-dark sm:text-6xl">
              Begin your wellness journey.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Schedule an online consultation with Dr. Bhoomi Panchal, BNYS to
              discuss your wellness goals, lifestyle, and the support you are
              looking for.
            </p>
          </div>
        </section>

        {/* Calendly Booking */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[2rem] border border-vyana-sage/30 bg-white shadow-sm">
              <iframe
                src="https://calendly.com/dr-bhoomi15/30min"
                title="Book a consultation with Dr. Bhoomi Panchal"
                className="h-[850px] w-full border-0"
                loading="lazy"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Having trouble viewing the booking calendar?
              </p>

              <a
                href="https://calendly.com/dr-bhoomi15/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-vyana-green underline underline-offset-4"
              >
                Open booking calendar in a new window →
              </a>
            </div>
          </div>
        </section>

        {/* Consultation Benefits */}
        <section className="bg-vyana-cream py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                Your Consultation
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark">
                A simple first step toward better health.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-vyana-sage/30 font-serif text-lg text-vyana-green">
                  01
                </div>

                <h3 className="font-serif text-2xl text-vyana-dark">
                  Personalized
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Discuss your individual wellness goals, concerns, lifestyle,
                  and the areas where you would like support.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-vyana-sage/30 font-serif text-lg text-vyana-green">
                  02
                </div>

                <h3 className="font-serif text-2xl text-vyana-dark">
                  Convenient
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Choose an available consultation time that works with your
                  schedule using our online booking calendar.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-vyana-sage/30 font-serif text-lg text-vyana-green">
                  03
                </div>

                <h3 className="font-serif text-2xl text-vyana-dark">
                  Online
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Attend your consultation remotely using the meeting details
                  provided after your booking is confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="text-sm leading-7 text-gray-500">
              VYANA Wellness provides lifestyle and wellness guidance.
              Consultations are not a substitute for emergency medical care,
              diagnosis, or treatment from your physician or other qualified
              healthcare professional.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}