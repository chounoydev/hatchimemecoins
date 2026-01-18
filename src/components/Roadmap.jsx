"use client";

import { useRef } from "react";

export default function Roadmap() {
  const timelineRef = useRef(null);

  // Scroll timeline horizontally when a card is clicked
  const scrollCard = (cardIndex) => {
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const card = container.children[cardIndex];
    const containerWidth = container.offsetWidth;
    const cardOffset = card.offsetLeft;
    container.scrollTo({
      left: cardOffset - containerWidth / 2 + card.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const phases = [
    {
      phase: "Phase 1",
      title: "Launch Phase",
      items: [
        "Fair launch on Pump.fun",
        "Website launch",
        "Social media activation",
        "Community building",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth Phase",
      items: [
        "CoinGecko & CoinMarketCap listings",
        "Influencer partnerships",
        "10,000+ holders",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion Phase",
      items: [
        "CEX listings",
        "NFT collection launch",
        "Merchandise store",
        "Strategic partnerships",
      ],
    },
    {
      phase: "Phase 4",
      title: "Future Vision",
      items: [
        "To be decided by the community",
        "Your voice matters",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-yellow-400">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Roadmap
          </h2>
          <p className="text-gray-200 mt-4 max-w-xl mx-auto text-lg">
            Our path to becoming the most powerful meme coin community.
          </p>
        </div>

        {/* Timeline Horizontal Scroll */}
        <div
          ref={timelineRef}
          className="flex gap-16 overflow-x-auto no-scrollbar pb-10 md:pb-0 scroll-smooth"
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative cursor-pointer"
              onClick={() => scrollCard(index)}
            >
              <Dot number={index + 1} />
              <Card phase={phase.phase} title={phase.title} items={phase.items} />
            </div>
          ))}
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
    <div className="absolute top-0 left-1/2 -translate-x-1/2 md:flex hidden">
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
    <div className="rounded-xl p-7 border border-orange-400/30 bg-orange-900/20 backdrop-blur-sm w-80 hover:scale-105 transition-transform duration-500">
      <p className="text-sm text-orange-400 mb-2 font-semibold">{phase}</p>
      <h3 className="text-2xl font-bold text-white mb-5">{title}</h3>
      <ul className="space-y-3 text-white text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="inline-block w-5 h-5 text-yellow-400 font-bold animate-blink">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
