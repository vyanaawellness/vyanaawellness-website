import type { Metadata } from "next";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore personalized wellness services from VYANA Wellness including lifestyle assessment, nutrition guidance, weight management, metabolic health support, yoga, and stress management.",
};

const services = [
  {
    number: "01",
    title: "Lifestyle Assessment",
    description:
      "A thoughtful review of nutrition, sleep, movement, stress, routines, and lifestyle patterns to better understand where you are today.",
  },
  {
    number: "02",
    title: "Personalized Diet Planning",
    description:
      "Practical nutrition guidance shaped around your health goals, food preferences, daily routine, and lifestyle.",
  },
  {
    number: "03",
    title: "Weight Management",
    description:
      "A sustainable approach focused on everyday habits, nutrition, movement, and long-term lifestyle change rather than short-term fixes.",
  },
  {
    number: "04",
    title: "Metabolic Health Support",
    description:
      "Lifestyle-focused guidance to support healthier metabolic habits, including support for diabetes-related wellness goals alongside appropriate medical care.",
  },
  {
    number: "05",
    title: "Fatty Liver Management",
    description:
      "Nutrition, movement, and lifestyle guidance designed to support healthier metabolic and liver-related habits.",
  },
  {
    number: "06",
    title: "Yoga & Stress Management",
    description:
      "Yoga, breathing, relaxation, and lifestyle practices designed to support stress management, balance, and overall wellbeing.",
  },
  {
    number: "07",
    title: "Online Consultation",
    description:
      "Personalized wellness guidance delivered remotely, giving you access to VYANA support wherever you are.",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand your lifestyle, concerns, routines, and wellness goals.",
  },
  {
    number: "02",
    title: "Personalize",
    description:
      "Shape practical recommendations around your individual circumstances.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Build sustainable habits and adjust your approach as your needs evolve.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            BOTANICAL SERVICES HERO
           ===================================================== */}
        <section className="services-botanical-hero">
          <div
            className="services-botanical-hero-image"
            aria-hidden="true"
          />

          <div
            className="services-botanical-hero-overlay"
            aria-hidden="true"
          />

          <div className="vyana-gutter relative z-10 mx-auto max-w-7xl">
            <div className="grid min-h-[430px] items-center gap-10 py-14 sm:min-h-[470px] sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
              {/* Left */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-vyana-green/50" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                    Our Services
                  </p>
                </div>

                <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[1.04] text-vyana-dark sm:text-6xl lg:text-7xl">
                  Care designed
                  <span className="block text-vyana-green">
                    around your life.
                  </span>
                </h1>
              </div>

              {/* Right */}
              <div className="services-hero-copy max-w-xl">
                <p className="text-lg leading-8 text-gray-700">
                  Personalized naturopathic and lifestyle-based wellness
                  guidance that considers the way you eat, move, rest, manage
                  stress, and live every day.
                </p>

                <Link
                  href="/book"
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-vyana-green transition-all duration-300 hover:gap-4"
                >
                  Book a Consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES INTRO
           ===================================================== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="vyana-gutter mx-auto max-w-7xl">
            <div className="grid gap-8 border-b border-gray-200 pb-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:pb-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-vyana-green/40" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                    How We Support You
                  </p>
                </div>
              </div>

              <div>
                <h2 className="max-w-3xl font-serif text-4xl leading-tight text-vyana-dark sm:text-5xl">
                  Your health is shaped by more
                  <span className="text-vyana-green"> than one factor.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  VYANA looks at the everyday patterns that influence your
                  wellbeing and helps translate them into practical,
                  sustainable changes that work within your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
           ===================================================== */}
        <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
          <div className="vyana-gutter mx-auto max-w-7xl">
            <div className="grid gap-x-16 lg:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <article
                  key={service.number}
                  className="group border-b border-gray-200 py-9 sm:py-10"
                >
                  <div className="grid grid-cols-[48px_1fr] gap-3 sm:grid-cols-[58px_1fr] sm:gap-5">
                    <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-vyana-green">
                      {service.number}
                    </span>

                    <div>
                      <h2 className="font-serif text-2xl text-vyana-dark transition-colors duration-300 group-hover:text-vyana-green sm:text-3xl">
                        {service.title}
                      </h2>

                      <p className="mt-4 max-w-xl leading-7 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Online Consultation */}
            <div className="mt-12 sm:mt-16">
              <div className="relative overflow-hidden rounded-[2rem] bg-vyana-cream px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12">
                <div
                  className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-vyana-green/10"
                  aria-hidden="true"
                />

                <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
                  <div className="grid max-w-3xl grid-cols-[48px_1fr] gap-3 sm:grid-cols-[58px_1fr] sm:gap-5">
                    <span className="pt-1 text-xs font-semibold tracking-[0.2em] text-vyana-green">
                      07
                    </span>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vyana-green">
                        Wherever You Are
                      </p>

                      <h2 className="mt-3 font-serif text-3xl text-vyana-dark sm:text-4xl">
                        Online Consultation
                      </h2>

                      <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                        {services[6].description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/book"
                    className="inline-flex w-fit items-center justify-center rounded-full bg-vyana-green px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VYANA APPROACH
           ===================================================== */}
        <section className="relative overflow-hidden bg-vyana-cream py-20 sm:py-24 lg:py-28">
          <div
            className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-vyana-green/[0.03] blur-3xl"
            aria-hidden="true"
          />

          <div className="vyana-gutter relative mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-vyana-green/40" />

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                    The VYANA Approach
                  </p>
                </div>

                <h2 className="mt-6 font-serif text-4xl leading-tight text-vyana-dark sm:text-5xl">
                  Simple in principle.
                  <span className="block text-vyana-green">
                    Personal in practice.
                  </span>
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3 md:gap-0">
                {process.map((step, index) => (
                  <div
                    key={step.number}
                    className={`relative md:px-7 ${
                      index !== process.length - 1
                        ? "md:border-r md:border-vyana-green/15"
                        : ""
                    }`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-vyana-green/30 text-xs font-semibold text-vyana-green">
                      {step.number}
                    </span>

                    <h3 className="mt-5 font-serif text-2xl text-vyana-dark">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
           ===================================================== */}
        <section className="relative overflow-hidden bg-vyana-green py-20 text-white sm:py-24">
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="vyana-gutter relative mx-auto max-w-7xl">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
                  Begin Your Wellness Journey
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Not sure where
                  <span className="block text-vyana-sage">
                    to begin?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  An initial consultation gives you the opportunity to discuss
                  your goals, lifestyle, and concerns and explore what kind of
                  wellness support may be appropriate for you.
                </p>
              </div>

              <Link
                href="/book"
                className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-vyana-green shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}