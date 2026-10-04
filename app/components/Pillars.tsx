const pillars = [
  {
    number: "01",
    title: "Restore",
    text: "Reconnect with your body's natural rhythm through personalized lifestyle and wellness guidance.",
  },
  {
    number: "02",
    title: "Prevent",
    text: "Build healthier daily habits that support metabolic health and reduce long-term health risks.",
  },
  {
    number: "03",
    title: "Thrive",
    text: "Create sustainable routines that help you feel stronger, more balanced, and confident in your health.",
  },
];

export default function Pillars() {
  return (
    <section className="relative bg-white pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28 lg:pt-8">
      <div className="mx-auto max-w-7xl vyana-gutter">
        {/* =====================================================
            SECTION HEADING
           ===================================================== */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            The VYANA Philosophy
          </p>

          <h2 className="mt-4 font-serif text-4xl text-vyana-dark sm:text-5xl">
            Restore. Prevent. Thrive.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-600">
            Health is not simply about treating symptoms. It is about
            understanding your body, changing the habits that shape your
            health, and creating a lifestyle you can sustain.
          </p>
        </div>

        {/* =====================================================
            PHILOSOPHY CARDS
           ===================================================== */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group rounded-3xl border border-vyana-green/5 bg-vyana-cream vyana-panel transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-[0.15em] text-vyana-green">
                  {pillar.number}
                </span>

                <span className="h-px w-8 bg-vyana-green/30 transition-all duration-300 group-hover:w-12" />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-serif text-3xl text-vyana-dark">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-7 text-gray-600">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}