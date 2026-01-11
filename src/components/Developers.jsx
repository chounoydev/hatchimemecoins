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
    {
      name: "Joel",
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
    </>
  );
}
