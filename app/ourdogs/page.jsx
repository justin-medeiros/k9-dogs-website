import OurDogsPage from "@/components/OurDogs/OurDogsPage";
import dogData from "@/data/dogs.json";

export const metadata = {
  title:
    "Our German Shepherd Breeding Dogs | Champion Bloodlines | Clarot's German Shepherds",
  description:
    "Meet our German Shepherd breeding dogs with champion German bloodlines. View pedigrees, show titles, and hip/elbow certifications. Sires and dams producing top-quality German Shepherd puppies in Ontario.",
  openGraph: {
    title:
      "Our German Shepherd Breeding Dogs | Clarot's German Shepherds",
    description:
      "Champion German Shepherd breeding dogs with exceptional pedigrees, show titles, and health certifications.",
  },
};

export default function OurDogsPageRoute() {
  return <OurDogsPage dogData={dogData} />;
}
