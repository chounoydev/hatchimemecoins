import { FaCheckCircle, FaRocket, FaChartLine, FaGlobe } from "react-icons/fa";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch Phase",
      icon: <FaRocket className="text-yellow-400 w-8 h-8 mb-3" />,
      completed: [0, 1, 2, 3],
      details: [
        "Official website launch",
        "Social media setup (X, Telegram, Facebook)",
        "Initial community building",
        "DEX paid & launch preparation",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth Phase",
      icon: <FaChartLine className="text-yellow-400 w-8 h-8 mb-3" />,
      completed: [],
      details: [
        "Boost campaigns on social platforms",
        "Community rewards & engagement",
        "CoinGecko & CoinMarketCap listing",
        "Giveaways and partnerships",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion Phase",
      icon: <FaGlobe className="text-yellow-400 w-8 h-8 mb-3" />,
      completed: [],
      details: [
        "Major exchange listings",
        "10,000+ holders milestone",
        "Ongoing community incentives",
        "Strategic partnerships & utilities",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 px-4 text-center scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="uppercase tracking-widest text-lg font-playful mb-3 text-yellow-400">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-playful mb-4 text-yellow-400">
            Roadmap
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-[#fff8dc] font-playful">
            Our path toward building a strong, sustainable, and community-driven memecoin ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-yellow-400/50"></div>

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Phase Number */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-yellow-400 text-black font-bold text-lg md:text-xl font-playful">
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="rounded-xl p-8 w-full md:w-[45%] bg-[#7B4513]/40 border border-yellow-400 text-[#fff8dc] transition hover:scale-105"
                >
                  {/* Phase Icon */}
                  <div className="flex justify-center md:justify-start">{phase.icon}</div>

                  {/* Phase Label */}
                  <p className="text-lg md:text-xl mb-1 text-yellow-400 font-playful font-semibold">{phase.phase}</p>
                  <h3 className="text-2xl md:text-3xl font-playful font-bold mb-4">{phase.title}</h3>

                  {/* Phase Details */}
                  <ul className="space-y-3 text-base md:text-lg font-playful">
                    {phase.details.map((item, idx) => {
                      const isCompleted = phase.completed.includes(idx);
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          {isCompleted ? (
                            <FaCheckCircle className="mt-1 text-green-500 animate-blink" />
                          ) : (
                            <span className="w-3 h-3 mt-2 rounded-full border border-white/60"></span>
                          )}
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
