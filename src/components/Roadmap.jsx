import { FaCheckCircle } from "react-icons/fa";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      completed: [0, 1, 2, ], // ✅ All items completed
      details: [
        "Official website launch",
        "Social media pages creation (Twitter/X, Telegram, Facebook)",
        "Initial community recruitment",
      ],
    },
    {
      phase: "Phase 2",
      completed: [], // none completed yet
      details: [
        "Boost campaigns on social media",
        "Reward supporters and promote $Hatchi utilities",
        "Listing on Coin Gecko",
        "Community engagement & giveaways",
      ],
    },
    {
      phase: "Phase 3",
      completed: [], // none completed yet
      details: [
        "Major exchange listings",
        "10k+ Holders",
        "Continuous community support",
        "Develop new features and partnerships",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 px-4 text-yellow-400">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl mb-12 font-bold">Roadmap</h2>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-[#3a2610]/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform flex items-start space-x-4"
            >
              {/* Blinking circle on the left */}
              <span className="w-4 h-4 mt-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0"></span>

              {/* Phase content */}
              <div className="text-left w-full">
                <h3 className="text-2xl font-bold mb-2">{phase.phase}</h3>
                <h4 className="text-xl mb-4">{phase.title}</h4>

                <ul className="list-disc list-inside space-y-2">
                  {phase.details.map((item, idx) => {
                    const isCompleted = phase.completed.includes(idx);
                    return (
                      <li key={idx} className="flex items-center space-x-2">
                        {isCompleted && (
                          <FaCheckCircle className="text-green-500 animate-pulse" />
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
    </section>
  );
}


