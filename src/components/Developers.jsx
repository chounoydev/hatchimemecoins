export default function Developers() {
  const devs = [
    {
      name: "JAN.ETH",
      role: "Lead Developer",
      image: "/jan11.jpg",
    },
    {
      name: "BJ",
      role: "Marketing & Community Manager",
      image: "/bj1.jpg",
    },
    {
      name: "BOSS REY",
      role: "Design / Graphics Lead",
      image: "/rey.jpg",
    },
  ];

  return (
    <>
      {/* Developers Section */}
      <section
        id="developers"
        className="py-16 px-4 text-center max-w-6xl mx-auto"
      >
        <h2 className="text-4xl mb-12 text-yellow-400">
          Meet the Developers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {devs.map((dev, index) => (
            <div
              key={index}
              className="bg-[#2c1e0b]/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
              <p className="text-yellow-300">{dev.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOWER Sliding Banner */}
    {/* LOWER Sliding Banner */}
<div className="w-full h-10 bg-hatchiGold overflow-hidden flex items-center">
  <div className="flex whitespace-nowrap font-bold text-black slide-banner">
    <span className="mx-8">🐶 $HATCHI SOLDIERS</span>
    <span className="mx-8">🎯 GOAL $5M MARKET CAP</span>
    <span className="mx-8">💰 BUY MORE $HATCHI</span>
    <span className="mx-8">📈 THE NEXT TRENDING MEMECOIN ON PUMPFUN.</span>
     <span className="mx-8">💲 DEX PAID</span>
      <span className="mx-8">💊 LAUNCH ON PUMPFUN</span>
       <span className="mx-8">🤝HODL $HATCHI </span>
  </div>
</div>

    </>
  );
}
