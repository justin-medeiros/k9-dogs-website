import LittersPage from "@/components/Litters/LittersPage";
import littersData from "@/data/litters.json";

export const metadata = {
  title:
    "German Shepherd Puppies for Sale Ontario | Upcoming & Past Litters | Clarot",
  description:
    "German Shepherd puppies for sale from Clarot German Shepherds in Ontario, Canada. Browse our upcoming and past litters from champion German bloodlines. Reserve your German Shepherd puppy today.",
  alternates: {
    canonical: "/litters",
  },
  openGraph: {
    title:
      "German Shepherd Puppies for Sale Ontario | Clarot German Shepherds",
    description:
      "Browse available German Shepherd puppies and litters from top German bloodlines. 30+ years of breeding excellence in Ontario.",
  },
};

export default function LittersPageRoute() {
  return <LittersPage littersData={littersData} />;
}
