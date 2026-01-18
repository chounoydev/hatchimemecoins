'use client';

export default function Footer() {
  return (
    <footer className="bg-[#c6a574] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand & Description */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            $HATCHI
          </h3>

          <p className="text-sm leading-relaxed max-w-sm">
            Hatchi is a community-driven meme project focused on transparency,
            creativity, and long-term growth.
            <br />
            Built by the community, for the community.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-4">
            Navigation
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/story" className="hover:underline">
                Story of Hatchi
              </a>
            </li>
            <li>
              <a href="/tokenomics" className="hover:underline">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="/roadmap" className="hover:underline">
                Roadmap
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <span className="opacity-80">
                🎁 Giveaway (Coming soon)
              </span>
            </li>
          </ul>
        </div>

        {/* Contact & Collaboration */}
        <div>
          <h4 className="font-semibold mb-4">
            Collaborations
          </h4>

          <p className="text-sm mb-3">
            For partnerships, marketing, or collaborations:
          </p>

          <a
            href="mailto:collab@hatchi.io"
            className="text-sm font-medium underline"
          >
            collab@hatchi.io
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs">
          © 2026 $HATCHI. Community driven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
