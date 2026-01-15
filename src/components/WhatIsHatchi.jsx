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
    const interval = setInterval(fetchPrice, 1000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whatishatchi" className="py-16 text-center">
      <div className="px-4">
        {/* Story */}
        <h2 className="text-4xl font-playful mb-8 text-yellow-400">
          THE STORY OF HATCHI
        </h2>

        {/* Bigger description image */}
        <div className="flex justify-center mb-8">
          <img
            src="/hatchi11.png"
            alt="Hatchi the Chow Chow"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg opacity-95"
          />
        </div>

        <p className="max-w-3xl mx-auto text-lg font-modern mb-12">
          Hatchi was a real dog a fluffy, two-year-old Chow Chow who filled our lives with pure joy,
           loyalty, and endless love.On January 6, 2026, just days after the New Year, Hatchi suddenly became weak.
            He slowly lost his appetite, and despite everything we did to help him, he peacefully passed away. 
            Losing him at such a young age broke our hearts in ways we can barely describe. He was more than a pet 
             he was family, our constant companion, and the light of our home.The pain of his loss was overwhelming, 
             but it also reminded us how deeply he had touched our lives. Because of that love and that heartbreak,
              we decided to create $HATCHI — a memecoin born from real emotion, not just hype.
              This project is our way of keeping Hatchi's memory alive forever. Through this coin, his spirit of loyalty,
               joy, and unconditional love continues on — in a community, in a movement, 
               and hopefully in something that can bring happiness to many others, just like he did for us.
               Hatchi may have gone to heaven, but he will never truly leave us. He is the heart and soul behind $HATCHI. 


        </p>
      </div>

      {/* FULL WIDTH Sliding Banner */}
      <div className="w-full h-12 bg-yellow-400 overflow-hidden flex items-center">
  <div className="flex whitespace-nowrap font-bold text-black animate-slide text-lg">
    <span className="mx-10">🐶 $HATCHI SOLDIERS</span>
    <span className="mx-10">🎯 GOAL $2M+ MARKET CAP</span>
    <span className="mx-10">💰 BUY MORE $HATCHI</span>
    <span className="mx-10">📈 THE NEXT TRENDING MEMECOIN ON PUMPFUN</span>
    <span className="mx-10">💲 DEX PAID</span>
    <span className="mx-10">💊 LAUNCH ON PUMPFUN</span>
    <span className="mx-10">🤝 HODL $HATCHI</span>
  </div>
</div>

      <br />

      {/* DexScreener Live Price Widget */}
      <div className="px-4">
        <div className="max-w-3xl mx-auto mb-8">

          {/* ========== LIVE CHART TITLE + LIVE PRICE BOX ========== */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-playful mb-8 text-yellow-400 flex items-center gap-4">
              $HATCHI LIVE CHART
              <span className="w-4 h-4 bg-green-500 rounded-full animate-fast-pulse"></span>
            </h2>

            {/* LIVE PRICE */}
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

          {/* LIVE CHART IFRAME */}
          <iframe
            title="$HATCHI Live Price"
            src="https://dexscreener.com/solana/2yf38dkf3j2nkkaypoknkv7tgmx5g2gedjjvwkvlkfyx"
            style={{ width: "100%", height: "420px", border: "none" }}
            allowTransparency="true"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
