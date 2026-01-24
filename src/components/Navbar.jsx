import { useState } from "react";
import { FaTelegram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-hatchiBrown text-hatchiCream py-4 px-6 flex justify-between items-center fixed w-full z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/hatchi2.png" alt="Hatchi Icon" className="w-10 h-10" />
        <span className="font-playful text-xl">HATCHI</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="space-x-6 font-modern hidden md:flex">
        <a href="#hero" className="text-base font-medium hover:text-hatchiGold transition">
          Home
        </a>
        <a href="#whatishatchi" className="text-base font-medium hover:text-hatchiGold transition">
          About
        </a>
        <a href="#tokenomics" className="text-base font-medium hover:text-hatchiGold transition">
          Tokenomics
        </a>
        <a href="#roadmap" className="text-base font-medium hover:text-hatchiGold transition">
          Roadmap
        </a>
        <a href="#contact" className="text-base font-medium hover:text-hatchiGold transition">
          Contact
        </a>
        <a
          href="#giveaway"
          className="text-base font-medium text-hatchiGold hover:opacity-80 transition-opacity"
        >
          🎁 Giveaway (Coming soon.)
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4 md:space-x-0 text-lg">
        <a
          href="https://x.com/HATCHISOL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hatchiGold"
          aria-label="X"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://t.me/+dRZ9t1Nsi0EyZTU1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hatchiGold"
          aria-label="Telegram"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61586492634967&rdid=IYHRWweycRqCaVE2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JJuVAM3XM#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-hatchiGold"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden ml-4 text-xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-hatchiBrown text-hatchiCream flex flex-col items-center py-4 md:hidden space-y-4 shadow-lg">
          <a
            href="#hero"
            className="text-base font-medium hover:text-hatchiGold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#whatishatchi"
            className="text-base font-medium hover:text-hatchiGold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#tokenomics"
            className="text-base font-medium hover:text-hatchiGold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-base font-medium hover:text-hatchiGold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roadmap
          </a>
          <a
            href="#contact"
            className="text-base font-medium hover:text-hatchiGold transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#giveaway"
            className="text-base font-medium text-hatchiGold hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            🎁 Giveaway (Coming soon.)
          </a>
        </div>
      )}
    </nav>
  );
}

