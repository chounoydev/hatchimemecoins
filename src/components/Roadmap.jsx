export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-yellow-400">
            Our Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-yellow-400">
            Roadmap
          </h2>

          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-yellow-400/40 -translate-x-1/2" />

          {/* Phase 1 */}
          <TimelineItem
            align="left"
            number="1"
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
            number="2"
            title="Growth Phase"
            items={[
              "CoinGecko & CoinMarketCap listings",
              "Influencer partnerships",
              "10,000+ holders",
            ]}
          />

          {/* Phase 3 */}
          <TimelineItem
            align="left"
            number="3"
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
            number="4"
            title="Future Vision"
            items={[
              "To be decided by the community",
              "Your voice matt",
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
function TimelineItem({ align, number, title, items }) {
  const isLeft = align === "left";

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-24">

      {/* Left Box */}
      {isLeft && (
        <div className="md:w-1/2 md:pr-12 w-full mb-10 md:mb-0 text-right">
          <RoadmapBox title={title} items={items} />
        </div>
      )}

      {/* Center Number */}
      <div className="absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
        <div className="w-12 h-12 rounded-full border border-yellow-400 text-yellow-400 flex items-center justify-center font-bold">
          {number}
        </div>
      </div>

      {/* Right Box */}
      {!isLeft && (
        <div className="md:w-1/2 md:pl-12 w-full mt-10 md:mt-0">
          <RoadmapBox title={title} items={items} />
        </div>
      )}
    </div>
  );
}

/* ===============================
   Roadmap Box
================================= */
function RoadmapBox({ title, items }) {
  return (
    <div className="rounded-xl p-6 md:p-7 border border-yellow-400/30
                    bg-[rgba(139,69,19,0.25)] backdrop-blur-sm">

      <h3 className="text-xl font-semibold mb-4 text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-white">
            <span className="text-green-400 animate-blink">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
