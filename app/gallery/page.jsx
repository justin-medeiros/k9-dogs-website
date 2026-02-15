import GalleryClient from "@/components/Gallery/GalleryClient";

export const metadata = {
  title:
    "German Shepherd Photos | Puppies & Dogs Gallery | Clarot's German Shepherds Ontario",
  description:
    "Browse photos of our German Shepherd puppies and breeding dogs from Clarot's German Shepherds in Ontario. See our champion bloodline German Shepherds and past litter puppies.",
  openGraph: {
    title:
      "German Shepherd Photos | Clarot's German Shepherds",
    description:
      "Photos of our German Shepherd puppies and champion breeding dogs in Ontario.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
