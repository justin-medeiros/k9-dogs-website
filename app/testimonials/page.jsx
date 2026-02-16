import TestimonialsPage from "@/components/Testimonials/TestimonialsPage";

export const metadata = {
  title:
    "German Shepherd Puppy Reviews & Testimonials | Clarot German Shepherds",
  description:
    "Read reviews from families who purchased German Shepherd puppies from Clarot German Shepherds. See why Ontario families trust our 30+ year breeding program for their German Shepherd dogs.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title:
      "Customer Reviews | Clarot German Shepherds",
    description:
      "Real testimonials from families who purchased German Shepherd puppies from our Ontario breeding program.",
  },
};

export default function TestimonialsPageRoute() {
  return <TestimonialsPage />;
}
