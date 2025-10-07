import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TokenInfo = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x0000000000000000000000000000000000000000"; // Replace with actual contract address
  
  const features = [
    { label: "Total Supply", value: "1,000,000,000 $MOONCAT" },
    { label: "Contract", value: "Renounced" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary text-glow">Token Info</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-primary/30 rounded-2xl p-8 text-center glow-cyan transition-all hover:scale-105"
            >
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                {feature.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-secondary/30 rounded-2xl p-8 glow-purple">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-3 text-center">
            Contract Address
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <code className="text-primary font-mono text-sm md:text-base break-all text-center sm:text-left">
              {contractAddress}
            </code>
            <Button
              onClick={copyToClipboard}
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full glow-purple transition-all hover:scale-105 flex-shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
