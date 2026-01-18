export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Roadmap
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2" />

          {/* Phase 1 */}
          <TimelineItem
            align="left"
            phase="1"
            title="Launch Phase"
            items={[
              "Fair launch on Pump.fun",
              "Website launch",
              "Social media activation",
              "Community building",
            ]}
          />

          {/* Phase 2 */}
          <TimelineItem
            align="right"
            phase="2"
            title="Growth Phase"
            items={[
              "CoinGecko listing",
              "CoinMarketCap listing",
              "Influencer partnerships",
              "10,000+ holders",
            ]}
          />

          {/* Phase 3 */}
          <TimelineItem
            align="left"
            phase="3"
            title="Expansion Phase"
            items={[
              "CEX listings",
              "NFT collection launch",
              "Merchandise store",
              "Strategic partnerships",
            ]}
          />

          {/* Phase 4 */}
          <TimelineItem
            align="right"
            phase="4"
            title="Future Vision"
            items={[
              "Community driven decisions",
              "Governance development",
              "Long-term ecosystem growth",
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ===============================
   Timeline Item
================================= */
function TimelineItem({ align, phase, title, items }) {
  const isLeft = align === "left";

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-24">

      {/* Left Content */}
      {isLeft && (
        <div className="md:w-1/2 md:pr-12 w-full mb-10 md:mb-0 text-right">
          <Card title={title} items={items} />
        </div>
      )}

      {/* Center Circle */}
      <div className="absolute md:static left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 z-10">
        <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-lg">
          {phase}
        </div>
      </div>

      {/* Right Content */}
      {!isLeft && (
        <div className="md:w-1/2 md:pl-12 w-full mt-10 md:mt-0">
          <Card title={title} items={items} />
        </div>
      )}
    </div>
  );
}

/* ===============================
   Card Component (UPDATED ONLY)
================================= */
function Card({ title, items }) {
  return (
    <div
      className="
        rounded-xl p-6 md:p-7 backdrop-blur-sm
        border border-orange-400/30
        bg-[rgba(139,69,19,0.25)]
      "
    >
      <h3 className="text-xl font-semibold mb-4 text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-white">
            <span className="text-green-400 animate-blink">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
