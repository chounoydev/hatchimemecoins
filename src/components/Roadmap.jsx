export default function Roadmap() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Our Journey
          </p>
          <h2 className="text-4xl font-bold mt-2">Roadmap</h2>
          <p className="text-gray-500 mt-3">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2" />

          {/* Phase 1 */}
          <RoadmapItem
            side="left"
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
          <RoadmapItem
            side="right"
            number="2"
            title="Growth Phase"
            items={[
              "CoinGecko & CoinMarketCap listings",
              "Influencer partnerships",
              "10,000+ holders",
            ]}
          />

          {/* Phase 3 */}
          <RoadmapItem
            side="left"
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
          <RoadmapItem
            side="right"
            number="4"
            title="Future Vision"
            items={[
              "To be decided by the community",
              "Your voice matters",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ===============================
   Single Roadmap Item Component
================================= */
function RoadmapItem({ side, number, title, items }) {
  const isLeft = side === "left";

  return (
    <div className="relative flex items-center mb-20">
      {/* Left Content */}
      {isLeft && (
        <div className="w-1/2 pr-12 text-right">
          <RoadmapCard title={title} items={items} />
        </div>
      )}

      {/* Center Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>

      {/* Right Content */}
      {!isLeft && (
        <div className="w-1/2 pl-12 ml-auto">
          <RoadmapCard title={title} items={items} />
        </div>
      )}
    </div>
  );
}

/* ===============================
   Roadmap Card
================================= */
function RoadmapCard({ title, items }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="text-green-500 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
