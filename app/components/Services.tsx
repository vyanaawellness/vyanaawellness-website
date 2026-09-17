const services = [
  "Online Consultation",
  "Lifestyle Assessment",
  "Personalized Diet Planning",
  "Weight Management Program",
  "Diabetes & Metabolic Health Support",
  "Fatty Liver Management",
  "Yoga & Stress Management",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            What We Offer
          </p>

          <h2 className="mt-4 font-serif text-4xl text-vyana-dark sm:text-5xl">
            Personalized support for your health journey.
          </h2>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="group rounded-2xl border border-gray-100 p-7 transition hover:border-vyana-sage hover:bg-vyana-cream"
            >
              <div className="mb-5 h-2 w-2 rounded-full bg-vyana-green" />

              <h3 className="font-serif text-xl text-vyana-dark">
                {service}
              </h3>

              <span className="mt-5 block text-sm font-medium text-vyana-green">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}