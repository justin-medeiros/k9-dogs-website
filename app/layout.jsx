import { Poppins } from "next/font/google";
import Script from "next/script";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import BannerWrapper from "@/components/Banner/BannerWrapper";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title:
    "Clarot German Shepherds - Ontario Breeder | German Shepherd Puppies for Sale",
  description:
    "Looking for German Shepherd puppies for sale? Clarot German Shepherds offers top-quality German Shepherd puppies with exceptional working abilities and outstanding temperament. Browse our available German Shepherd puppies and learn about our 30+ years of breeding experience.",
  keywords:
    "German Shepherd puppies for sale, German Shepherd breeder, German Shepherd dogs, German Shepherd puppies Ontario, German Shepherd for sale, German Shepherd breeder Ontario, German Shepherd puppies for sale Ontario, German Shepherd puppies near me, German Shepherd breeder near me",
  openGraph: {
    title: "Clarot German Shepherds | German Shepherd Breeder",
    description:
      "Find your perfect German Shepherd puppy from our reputable breeder. We specialize in breeding German Shepherds with exceptional working abilities and outstanding temperament.",
    type: "website",
    url: "https://k9dogs.ca",
  },
  metadataBase: new URL("https://k9dogs.ca"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/6f44f13dd3.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Clarot German Shepherds",
              image: "https://k9dogs.ca/images/clarot-german-shep-logo.png",
              description:
                "Professional German Shepherd breeder offering top-quality puppies with exceptional working abilities and outstanding temperament.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ontario",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "44.01231864798958",
                longitude: "-79.96649560325305",
              },
              url: "https://k9dogs.ca",
              telephone: "4165205679",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: [
                "https://www.facebook.com/k9dogs.ca",
                "https://www.instagram.com/clarotgermanshepherds",
              ],
            }),
          }}
        />
      </head>
      <body>
        <NavBar />
        <BannerWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
