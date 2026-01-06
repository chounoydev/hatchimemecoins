import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "N/A"; // Replace with your actual contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    });
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-playful mb-6 text-yellow-400">Meet $HATCHI</h1>
        <p className="text-xl md:text-2xl mb-6 font-modern">
          The cutest dog memecoin with real community vibes. Join us and be part of the pack!
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
            <a
              href="#"
              className="hover:text-hatchiGold"
            >
              BUY $HATCHI
            </a>
          </button>

          {/* Copy Contract Button */}
          <button
            onClick={copyToClipboard}
            className="bg-hatchiBrown text-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors relative"
          >
            Copy CA
            {copied && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-yellow-400 px-3 py-1 text-sm rounded-md">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        {/* Add your hero image or illustration here */}
      </div>
    </section>
  );
}

