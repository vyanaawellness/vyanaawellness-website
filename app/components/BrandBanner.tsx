import Image from "next/image";

export default function BrandBanner() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* VYANA Brand Banner */}
        <div className="overflow-hidden rounded-[2rem] shadow-sm">
          <Image
            src="/images/vyana-banner.jpeg"
            alt="VYANA Wellness - Building Health, Transforming Lives"
            width={1600}
            height={640}
            className="h-auto w-full"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}