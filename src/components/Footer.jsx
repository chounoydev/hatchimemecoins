'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#060b14] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* LOGO IMAGE ADDED */}
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden">
              <img
                src="/images/hatchisol-logo.png"
                alt="Hatchisol Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-white text-lg font-semibold">
              Hatchisol
            </h3>
          </div>

          {/* HATCHI IMAGE ADDED */}
          <div className="mb-5">
            <img
              src="hatchi2.png"
              alt="Hatchi Mascot"
              className="w-32 h-auto rounded-xl"
            />
          </div>

          <p className="text-sm max-w-sm leading-relaxed">
            The next generation of meme coins.
            <br />
            Built by the community, for the community.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {/* Telegram */}
            <a
              href="https://t.me/+DjRyRpeurCQ4ZDhl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.9 16.2l-.4 4.2c.6 0 .9-.3 1.2-.6l2.9-2.7 6 4.4c1.1.6 1.9.3 2.2-1l4-18.8c.4-1.6-.6-2.2-1.7-1.8L1.3 9.7c-1.6.6-1.6 1.5-.3 1.9l5.5 1.7L19.2 6c.7-.4 1.3-.2.8.2"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/HATCHISOL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 2H21l-6.6 7.5L22 22h-6.6l-5.2-6.6L4.4 22H1.7l7.1-8L2 2h6.7l4.7 6L18.3 2z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:hatchidev@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div />

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Navigation
          </h4>

          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#story" className="hover:text-white transition">Story of Hatchi</a></li>
            <li><a href="#tokenomics" className="hover:text-white transition">Tokenomics</a></li>
            <li><a href="#roadmap" className="hover:text-white transition">Roadmap</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li className="text-gray-400">🎁 Giveaway (Coming soon)</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <p>
            © 2026 Hatchi. Community driven. Meme powered.
          </p>

          <div className="flex gap-5">
            <a href="#hero" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
