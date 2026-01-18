import { CheckCircle } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-widest text-orange-500">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-orange-500">
            Roadmap
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-28">

          {/* Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2" />

          {/* ========== PHASE 1 (LEFT) ========== */}
          <div className="md:col-start-1">
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
          </div>

          <TimelineDot number="1" />
          <div className="hidden md:block" />

          {/* ========== PHASE 2 (RIGHT) ========== */}
          <div className="hidden md:block" />
          <TimelineDot number="2" />
          <div className="md:col-start-3">
            <RoadmapCard
              phase="Phase 2"
              title="Growth Phase"
              items={[
                "CoinGecko & CoinMarketCap listings",
                "Influencer partnerships",
                "10,000+ holders",
              ]}
            />
          </div>

          {/* ========== PHASE 3 (LEFT) ========== */}
          <div className="md:col-start-1">
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
          </div>

          <TimelineDot number="3" />
          <div className="hidden md:block" />

          {/* ========== PHASE 4 (RIGHT) ========== */}
          <div className="hidden md:block" />
          <TimelineDot number="4" />
          <div className="md:col-start-3">
            <RoadmapCard
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
    </section>
  );
}

/* ===============================
   Timeline Dot
================================= */
function TimelineDot({ number }) {
  return (
    <div className="flex justify-center relative z-10">
      <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
        {number}
      </div>
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
        bg-orange-900/20
        backdrop-blur-sm
      "
    >
      {/* Phase label */}
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
