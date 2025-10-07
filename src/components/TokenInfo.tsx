const TokenInfo = () => {
  const features = [
    { label: "Total Supply", value: "1,000,000,000 $MOONCAT" },
    { label: "Contract", value: "Renounced" },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary text-glow">Token Info</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default TokenInfo;
