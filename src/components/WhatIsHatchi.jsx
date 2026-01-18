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
        console.error(err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="whatishatchi"
      className="py-24 relative overflow-hidden"
    >
      {/* LIGHT BROWN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3e6d8] via-[#ecd3b8] to-[#f7efe6] opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* STORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <span className="text-[#a66a2c] font-bold tracking-widest">
              ABOUT US
            </span>

            <h2 className="text-4xl md:text-5xl font-playful mt-4 mb-6 text-[#3b2a1a]">
              The Story of Hatchi
            </h2>

            <p className="text-lg text-[#4b3827] leading-relaxed">
              Hatchi was a real dog — a fluffy, two-year-old Chow Chow who filled
              our lives with pure joy, loyalty, and endless love. On January 6,
              2026, just days after the New Year, Hatchi suddenly became weak.
              <br /><br />
              He slowly lost his appetite, and despite everything we did to help
              him, he peacefully passed away. Losing him at such a young age
              broke our hearts. He wasn’t just a pet — he was family.
              <br /><br />
              From that love and heartbreak, <b>$HATCHI</b> was born. A memecoin
              created to keep his spirit alive — loyalty, joy, and unconditional
              love living forever through community.
            </p>
          </div>

          {/* RIGHT INTERACTIVE CARD */}
          <div className="flex justify-center">
            <div
              className="
                bg-white rounded-3xl shadow-2xl p-8 text-center w-80
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

              <h3 className="text-2xl font-bold text-[#2b1d12]">$HATCHI</h3>
              <p className="text-[#c0893d] font-semibold mt-2">
                Loyalty • Love • Legacy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDING BANNER */}
      <div className="relative w-full h-12 bg-[#c0893d] overflow-hidden flex items-center mt-24">
        <div className="flex whitespace-nowrap font-bold text-black animate-slide text-lg">
          <span className="mx-10">🐶 $HATCHI SOLDIERS</span>
          <span className="mx-10">🎯 GOAL $2M+ MARKET CAP</span>
          <span className="mx-10">💰 BUY MORE $HATCHI</span>
          <span className="mx-10">📈 TRENDING MEMECOIN</span>
          <span className="mx-10">🚀 PUMPFUN LAUNCH</span>
        </div>
      </div>

      {/* LIVE CHART */}
      <div className="relative px-4 mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-playful text-[#3b2a1a] flex items-center gap-4">
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
