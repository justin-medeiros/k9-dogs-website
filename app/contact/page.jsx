import ContactUsPage from "@/components/ContactUs/ContactUsPage";

export const metadata = {
  title:
    "Contact Clarot's German Shepherds | Inquire About Puppies | Ontario Breeder",
  description:
    "Contact Clarot's German Shepherds to inquire about German Shepherd puppies for sale in Ontario. Ask about upcoming litters, pricing, and reservations. Over 30 years of breeding experience.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Clarot's German Shepherds",
    description:
      "Inquire about German Shepherd puppies for sale. Contact our Ontario-based breeder today.",
  },
};

export default function ContactPageRoute() {
  return <ContactUsPage />;
}
