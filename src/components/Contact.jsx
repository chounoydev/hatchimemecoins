export default function Contact() {
  return (
    
    <section id="contact" className="py-16 px-4 text-center">
      <h2 className="text-4xl font-playful mb-8 text-yellow-400">Contact Us</h2>
      <p className="mb-6 font-modern">Join our Telegram or Twitter to stay updated!</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://t.me/+DjRyRpeurCQ4ZDhl" className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Telegram
        </a>
        <a href="https://x.com/all_Traders25" className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          Twitter
        </a>
      </div>
    </section>
    
  );
}
