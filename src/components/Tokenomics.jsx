import { FaCoins, FaLock, FaUserShield } from "react-icons/fa";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-16 px-4 text-center">
      <h2 className="text-4xl font-playful mb-12 text-yellow-400">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <FaCoins className="text-4xl mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Total Supply</h3>
          <p>1B $HATCHI</p>
        </div>

        <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <FaLock className="text-4xl mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Liquidity Lock</h3>
          <p>10M+ Locked for 1 Year</p>
        </div>

        <div className="bg-hatchiBrown/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
          <FaUserShield className="text-4xl mx-auto mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">Dev Hold</h3>
          <p>7M+ Reserved for Development</p>
        </div>
      </div>
    </section>
  );
}
