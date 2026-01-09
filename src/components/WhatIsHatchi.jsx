import React from "react";

export default function WhatIsHatchi() {
  return (
    <section id="whatishatchi" className="py-16 text-center">
      {/* Inner content with padding */}
      <div className="px-4">
        {/* Story */}
        <h2 className="text-4xl font-playful mb-8 text-yellow-400">
          THE STORY OF HATCHI
        </h2>

        {/* Bigger description image */}
        <div className="flex justify-center mb-8">
          <img
            src="/hatchi11.png" // change to your image path
            alt="Hatchi the Chow Chow"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg opacity-95"
          />
        </div>

        <p className="max-w-3xl mx-auto text-lg font-modern mb-12">
          Hatchi was a real dog, but he passed away on January 6, 2026, just after the New Year. 
          He suddenly became weak and slowly lost his appetite. Hatchi was a Chow Chow and only two years old,
          which makes his passing even more heartbreaking. He was one of our most beloved dogs,
          and losing him has been incredibly hard for us to accept. Because of the pain and love we have for him,
          we decided to create a new memecoin inspired by our dog Hatchi, who is no longer with us and has gone to heaven.
          He became our inspiration, and through this project, we want his memory to live on.
          Hatchi is more than just a dog to us—he is the heart behind what we believe will be the next memecoin to trend.
        </p>
      </div>

      {/* FULL WIDTH Sliding Banner */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-12 bg-yellow-400 overflow-hidden flex items-center">
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
          <h2 className="text-4xl font-playful mb-8 text-yellow-400 flex items-center justify-center gap-4">
            $HATCHI LIVE CHART
            <span className="w-4 h-4 bg-green-500 rounded-full animate-fast-pulse"></span>
          </h2>

          <iframe
            title="$HATCHI Live Price"
            src="https://dexscreener.com/solana/ed47bvi8p5n8bvtlwszizhcv2pzutcpjkxhqdhdjv2nj"
            style={{ width: "100%", height: "420px", border: "none" }}
            allowTransparency="true"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
