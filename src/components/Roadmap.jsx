export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-24 bg-dark text-white px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-hatchi mb-3">
            Roadmap
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our vision for building $HATCHI into a strong, trusted, and
            long-term community-driven project.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Phase 1 */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/40 hover:border-hatchi transition">
            <span className="text-sm text-hatchi font-semibold">
              Phase 1
            </span>
            <h3 className="text-xl font-bold mt-2 mb-4">
              Foundation
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>🚀 Official website launch</li>
              <li>📢 Social media setup (X, Telegram, Facebook)</li>
              <li>👥 Initial community building</li>
              <li>💲 DEX paid & visibility</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/40 hover:border-hatchi transition">
            <span className="text-sm text-hatchi font-semibold">
              Phase 2
            </span>
            <h3 className="text-xl font-bold mt-2 mb-4">
              Growth
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📈 Boost campaigns & marketing</li>
              <li>🎁 Community rewards & giveaways</li>
              <li>🦎 CoinGecko listing</li>
              <li>🔥 Increased trading volume</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="border border-white/10 rounded-xl p-6 bg-black/40 hover:border-hatchi transition">
            <span className="text-sm text-hatchi font-semibold">
              Phase 3
            </span>
            <h3 className="text-xl font-bold mt-2 mb-4">
              Expansion
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>🏦 Major exchange listings</li>
              <li>👤 10,000+ holders milestone</li>
              <li>🤝 Strategic partnerships</li>
              <li>🛠️ New utilities & features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
