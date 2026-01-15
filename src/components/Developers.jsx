export default function Developers() {
  const devs = [
    {
      name: "CHOUNOY.ETH",
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
    {
      name: "JOEL",
      role: "Community Manager",
      image: "/joel.png",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {devs.map((dev, index) => (
            <div
              key={index}
              className="bg-[#2c1e0b]/80 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-4 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
              <p className="text-yellow-300 text-center">{dev.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

