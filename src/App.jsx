import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHatchi from "./components/WhatIsHatchi";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Developers from "./components/Developers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const audioRef = useRef(null);
  const [isMusicOn, setIsMusicOn] = useState(true);

  // Enable sound on first click (for browsers that block autoplay)
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play();
        document.removeEventListener("click", enableSound);
      }
    };
    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);

  // Toggle music on/off
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicOn(!isMusicOn);
  };

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
        muted={false}
      />

      {/* 🌐 SITE CONTENT */}
      <div className="relative z-10 font-modern text-white min-h-screen">
        {/* 🎵 MUSIC TOGGLE BUTTON */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-5 right-5 z-50 p-3 bg-black/50 rounded-full text-xl hover:bg-black/70 transition"
        >
          {isMusicOn ? "🔊" : "🔇"}
        </button>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO / INTRO */}
        <Hero />

        {/* ABOUT / WHAT IS HATCHI */}
        <WhatIsHatchi />

        {/* TOKENOMICS */}
        <section id="tokenomics">
          <Tokenomics />
        </section>

        {/* ✅ ROADMAP SECTION ADDED BELOW TOKENOMICS */}
        <Roadmap />

        {/* DEVELOPERS */}
        <Developers />

        {/* CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}
