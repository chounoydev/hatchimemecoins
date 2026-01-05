export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col md:flex-row items-center justify-center px-4">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-playful mb-6 text-yellow-400">Meet $HATCHI</h1>
        <p className="text-xl md:text-2xl mb-6 font-modern">
          The cutest dog memecoin with real community vibes. Join us and be part of the pack!
        </p>
        <button className="bg-yellow-400 text-hatchiBrown px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
          <a href="https://pump.fun/coin/wAe5eRDhkFWd3yeLUv3962cKKJX1UtD4sCmSVNKACK9" className="hover:text-hatchiGold">BUY $HATCHI</a>
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        
      </div>
    </section>
  );
}


