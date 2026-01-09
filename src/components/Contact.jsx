import { FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const handleEmailClick = () => {
    const email = "hatchidev@gmail.com"; // 🔴 CHANGE THIS
    const subject = "Contact Inquiry";
    const body = "Hello,\n\nI would like to get in touch with you.\n\n";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-4xl font-playful mb-8 text-yellow-400">
        Contact Us
      </h2>

      <p className="mb-10 font-modern">
        Contact us directly or connect with us on social media
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {/* Telegram */}
        <a
          href="https://t.me/+DjRyRpeurCQ4ZDhl"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-hatchiBrown px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3 text-lg"
        >
          <FaTelegramPlane /> Telegram
        </a>

        {/* Twitter / X */}
        <a
          href="https://x.com/all_Traders25"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-hatchiBrown px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3 text-lg"
        >
          <FaXTwitter /> Twitter
        </a>

        {/* Email */}
        <button
          onClick={handleEmailClick}
          className="bg-yellow-400 text-hatchiBrown px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-3 text-lg"
        >
          <FaEnvelope /> Email Us
        </button>
      </div>
    </section>
  );
}
