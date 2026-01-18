"use client";

import { CheckCircle } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-24">
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

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange-400/30 -translate-x-1/2" />

          {/* PHASE 1 */}
          <TimelineItem number="1" align="left">
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
          <TimelineItem number="2" align="right">
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
          <TimelineItem number="3" align="left">
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
          <TimelineItem number="4" align="right">
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
function TimelineItem({ number, align, children }) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 mb-28">

      {align === "left" && (
        <div className="md:pr-16">
          {children}
        </div>
      )}

      {align === "right" && (
        <div className="md:col-start-2 md:pl-16">
          {children}
        </div>
      )}

      {/* Dot */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
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
    <div className="rounded-xl p-8 border border-orange-400/30 bg-orange-900/20 backdrop-blur-sm">

      <p className="text-sm text-orange-400 mb-2 font-semibold">
        {phase}
      </p>

      <h3 className="text-2xl font-bold text-white mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-white text-lg"
          >
            <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}
