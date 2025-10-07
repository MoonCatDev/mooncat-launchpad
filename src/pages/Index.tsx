import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TokenInfo from "@/components/TokenInfo";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <Hero />
      <About />
      <TokenInfo />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
