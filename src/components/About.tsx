const About = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 glow-purple">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center gradient-text">
            About MoonCat
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center">
            MoonCat is a fair-launch meme coin built by the community, for the community. 
            No presale, no team allocation, no hidden rules — just pure decentralized fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
