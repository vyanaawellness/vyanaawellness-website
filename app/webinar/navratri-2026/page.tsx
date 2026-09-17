import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WebinarRegistrationForm from "../../components/WebinarRegistrationForm";

export const metadata: Metadata = {
  title: "Navratri Therapeutic Fasting Webinar | VYANA Wellness",
  description:
    "Join Dr. Bhoomi Panchal (BNYS) for an educational webinar on mindful and safe fasting during Navratri. Sunday, 4 October 2026 at 6:00 PM IST.",
  alternates: {
    canonical: "/webinar/navratri-2026",
  },
};

const learningTopics = [
  {
    number: "01",
    title: "Understand Fasting",
    description:
      "Explore the principles behind fasting and how fasting practices may affect the body.",
  },
  {
    number: "02",
    title: "Eat Mindfully",
    description:
      "Learn about food choices, hydration, balanced meals, and breaking a fast thoughtfully.",
  },
  {
    number: "03",
    title: "Prioritize Safety",
    description:
      "Understand common fasting mistakes, warning signs, and situations where fasting may not be appropriate.",
  },
  {
    number: "04",
    title: "Build Sustainable Habits",
    description:
      "Discover practical ways to approach Navratri with greater awareness and maintain balanced habits afterward.",
  },
];

const eventDetails = [
  {
    label: "DATE",
    value: "Sunday, 4 October 2026",
    detail: "Mark your calendar",
  },
  {
    label: "TIME",
    value: "6:00 PM IST",
    detail: "Indian Standard Time",
  },
  {
    label: "LOCATION",
    value: "Online Webinar",
    detail: "Attend from wherever you are",
  },
  {
    label: "BONUS",
    value: "Navratri Fasting Guide",
    detail: "Complimentary resource for participants",
  },
];

export default function NavratriWebinarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F4ED] text-[#234D36]">
      <Header />

      <main className="flex-1">
        {/* WEBINAR BANNER */}
        <section
          aria-label="Navratri therapeutic fasting webinar banner"
          className="w-full overflow-hidden bg-[#234D36]"
        >
          <Image
            src="/images/vyana-navratri-webinar.png"
            alt="VYANA Wellness Navratri Therapeutic Fasting Webinar with Dr. Bhoomi Panchal on Sunday, 4 October 2026 at 6 PM IST"
            width={1898}
            height={716}
            priority
            className="h-auto w-full"
            sizes="100vw"
          />
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4F7942] sm:text-sm">
              VYANA Wellness Presents
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-tight text-[#234D36] sm:text-5xl lg:text-6xl">
              Therapeutic Fasting During Navratri
            </h1>

            <p className="mt-5 font-serif text-xl italic text-[#947638] sm:text-2xl">
              Ancient Wisdom for Modern Health
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-[#C5A25B]" />

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
              Navratri is a time of reflection, devotion, and renewal.
              Join Dr. Bhoomi Panchal for an educational conversation
              about approaching traditional fasting practices with
              greater awareness of nutrition, hydration, and individual
              health needs.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
              Whether you fast every year or are exploring Navratri
              fasting for the first time, this webinar will help you
              understand practical considerations and make more
              informed decisions about your approach.
            </p>

            <a
              href="#register"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#234D36] px-9 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#356447]"
            >
              Register for the Webinar
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Sunday, 4 October 2026 · 6:00 PM IST · Online
            </p>
          </div>
        </section>

        {/* EVENT DETAILS */}
        <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4F7942]">
                Save the Date
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#234D36] sm:text-4xl">
                Your Webinar at a Glance
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {eventDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-[#E2E9DE] bg-[#FAFBF8] px-6 py-8 text-center"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-[#947638]">
                    {detail.label}
                  </p>

                  <h3 className="mt-4 font-serif text-xl leading-snug text-[#234D36]">
                    {detail.value}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEARNING TOPICS */}
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4F7942]">
                The Webinar Experience
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#234D36] sm:text-4xl lg:text-5xl">
                What You&apos;ll Discover
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                A thoughtful introduction to Navratri fasting that
                brings together traditional practices and practical
                health considerations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {learningTopics.map((topic) => (
                <article
                  key={topic.number}
                  className="rounded-3xl border border-[#DDE8D9] bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E7EFE3] font-serif text-lg text-[#234D36]">
                      {topic.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl text-[#234D36]">
                        {topic.title}
                      </h3>

                      <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#register"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#234D36] px-9 py-4 text-sm font-semibold text-white transition hover:bg-[#356447]"
              >
                Join the Webinar
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT DR. BHOOMI */}
        <section className="bg-[#234D36] px-5 py-16 text-white sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-[#DDE8D9] shadow-2xl">
              <Image
                src="/images/dr-bhoomi.jpeg"
                alt="Dr. Bhoomi Panchal, founder of VYANA Wellness"
                width={700}
                height={850}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BD78]">
                Meet Your Webinar Host
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Dr. Bhoomi Panchal
              </h2>

              <p className="mt-4 text-lg text-[#D9BD78]">
                BNYS · Founder, VYANA Wellness
              </p>

              <div className="mt-7 h-px w-20 bg-[#C5A25B]" />

              <p className="mt-7 text-base leading-8 text-white/85">
                Dr. Bhoomi Panchal is the founder of VYANA Wellness
                and holds a Bachelor of Naturopathy and Yogic Sciences
                (BNYS). With five years of experience in holistic
                healthcare, she focuses on helping people develop
                informed, sustainable approaches to well-being.
              </p>

              <p className="mt-5 text-base leading-8 text-white/85">
                In this webinar, she will explore Navratri fasting
                through an educational lens, emphasizing mindful food
                choices, practical considerations, and the importance
                of individual health needs.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center border-b border-[#D9BD78] pb-2 text-sm font-semibold text-[#D9BD78] transition hover:text-white"
              >
                Learn More About Dr. Bhoomi
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* REGISTRATION FORM */}
        <section
          id="register"
          className="scroll-mt-24 bg-[#F7F4ED] px-4 py-16 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4F7942]">
                Join Us This Navratri
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#234D36] sm:text-4xl lg:text-5xl">
                Register for the Webinar
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600">
                Complete the form to submit your registration for
                Therapeutic Fasting During Navratri with Dr. Bhoomi
                Panchal.
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fields marked with * are required. Please provide
                accurate contact information so we can share
                webinar-related details.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#DDE8D9] bg-white shadow-xl">
              <div className="bg-[#234D36] px-8 py-8 text-center sm:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9BD78]">
                  VYANA Wellness
                </p>

                <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                  Navratri Webinar Registration
                </h3>

                <p className="mt-3 text-sm text-white/75">
                  Sunday, 4 October 2026 · 6:00 PM IST
                </p>
              </div>

              <div className="px-6 py-10 sm:px-12 sm:py-14">
                <WebinarRegistrationForm />
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL DISCLAIMER */}
        <section className="border-t border-[#E5EBDD] bg-white px-5 py-12 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl text-[#234D36]">
              A Note on Fasting &amp; Your Health
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              This webinar is intended for general education and does
              not provide individualized medical advice. Fasting may
              not be suitable for everyone, particularly people with
              certain medical conditions, those taking medication,
              pregnant or breastfeeding individuals, and people with
              a history of eating disorders. Seek guidance from an
              appropriate healthcare professional before changing
              your eating pattern.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              For personalized guidance, please{" "}
              <Link
                href="/book"
                className="font-semibold text-[#4F7942] underline underline-offset-4 hover:text-[#234D36]"
              >
                explore a consultation
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}