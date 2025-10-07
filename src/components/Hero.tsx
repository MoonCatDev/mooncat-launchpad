import { Button } from "@/components/ui/button";
import mooncatLogo from "@/assets/mooncat-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <img
            src={mooncatLogo}
            alt="MoonCat Logo"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto glow-cyan rounded-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Fair Launch.</span>
          <br />
          <span className="text-foreground">No Presale.</span>
          <br />
          <span className="text-primary text-glow">No Team Tokens.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-medium">
          Just a community and a cat going to the moon.
        </p>
        
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full glow-cyan transition-all hover:scale-105"
          asChild
        >
          <a href="https://app.moonbound.gg/token/0xCB8946e0a9A27fb741A05E0E40e469d2aC8ba820" target="_blank" rel="noopener noreferrer">
            Buy on Moonbound
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
