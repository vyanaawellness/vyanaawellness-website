import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Wellness Blog | VYANA Wellness",
  description:
    "Explore naturopathy, nutrition, lifestyle, metabolic health, yoga, stress, sleep, and preventive wellness with VYANA Wellness.",
};

const plannedTopics = [
  "Nutrition & Healthy Eating",
  "Metabolic Health",
  "Gut Health",
  "Women's Wellness",
  "Weight Management",
  "Yoga & Stress",
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-vyana-cream vyana-section">
          <div className="vyana-gutter mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              Wellness Journal
            </p>

            <h1 className="mt-4 max-w-4xl font-serif text-5xl text-vyana-dark sm:text-6xl">
              Practical knowledge for healthier living.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Thoughtful wellness education rooted in naturopathic principles,
              healthy lifestyle practices, and a deeper understanding of the
              body&apos;s natural processes.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="bg-white vyana-section">
          <div className="mx-auto max-w-7xl vyana-gutter">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Featured Article
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark">
                From the VYANA Journal
              </h2>
            </div>

            <Link
              href="/blog/medicatrix-naturae"
              className="group block overflow-hidden rounded-[2.5rem] bg-vyana-cream transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-2">
                {/* Featured Article Image */}
                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:min-h-[460px]">
                  <Image
                    src="/images/medicatrix-naturae.png"
                    alt="Young green plant growing in warm natural sunlight, representing nature's healing power"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Soft overlay for visual consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Category label */}
                  <div className="absolute bottom-8 left-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white drop-shadow-md">
                      Naturopathic Principles
                    </p>
                  </div>
                </div>

                {/* Article Information */}
                <div className="flex flex-col justify-center vyana-panel">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span>Naturopathy</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>

                  <h3 className="mt-6 font-serif text-4xl leading-tight text-vyana-dark sm:text-5xl">
                    Medicatrix Naturae
                  </h3>

                  <p className="mt-2 font-serif text-2xl italic text-vyana-green">
                    Nature&apos;s Healing Power
                  </p>

                  <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
                    Explore one of the foundational principles of naturopathy
                    and the remarkable capacity of the human body to regulate,
                    repair, and restore itself when supported by appropriate
                    conditions.
                  </p>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 font-semibold text-vyana-green">
                      Read article
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Future Topics */}
        <section className="bg-vyana-cream vyana-section">
          <div className="mx-auto max-w-7xl vyana-gutter">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Explore Wellness
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark">
                More from the journal.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                New educational articles covering everyday wellness,
                naturopathy, nutrition, movement, and healthy living are on
                the way.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plannedTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-3xl border border-vyana-green/10 bg-white p-8"
                >
                  <div className="mb-10 h-2 w-2 rounded-full bg-vyana-green" />

                  <h3 className="font-serif text-2xl text-vyana-dark">
                    {topic}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    Articles coming soon.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}