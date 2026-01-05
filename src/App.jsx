import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsHatchi from "./components/WhatIsHatchi";
import Tokenomics from "./components/Tokenomics";
import Developers from "./components/Developers"; // new import
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="font-modern text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-black/40 min-h-screen">
        <Navbar />
        <Hero />
        <WhatIsHatchi />
        <Tokenomics />
        <Developers />  {/* added here */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
