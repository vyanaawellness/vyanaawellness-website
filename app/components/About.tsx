import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-vyana-cream py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Founder Photograph */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[3rem]">
            <Image
              src="/images/dr-bhoomi.jpeg"
              alt="Dr. Bhoomi Panchal, founder of VYANA Wellness"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />

            {/* Photograph Caption */}
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="font-serif text-2xl text-vyana-dark">
                Dr. Bhoomi Panchal
              </p>

              <p className="mt-1 text-sm text-vyana-green">
                BNYS · Naturopathy & Yogic Sciences
              </p>
            </div>
          </div>
        </div>

        {/* Founder Biography */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            Meet Your Wellness Guide
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-vyana-dark sm:text-5xl">
            Healthcare that looks at the whole you.
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            VYANA Wellness was founded by Dr. Bhoomi Panchal, BNYS, with a
            vision to help individuals take charge of their health through
            sustainable lifestyle practices and holistic wellness.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            With five years of experience in holistic healthcare, Dr. Bhoomi
            combines naturopathic principles, nutrition, yoga, and personalized
            lifestyle interventions to support each individual&apos;s unique
            health journey.
          </p>

          <Link
            href="/about"
            className="mt-8 w-fit border-b border-vyana-green pb-1 text-sm font-semibold text-vyana-green"
          >
            Learn more about Dr. Bhoomi →
          </Link>
        </div>
      </div>
    </section>
  );
}