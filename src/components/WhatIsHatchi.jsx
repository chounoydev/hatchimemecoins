import React from "react";

export default function WhatIsHatchi() {
  
  return (
    <section id="whatishatchi" className="py-16 px-4 text-center">
      {/* Story */}
      <h2 className="text-4xl font-playful mb-8 text-yellow-400">
        THE STORY OF HATCHI
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-modern mb-8">
        Hatchi was a real dog, but he passed away on January 3, 2026, just after the New Year. 
        He suddenly became weak and slowly lost his appetite. Hatchi was a Chow Chow and only two years old,
        which makes his passing even more heartbreaking. He was one of our most beloved dogs,
        and losing him has been incredibly hard for us to accept. Because of the pain and love we have for him,
        we decided to create a new memecoin inspired by our dog Hatchi, who is no longer with us and has gone to heaven.
        He became our inspiration, and through this project, we want his memory to live on.
        Hatchi is more than just a dog to us—he is the heart behind what we believe will be the next memecoin to trend.
      </p>
      <br />
       {/* LOWER Sliding Banner */}
      <div className="w-full h-10 bg-yellow-400 overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap font-bold text-black animate-slide">
          <span className="mx-8">🐶 $HATCHI SOLDIERS</span>
          <span className="mx-8">🎯 GOAL $5M MARKET CAP</span>
          <span className="mx-8">💰 BUY MORE $HATCHI</span>
          <span className="mx-8">📈 THE NEXT TRENDING MEMECOIN ON PUMPFUN</span>
          <span className="mx-8">💲 DEX PAID</span>
          <span className="mx-8">💊 LAUNCH ON PUMPFUN</span>
          <span className="mx-8">🤝 HODL $HATCHI</span>
        </div>
      </div>
<br />
      {/* DexScreener Live Price Widget */}
      <div className="flex whitespace-nowrap font-bold text-black animate-slide"></div>
      <div className="max-w-3xl mx-auto mb-8">
    <h2 className="text-4xl font-playful mb-8 text-yellow-400 flex items-center justify-center gap-4">
  $HATCHI LIVE CHART
  {/* Fast pumping LIVE indicator */}
  <span className="w-4 h-4 bg-green-500 rounded-full animate-fast-pulse"></span>
</h2>


        <iframe
          title="$HATCHI Live Price"
          src="https://dexscreener.com/solana/ed47bvi8p5n8bvtlwszizhcv2pzutcpjkxhqdhdjv2nj"
          style={{ width: "100%", height: "400px", border: "none" }}
          allowTransparency="true"
          scrolling="no"
        ></iframe>
      </div>
    
    
    </section>
  );
}

