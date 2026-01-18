import React, { useEffect, useState, useRef } from "react";

export default function WhatIsHatchi() {
  // ======== LIVE PRICE STATE =========
  const [price, setPrice] = useState(null);
  const [trend, setTrend] = useState("neutral"); // "up" | "down" | "neutral"
  const lastPriceRef = useRef(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/2yf38DKf3j2NKkaYpokNKv7tGmX5G2gedjJvWKVLkFYx"
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
    const interval = setInterval(fetchPrice, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whatishatchi" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* STORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <span className="text-yellow-400 font-bold tracking-widest">
              ABOUT US
            </span>

            <h2 className="text-4xl md:text-5xl font-playful mt-4 mb-6 text-white">
              The Story of Hatchi
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Hatchi was a real dog — a fluffy, two-year-old Chow Chow who filled
              our lives with pure joy, loyalty, and endless love. On January 6,
              2026, just days after the New Year, Hatchi suddenly became weak. He
              slowly lost his appetite, and despite everything we did to help
              him, he peacefully passed away.
              <br /><br />
              Losing him at such a young age broke our hearts in ways we can
              barely describe. He was more than a pet — he was family, our
              constant companion, and the light of our home.
              <br /><br />
              Because of that love and heartbreak, we created <b>$HATCHI</b> — a
              memecoin born from real emotion, not hype. This project keeps
              Hatchi’s memory alive forever. His loyalty, joy, and unconditional
              love now live on through a community and a movement.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center w-80">
              <img
                src="/hatchi11.png"
                alt="Hatchi the Chow Chow"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-black">$HATCHI</h3>
              <p className="text-yellow-500 font-semibold mt-2">
                Loyalty • Love • Legacy
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* SLIDING BANNER */}
      <div className="w-full h-12 bg-yellow-400 overflow-hidden flex items-center mt-20">
        <div className="flex whitespace-nowrap font-bold text-black animate-slide text-lg">
          <span className="mx-10">🐶 $HATCHI SOLDIERS</span>
          <span className="mx-10">🎯 GOAL $2M+ MARKET CAP</span>
          <span className="mx-10">💰 BUY MORE $HATCHI</span>
          <span className="mx-10">📈 TRENDING MEMECOIN</span>
          <span className="mx-10">💲 DEX PAID</span>
          <span className="mx-10">🚀 LAUNCH ON PUMPFUN</span>
          <span className="mx-10">🤝 HODL $HATCHI</span>
        </div>
      </div>

      {/* LIVE CHART */}
      <div className="px-4 mt-20">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-playful text-yellow-400 flex items-center gap-4">
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
            src="https://dexscreener.com/solana/2yf38dkf3j2nkkaypoknkv7tgmx5g2gedjjvwkvlkfyx"
            style={{ width: "100%", height: "420px", border: "none" }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
