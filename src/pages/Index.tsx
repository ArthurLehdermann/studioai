import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Templates />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
