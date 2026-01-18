"use client";

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

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-orange-500">
            Roadmap
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-400/30 -translate-x-1/2" />

          <TimelineRow number="1" align="left">
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
          </TimelineRow>

          <TimelineRow number="2" align="right">
            <RoadmapCard
              phase="Phase 2"
              title="Growth Phase"
              items={[
                "CoinGecko & CoinMarketCap listings",
                "Influencer partnerships",
                "10,000+ holders",
              ]}
            />
          </TimelineRow>

          <TimelineRow number="3" align="left">
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
          </TimelineRow>

          <TimelineRow number="4" align="right">
            <RoadmapCard
              phase="Phase 4"
              title="Future Vision"
              items={[
                "To be decided by the community",
                "Your voice matters",
              ]}
            />
          </TimelineRow>

        </div>
      </div>
    </section>
  );
}

/* ===============================
   Timeline Row (SAFE FLEX)
================================= */
function TimelineRow({ number, align, children }) {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center mb-24">

      {/* Left column */}
      <div className="hidden md:block md:w-1/2">
        {align === "left" && children}
      </div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-md">
          {number}
        </div>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/2">
        {align === "right" && children}
      </div>

    </div>
  );
}

/* ===============================
   Roadmap Card (SAFE)
================================= */
function RoadmapCard({ phase, title, items }) {
  return (
    <div className="rounded-xl p-7 border border-orange-400/30 bg-orange-900/20 backdrop-blur-sm">

      <p className="text-sm text-orange-400 mb-2 font-semibold">
        {phase}
      </p>

      <h3 className="text-2xl font-bold text-white mb-5">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-white text-lg"
          >
            <CheckCircle className="w-5 h-5 text-green-400 mt-1 animate-blink" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
