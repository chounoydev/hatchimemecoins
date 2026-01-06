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
        audioRef.current.muted = false; // 🔊 unmute on first click
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
    <>
      {/* 🎥 VIDEO BACKGROUND */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hatchibg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-black/40"></div>

      {/* 🎵 BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src="/backgroundmusic.mp3"
        autoPlay
        loop
        muted
      />

      {/* 🌐 SITE CONTENT */}
      <div className="relative z-10 font-modern text-white min-h-screen">
        <Navbar />
        <Hero />
        <WhatIsHatchi />
        <Tokenomics />
        <Developers />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
