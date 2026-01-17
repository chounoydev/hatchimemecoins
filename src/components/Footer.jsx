import {
  Home,
  Info,
  PieChart,
  Map,
  Mail,
  Send
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand / Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">$HATCHI</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            $HATCHI is a community-driven memecoin built with transparency,
            long-term vision, and strong community participation.
            Built by the community, for the community.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
            <a
              href="https://x.com/yourxaccount"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="X"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Home size={16} />
              <a href="#hero" className="hover:text-white transition">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <Info size={16} />
              <a href="#whatishatchi" className="hover:text-white transition">Story of Hatchi</a>
            </li>
            <li className="flex items-center gap-2">
              <PieChart size={16} />
              <a href="#tokenomics" className="hover:text-white transition">Tokenomics</a>
            </li>
            <li className="flex items-center gap-2">
              <Map size={16} />
              <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            For partnerships, collaborations, and community inquiries,
            reach out through our official channels.
          </p>
          <a
            href="mailto:contact@hatchi.io"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            <Mail size={18} />
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2026 $HATCHI. Community driven. Meme powered.
      </div>
    </footer>
  );
}
