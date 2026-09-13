const conditions = [
  "Obesity",
  "Diabetes & Prediabetes",
  "Fatty Liver",
  "Digestive Issues",
  "PCOS",
  "Hypothyroidism",
  "Metabolic Syndrome",
  "Stress & Anxiety",
  "Sleep Disorders",
  "Hypertension",
];

export default function Conditions() {
  return (
    <section id="conditions" className="bg-vyana-green py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-vyana-sage">
            Conditions Supported
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Supporting better health from the inside out.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="border-b border-white/20 py-4 text-center font-medium sm:text-left"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}