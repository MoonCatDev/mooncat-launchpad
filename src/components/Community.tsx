import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

const Community = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
          Join the Litter
        </h2>
        <p className="text-xl md:text-2xl text-foreground/90 mb-10 font-medium">
          We're all going to the moon.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6 rounded-full glow-purple transition-all hover:scale-105"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              Follow on X
            </a>
          </Button>
          
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full glow-pink transition-all hover:scale-105"
            asChild
          >
            <a href="https://moonbound.com" target="_blank" rel="noopener noreferrer">
              Trade on Moonbound
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
