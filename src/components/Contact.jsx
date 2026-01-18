import { FaTelegramPlane, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const handleEmailClick = () => {
    const email = "hatchidev@gmail.com";
    const subject = "Contact Inquiry";
    const body = "Hello,\n\nI would like to get in touch with you.\n\n";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 px-4 text-center bg-transparent">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-yellow-400">
        Contact Us
      </h2>

      {/* Subtitle */}
      <p className="max-w-xl mx-auto mb-12 text-white text-lg">
        Contact us directly or connect with us on social media
      </p>

      {/* Icon Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-white">

        {/* Telegram */}
        <a
          href="https://t.me/+DjRyRpeurCQ4ZDhl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <FaTelegramPlane className="text-yellow-400 text-xl" />
          <span className="font-medium">Telegram</span>
        </a>

        {/* Twitter */}
        <a
          href="https://x.com/HATCHISOL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <FaXTwitter className="text-yellow-400 text-xl" />
          <span className="font-medium">Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61586492634967"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <FaFacebookF className="text-yellow-400 text-xl" />
          <span className="font-medium">Facebook</span>
        </a>

        {/* Email */}
        <button
          onClick={handleEmailClick}
          className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
        >
          <FaEnvelope className="text-yellow-400 text-xl" />
          <span className="font-medium">Email Us</span>
        </button>

      </div>
    </section>
  );
}
