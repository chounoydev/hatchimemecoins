import { CheckCircle } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Roadmap
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-orange-200 -translate-x-1/2" />

          {/* PHASE 1 */}
          <TimelineItem number="1" side="left">
            <RoadmapCard
              phase="Phase 1"
              title="Launch Phase"
              items={[
                "Fair launch on Pump.fun",
                "Website launch",
                "Social media activation",
                "Community building",
              ]}
            />
          </TimelineItem>

          {/* PHASE 2 */}
          <TimelineItem number="2" side="right">
            <RoadmapCard
              phase="Phase 2"
              title="Growth Phase"
              items={[
                "CoinGecko & CoinMarketCap listings",
                "Influencer partnerships",
                "10,000+ holders",
              ]}
            />
          </TimelineItem>

          {/* PHASE 3 */}
          <TimelineItem number="3" side="left">
            <RoadmapCard
              phase="Phase 3"
              title="Expansion Phase"
              items={[
                "CEX listings",
                "NFT collection launch",
                "Merchandise store",
                "Strategic partnerships",
              ]}
            />
          </TimelineItem>

          {/* PHASE 4 */}
          <TimelineItem number="4" side="right">
            <RoadmapCard
              phase="Phase 4"
              title="Future Vision"
              items={[
                "To be decided by the community",
                "Your voice matters",
              ]}
            />
          </TimelineItem>

        </div>
      </div>
    </section>
  );
}

/* ===============================
   Timeline Item
================================= */
function TimelineItem({ number, side, children }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-start mb-28">

      {/* Left side */}
      {side === "left" && (
        <div className="md:pr-16">
          {children}
        </div>
      )}

      {/* Right side */}
      {side === "right" && (
        <div className="md:col-start-2 md:pl-16">
          {children}
        </div>
      )}

      {/* Timeline Dot */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
          {number}
        </div>
      </div>

    </div>
  );
}

/* ===============================
   Roadmap Card
================================= */
function RoadmapCard({ phase, title, items }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">

      {/* Phase */}
      <p className="text-sm font-semibold text-orange-500 mb-2">
        {phase}
      </p>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700 text-lg"
          >
            <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
