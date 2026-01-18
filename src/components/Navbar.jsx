import { FaTelegram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-hatchiBrown text-hatchiCream py-4 px-6 flex justify-between items-center fixed w-full z-50 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/hatchi2.png" alt="Hatchi Icon" className="w-10 h-10" />
        <span className="font-playful text-xl">HATCHI</span>
      </div>

      {/* Nav Links */}
      <div className="space-x-6 font-modern hidden md:flex">
        <a
          href="#hero"
          className="text-base font-semibold hover:text-hatchiGold"
        >
          Home
        </a>
        <a href="#whatishatchi" className="hover:text-hatchiGold">
          Story of Hatchi
        </a>
        <a href="#tokenomics" className="hover:text-hatchiGold">
          Tokenomics
        </a>
        <a href="#roadmap" className="hover:text-hatchiGold">
          Roadmap
        </a>
        <a href="#contact" className="hover:text-hatchiGold">
          Contact
        </a>
        <a
          href="#giveaway"
          className="text-lg font-bold text-hatchiGold hover:opacity-80 transition-opacity"
        >
          🎁 Giveaway (Coming soon.)
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 md:space-x-0 text-lg">
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
          href="https://t.me/+DjRyRpeurCQ4ZDhl"
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
      </div>
    </nav>
  );
}
