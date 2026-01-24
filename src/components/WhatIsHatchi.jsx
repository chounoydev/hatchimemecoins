import React, { useEffect, useState, useRef } from "react";

export default function WhatIsHatchi() {
  // ======== LIVE PRICE STATE =========
  const [price, setPrice] = useState(null);
  const [trend, setTrend] = useState("neutral");
  const lastPriceRef = useRef(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/draf8qxqy86h7yehdo9gytxaf6gottt8ozjknwxv6dcs"
        );
        const data = await res.json();
        if (!data.pairs || !data.pairs.length) return;

        const newPrice = parseFloat(data.pairs[0].priceUsd);

        if (lastPriceRef.current !== null) {
          if (newPrice > lastPriceRef.current) setTrend("up");
          else if (newPrice < lastPriceRef.current) setTrend("down");
          else setTrend("neutral");
        }

        lastPriceRef.current = newPrice;
        setPrice(newPrice);
      } catch (err) {
        console.error("DexScreener fetch error:", err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whatishatchi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* STORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <span className="text-white/80 font-bold tracking-widest">
              ABOUT US
            </span>

            <h2 className="text-4xl md:text-5xl font-playful mt-4 mb-6 text-white/90">
              The Story of Hatchi
            </h2>

            <p className="text-lg text-white/85 leading-relaxed">
              Hatchi was a real dog, a fluffy, two-year-old Chow Chow who filled our lives with pure joy, loyalty, and endless love. On January 6, 2026, just days after the New Year, Hatchi suddenly became weak. He slowly lost his appetite, and despite everything we did to help him, he peacefully passed away. Losing him at such a young age broke our hearts in ways we can barely describe. He was more than a pet — he was family, our constant companion, and the light of our home.
              <br /><br />
              The pain of his loss was overwhelming, but it also reminded us how deeply he had touched our lives. Because of that love and that heartbreak, we decided to create <span className="text-[#d4af37] font-bold">$HATCHI</span> — a memecoin born from real emotion, not just hype. This project is our way of keeping Hatchi's memory alive forever. Through this coin, his spirit of loyalty, joy, and unconditional love continues on — in a community, in a movement, and hopefully in something that can bring happiness to many others, just like he did for us.
              <br /><br />
              Hatchi may have gone to heaven, but he will never truly leave us. He is the heart and soul behind <span className="text-[#d4af37] font-bold">$HATCHI</span>.
            </p>
          </div>

          {/* RIGHT INTERACTIVE CARD */}
          <div className="flex justify-center">
            <div
              className="
                bg-[#f5ede3]/70 backdrop-blur
                rounded-3xl shadow-2xl p-8 text-center w-80
                transition-all duration-500 ease-out
                hover:-translate-y-4 hover:rotate-1 hover:scale-105
                active:scale-110 active:-translate-y-6
                cursor-pointer
              "
            >
              <img
                src="/hatchi11.png"
                alt="Hatchi"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 transition-transform duration-500 hover:scale-110"
              />

              <h3 className="text-2xl font-bold text-[#4b3827]">
                Hatchi
              </h3>

              <p className="text-[#6b4a2f] font-semibold mt-1">
                March 5, 2023 – January 6, 2026
              </p>

              <p className="text-[#7a5a3a] font-semibold mt-2">
                Loyalty • Love • Legacy
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* SLIDING BANNER */}
      <div className="w-full h-12 bg-[#d4af37] overflow-hidden flex items-center mt-24">
        <div className="flex whitespace-nowrap font-bold text-black animate-slide text-lg">
          <span className="mx-10">🐶 $HATCHI ARYMY</span>
          <span className="mx-10">🎯 GOAL $5M+ MARKET CAP</span>
          <span className="mx-10">💰 HODL $HATCHI</span>
          <span className="mx-10">📈 TRENDING MEMECOIN</span>
          <span className="mx-10">🚀 PUMPFUN LAUNCH</span>

          <span className="mx-10">🐶 $HATCHI ARYMY</span>
          <span className="mx-10">🎯 GOAL $5M+ MARKET CAP</span>
          <span className="mx-10">💰 HODL $HATCHI</span>
          <span className="mx-10">📈 TRENDING MEMECOIN</span>
          <span className="mx-10">🚀 PUMPFUN LAUNCH</span>

          <span className="mx-10">🐶 $HATCHI ARYMY</span>
          <span className="mx-10">🎯 GOAL $5M+ MARKET CAP</span>
          <span className="mx-10">💰 HODL $HATCHI</span>
          <span className="mx-10">📈 TRENDING MEMECOIN</span>
          <span className="mx-10">🚀 PUMPFUN LAUNCH</span>
        </div>
      </div>

      {/* LIVE CHART */}
      <div className="px-4 mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-playful text-white flex items-center gap-4">
              $HATCHI LIVE CHART
              <span className="w-4 h-4 bg-green-500 rounded-full animate-fast-pulse"></span>
            </h2>

            <div
              className={`
                px-5 py-2 rounded-lg font-bold text-lg
                bg-[#5b3a1e] text-white
                ${
                  trend === "up"
                    ? "animate-pulse-green"
                    : trend === "down"
                    ? "animate-pulse-red"
                    : ""
                }
              `}
            >
              {price ? `$${price.toFixed(6)}` : "Loading..."}
            </div>
          </div>

          <iframe
            title="$HATCHI Live Price"
            src="https://dexscreener.com/solana/draf8qxqy86h7yehdo9gytxaf6gottt8ozjknwxv6dcs"
            style={{ width: "100%", height: "420px", border: "none" }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

