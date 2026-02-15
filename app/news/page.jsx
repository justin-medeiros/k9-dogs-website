import NewsSection from "@/components/NewsSection/NewsSection";
import "@/components/NewsSection/NewsFlash.css";
import newsFlashData from "@/data/news-flash.json";

export const metadata = {
  title:
    "German Shepherd Show Results & Breeder News | Clarot's German Shepherds Ontario",
  description:
    "Latest news from Clarot's German Shepherds in Ontario — show results, new litter announcements, and updates from our German Shepherd breeding program.",
  openGraph: {
    title:
      "Latest News | Clarot's German Shepherds",
    description:
      "Show results, litter announcements, and updates from our Ontario German Shepherd breeding program.",
  },
};

export default function NewsPage() {
  return (
    <div className="news-flash-root">
      <div className="news-flash-container">
        <h1>News Flash</h1>
        <div className="news-content">
          {newsFlashData.newsSections.map((section, index) => (
            <NewsSection
              key={index}
              date={section.date}
              text={section.text}
              images={section.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
