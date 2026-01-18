"use client";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-orange-500">
            Roadmap
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-400/30 -translate-x-1/2" />

          {/* Phase 1 */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="md:w-1/2 md:pr-16">
              <Card
                phase="Phase 1"
                title="Launch Phase"
                items={[
                  "Fair launch on Pump.fun",
                  "Website launch",
                  "Social media activation",
                  "Community building",
                ]}
              />
            </div>
            <Dot number="1" />
            <div className="md:w-1/2" />
          </div>

          {/* Phase 2 */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="md:w-1/2" />
            <Dot number="2" />
            <div className="md:w-1/2 md:pl-16">
              <Card
                phase="Phase 2"
                title="Growth Phase"
                items={[
                  "CoinGecko & CoinMarketCap listings",
                  "Influencer partnerships",
                  "10,000+ holders",
                ]}
              />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative flex flex-col md:flex-row items-center mb-24">
            <div className="md:w-1/2 md:pr-16">
              <Card
                phase="Phase 3"
                title="Expansion Phase"
                items={[
                  "CEX listings",
                  "NFT collection launch",
                  "Merchandise store",
                  "Strategic partnerships",
                ]}
              />
            </div>
            <Dot number="3" />
            <div className="md:w-1/2" />
          </div>

          {/* Phase 4 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2" />
            <Dot number="4" />
            <div className="md:w-1/2 md:pl-16">
              <Card
                phase="Phase 4"
                title="Future Vision"
                items={[
                  "To be decided by the community",
                  "Your voice matters",
                ]}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ----------------------------
   Timeline Dot
---------------------------- */
function Dot({ number }) {
  return (
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
      <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
        {number}
      </div>
    </div>
  );
}

/* ----------------------------
   Card
---------------------------- */
function Card({ phase, title, items }) {
  return (
    <div className="rounded-xl p-7 border border-orange-400/30 bg-orange-900/20 backdrop-blur-sm">
      <p className="text-sm text-orange-400 mb-2 font-semibold">
        {phase}
      </p>

      <h3 className="text-2xl font-bold text-white mb-5">
        {title}
      </h3>

      <ul className="space-y-3 text-white text-lg">
        {items.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>
    </div>
  );
}
