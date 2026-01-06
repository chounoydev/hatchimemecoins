import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHatchi from "./components/WhatIsHatchi";
import Tokenomics from "./components/Tokenomics";
import Developers from "./components/Developers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // 🔊 UNMUTE
        audioRef.current.play();
        document.removeEventListener("click", enableSound);
      }
    };

    document.addEventListener("click", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
    };
  }, []);

  return (
    <div
      className="font-modern text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* 🎵 Background Music */}
      <audio
        ref={audioRef}
        src="/backgroundmusic.mp3"
        autoPlay
        loop
        muted
      />

      <div className="bg-black/40 min-h-screen">
        <Navbar />
        <Hero />
        <WhatIsHatchi />
        <Tokenomics />
        <Developers />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
