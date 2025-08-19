import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <>
      <Header />

      <Feature />
      <FAQ
        heading="Frequently Asked Questions"
        description="Find answers to common questions about our products."
        supportHeading="Need more help?"
        supportDescription="Contact our support team for assistance."
        supportButtonText="Contact Support"
        supportButtonUrl="/support"
      />
      <Footer />
    </>
  );
}
