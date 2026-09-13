import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dr. Bhoomi Panchal, BNYS, and the philosophy behind VYANA Wellness.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-vyana-cream px-6 pb-24 pt-40 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
              About VYANA Wellness
            </p>

            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-vyana-dark sm:text-6xl">
              Helping you build health, not simply manage symptoms.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              VYANA Wellness was created to help people understand their health,
              build sustainable habits, and take a more active role in their
              long-term wellbeing.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative min-h-[520px] overflow-hidden rounded-[3rem]">
              <Image
                src="/images/dr-bhoomi.jpeg"
                alt="Dr. Bhoomi Panchal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="max-w-md rounded-2xl bg-white/90 p-6 backdrop-blur-sm">
                  <p className="font-serif text-2xl text-vyana-dark">
                    Dr. Bhoomi Panchal
                  </p>

                  <p className="mt-2 text-sm text-vyana-green">
                    BNYS · Bachelor of Naturopathy and Yogic Sciences
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
                Founder
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vyana-dark sm:text-5xl">
                Meet Dr. Bhoomi Panchal.
              </h2>

              <p className="mt-7 leading-8 text-gray-600">
                Dr. Bhoomi Panchal has five years of experience in holistic
                healthcare and holds a Bachelor of Naturopathy and Yogic
                Sciences.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Her approach combines naturopathic principles, nutrition,
                lifestyle modification, yoga, stress management, and preventive
                healthcare to help people make realistic and sustainable
                improvements to their wellbeing.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Rather than focusing only on individual symptoms, VYANA
                Wellness considers lifestyle, nutrition, movement, sleep,
                stress, and other factors that can influence overall health.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-vyana-cream py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-3xl bg-white p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Our Vision
              </p>

              <h2 className="mt-5 font-serif text-3xl text-vyana-dark">
                Empowering people to take charge of their health.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                To help individuals build health through sustainable lifestyle
                practices and empower them to take charge of their own health.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-vyana-green">
                Our Mission
              </p>

              <h2 className="mt-5 font-serif text-3xl text-vyana-dark">
                Practical guidance for healthier lives.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                To educate, guide, and support individuals, families, and
                organizations through personalized lifestyle interventions,
                preventive healthcare, and holistic wellness solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-4xl text-vyana-dark sm:text-5xl">
              Start your wellness journey.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Explore how personalized lifestyle guidance can support your
              health goals.
            </p>

            <Link
              href="/book"
              className="mt-9 inline-block rounded-full bg-vyana-green px-8 py-4 text-sm font-semibold text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}