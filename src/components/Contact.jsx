import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you can connect to an API or service to save the email
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000); // hide success message after 3 seconds
    }
  };

  return (
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-4xl font-playful mb-8 text-yellow-400">Contact Us</h2>
      <p className="mb-6 font-modern">Join our Telegram or Twitter to stay updated!</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <a
          href="https://t.me/+DjRyRpeurCQ4ZDhl"
          className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
        >
          Telegram
        </a>
        <a
          href="https://x.com/all_Traders25"
          className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
        >
          Twitter
        </a>
      </div>

      {/* Email Subscription */}
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center gap-4 items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-full text-black w-full sm:w-64 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-yellow-400 font-bold">Subscribed successfully!</p>
      )}
    </section>
  );
}
