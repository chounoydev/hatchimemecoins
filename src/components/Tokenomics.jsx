import {
  FaCoins,
  FaLock,
  FaUserShield,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

export default function Tokenomics() {
  return (
    <>
      {/* ================= TOKENOMICS ================= */}
      <section id="tokenomics" className="py-16 px-4 text-center">
        <h2 className="text-4xl font-playful mb-12 text-yellow-400">
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Total Supply */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaCoins className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Total Supply</h3>
            <p>1,000,000,000 $HATCHI</p>
          </div>

          {/* Liquidity Lock */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaLock className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Liquidity Lock</h3>
            <p>Locked on Solana for stability</p>
          </div>

          {/* Dev Hold */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaUserShield className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Dev Hold</h3>
            <p>Reserved for growth & development</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT GOALS ================= */}
      <section id="goals" className="py-16 px-4 text-center">
        <h2 className="text-4xl font-playful mb-12 text-yellow-400">
          Project Goals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Goal 1 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaRocket className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Solana Launch</h3>
            <p>Fair launch of $HATCHI on Solana.</p>
          </div>

          {/* Goal 2 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaUsers className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Holder Growth</h3>
            <p>Build a strong and organic holder base.</p>
          </div>

          {/* Goal 3 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaChartLine className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Healthy Volume</h3>
            <p>Maintain consistent on-chain activity.</p>
          </div>

          {/* Goal 4 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaCoins className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Token Transparency</h3>
            <p>Clear token data visible on Solscan.</p>
          </div>

          {/* Goal 5 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaBullhorn className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Community Visibility</h3>
            <p>Grow awareness across Solana communities.</p>
          </div>

          {/* Goal 6 */}
          <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <FaShieldAlt className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Trust & Longevity</h3>
            <p>Build long-term trust and sustainability.</p>
          </div>
        </div>
      </section>
    </>
  );
}

