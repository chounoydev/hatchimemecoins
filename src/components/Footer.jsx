'use client';

export default function Footer() {
  return (
    <footer className="bg-[#060b14] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm">
              H
            </div>
            <h3 className="text-white text-lg font-semibold">
              $HATCHI
            </h3>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            A community-driven meme project.
            <br />
            Built by the people, for the people.
          </p>

          <div className="flex gap-4 mt-5">
            <a
              href="#"
              aria-label="Telegram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              T
            </a>
            <a
              href="#"
              aria-label="X"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              X
            </a>
          </div>
        </div>

        {/* Empty column for spacing */}
        <div />

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="/token" className="hover:text-white transition">
                Token
              </a>
            </li>
            <li>
              <a href="/roadmap" className="hover:text-white transition">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs gap-3">
          <p>
            © 2026 $HATCHI. Community driven. Meme powered.
          </p>

          <div className="flex gap-4">
            <a href="/#hero" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/#hero" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

