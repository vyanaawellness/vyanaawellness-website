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
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            The VYANA Philosophy
          </p>

          <h2 className="mt-4 font-serif text-4xl text-vyana-dark sm:text-5xl">
            Restore. Prevent. Thrive.
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            Health is not simply about treating symptoms. It is about
            understanding your body, changing the habits that shape your
            health, and creating a lifestyle you can sustain.
          </p>
        </div>

        {/* Three philosophy cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3 lg:mt-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-3xl bg-vyana-cream p-10"
            >
              <span className="text-sm font-semibold text-vyana-green">
                {pillar.number}
              </span>

              <h3 className="mt-6 font-serif text-3xl text-vyana-dark">
                {pillar.title}
              </h3>

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