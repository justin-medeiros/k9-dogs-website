import FAQPage from "@/components/FAQ/FAQPage";
import faqData from "@/data/data.json";

export const metadata = {
  title:
    "German Shepherd Puppy FAQ | Pricing, Care & Breeding | Clarot German Shepherds",
  description:
    "Frequently asked questions about buying German Shepherd puppies from Clarot German Shepherds. Learn about puppy pricing, male vs female temperament, puppy care, and our breeding program in Ontario.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title:
      "German Shepherd Puppy FAQ | Clarot German Shepherds",
    description:
      "Get answers about German Shepherd puppies — pricing, temperament, care, and our 30+ year breeding program.",
  },
};

export default function FAQPageRoute() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.faq.map((item) => ({
      "@type": "Question",
      name: item.title.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.body,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQPage />
    </>
  );
}
