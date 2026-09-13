const steps = [
  "Understand your current health and lifestyle.",
  "Create a personalized and practical wellness plan.",
  "Build sustainable habits with ongoing guidance.",
];

export default function Approach() {
  return (
    <section id="approach" className="bg-vyana-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-green">
            Our Approach
          </p>

          <h2 className="mt-4 font-serif text-4xl text-vyana-dark sm:text-5xl">
            Small, sustainable changes. Meaningful, lasting results.
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            We believe healthcare should empower you—not overwhelm you. Your
            wellness plan is designed around your individual needs, lifestyle,
            goals, and circumstances.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-vyana-green font-serif text-xl text-white">
                {index + 1}
              </div>

              <p className="mx-auto mt-6 max-w-xs font-serif text-xl leading-7 text-vyana-dark">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}