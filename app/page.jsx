import HeroSection from "@/components/Home/HeroSection";
import About from "@/components/Home/About";
import HomeOurDogs from "@/components/Home/HomeOurDogs";
import HomeTestimonials from "@/components/Home/HomeTestimonials";
import "@/components/Home/Home.css";
import dogData from "@/data/dogs.json";

export const metadata = {
  title:
    "Clarot's German Shepherds | German Shepherd Puppies for Sale in Ontario",
  description:
    "Looking for German Shepherd puppies for sale? Clarot's German Shepherds offers top-quality German Shepherd puppies with exceptional working abilities and outstanding temperament in Ontario, Canada.",
  openGraph: {
    title:
      "Clarot's German Shepherds | German Shepherd Puppies for Sale in Ontario",
    description:
      "Find your perfect German Shepherd puppy from our reputable Ontario breeder with 30+ years of experience.",
  },
};

export default function HomePage() {
  return (
    <div className="home--container">
      <HeroSection />
      <About />
      <HomeOurDogs homeDogData={dogData} />
      <HomeTestimonials />
    </div>
  );
}
