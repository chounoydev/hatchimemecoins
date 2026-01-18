import { CheckCircle } from "lucide-react";

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

          <TimelineItem
            side="left"
            phase="Phase 1"
            number="1"
            title="Launch Phase"
            items={[
              "Fair launch on Pump.fun",
              "Website launch",
              "Social media activation",
              "Community building",
            ]}
          />

          <TimelineItem
            side="right"
            phase="Phase 2"
            number="2"
            title="Growth Phase"
            items={[
              "CoinGecko & CoinMarketCap listings",
              "Influencer partnerships",
              "10,000+ holders",
            ]}
          />

          <TimelineItem
            side="left"
            phase="Phase 3"
            number="3"
            title="Expansion Phase"
            items={[
              "CEX listings",
              "NFT collection launch",
              "Merchandise store",
              "Strategic partnerships",
            ]}
          />

          <TimelineItem
            side="right"
            phase="Phase 4"
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
   Timeline Item
================================= */
function TimelineItem({ side, phase, number, title, items }) {
  const isLeft = side === "left";

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-24">

      {/* Left Card */}
      {isLeft && (
        <div className="md:w-1/2 md:pr-12 w-full mb-10 md:mb-0">
          <RoadmapCard phase={phase} title={title} items={items} />
        </div>
      )}

      {/* Center Number */}
      <div className="absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>

      {/* Right Card */}
      {!isLeft && (
        <div className="md:w-1/2 md:pl-12 w-full mt-10 md:mt-0">
          <RoadmapCard phase={phase} title={title} items={items} />
        </div>
      )}
    </div>
  );
}

/* ===============================
   Roadmap Card
================================= */
function RoadmapCard({ phase, title, items }) {
  return (
    <div
      className="
        rounded-xl p-6 md:p-7
        border border-orange-400/30
        bg-[rgba(139,69,19,0.25)]
        backdrop-blur-sm
      "
    >
      {/* Phase Label */}
      <p className="text-sm text-orange-400 mb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
        {phase}
      </p>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-white">
        {title}
      </h3>

      {/* List */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-white">
            <CheckCircle className="w-5 h-5 text-green-400 animate-blink" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
