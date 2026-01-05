import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-hatchiBrown text-hatchiCream py-4 px-6 flex justify-between items-center fixed w-full z-50 shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/hatchi2.png" alt="Hatchi Icon" className="w-10 h-10" />
        <span className="font-playful text-xl">HATCHI</span>
      </div>

      <div className="space-x-6 font-modern hidden md:flex">
        <a href="#hero" className="hover:text-hatchiGold">Home</a>
        <a href="#whatishatchi" className="hover:text-hatchiGold">About</a>
        <a href="#tokenomics" className="hover:text-hatchiGold">Tokenomics</a>
        <a href="#contact" className="hover:text-hatchiGold">Contact</a>
      </div>

      <div className="flex space-x-4 md:space-x-0">
        <a href="https://x.com/all_Traders25" className="hover:text-hatchiGold"><FaTwitter /></a>
        <a href="https://t.me/+DjRyRpeurCQ4ZDhl" className="hover:text-hatchiGold"><FaTelegram /></a>
      </div>
    </nav>
  );
}
