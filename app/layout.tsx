import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VYANA Wellness | Restore Your Inner Rhythm",
    template: "%s | VYANA Wellness",
  },

  description:
    "VYANA Wellness provides personalized naturopathic and holistic wellness support through sustainable lifestyle practices, nutrition, yoga, and preventive healthcare.",

  metadataBase: new URL("https://vyanaawellness.com"),

  applicationName: "VYANA Wellness",

  authors: [{ name: "Dr. Bhoomi Panchal" }],

  creator: "VYANA Wellness",

  openGraph: {
    title: "VYANA Wellness | Restore Your Inner Rhythm",
    description:
      "Personalized holistic wellness support to help you restore balance, build sustainable habits, and thrive.",
    url: "https://vyanaawellness.com",
    siteName: "VYANA Wellness",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vyanaawellness.com/#organization",
      name: "VYANA Wellness",
      url: "https://vyanaawellness.com",
      email: "dr.bhoomi15@gmail.com",
      slogan: "Restore Your Inner Rhythm",
      founder: {
        "@id": "https://vyanaawellness.com/#dr-bhoomi-panchal",
      },
      sameAs: ["https://www.instagram.com/vyanaawellness/"],
    },

    {
      "@type": "Person",
      "@id": "https://vyanaawellness.com/#dr-bhoomi-panchal",
      name: "Dr. Bhoomi Panchal",
      honorificSuffix: "BNYS",
      url: "https://vyanaawellness.com/about",
      worksFor: {
        "@id": "https://vyanaawellness.com/#organization",
      },
      knowsAbout: [
        "Naturopathy",
        "Nutrition",
        "Lifestyle Wellness",
        "Weight Management",
        "Metabolic Health",
        "Gut Health",
        "PCOS",
        "Fatty Liver",
        "Yoga",
        "Stress Management",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://vyanaawellness.com/#website",
      url: "https://vyanaawellness.com",
      name: "VYANA Wellness",
      publisher: {
        "@id": "https://vyanaawellness.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}