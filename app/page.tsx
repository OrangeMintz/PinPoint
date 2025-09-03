import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";
import HeroSection from "@/components/Hero-Section";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-6">
        <HeroSection />
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
      </div>
    </>
  );
}
