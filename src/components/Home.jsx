import React from "react";

const Home = () => {
  return (
    <div className="bg-teal-300/75 min-h-screen pb-20">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center pt-10">
        Pokémon Encyclopedia
      </h1>

      {/* Hero Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-10 md:mx-20">

        {/* Text */}
        <p className="text-lg leading-relaxed text-justify">
          Explore the world of Pokémon like never before! Our Pokémon Encyclopedia
          gives you instant access to detailed information on every Pokémon —
          including stats, abilities, types, and evolutions. Whether you're a
          beginner or a seasoned trainer, everything you need is right here.
        </p>

        {/* Image */}
        <img
          src="/pikachu.png"
          alt="Pikachu"
          className="
            w-72 mx-auto
            transition-all duration-300 ease-out
            hover:scale-110
            hover:drop-shadow-[0_0_25px_rgba(255,220,80,0.9)]
            cursor-pointer
          "
        />
      </div>

      {/* Second Description */}
      <div className="mt-14 mx-10 md:mx-20 text-lg text-justify">
        <p>
          Search Pokémon in real-time, view beautiful cards, analyze battle stats,
          and discover hidden details. Build your knowledge, plan your teams, and
          become the ultimate Pokémon master!
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mx-10 md:mx-20">

        <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold">🔍 Smart Search</h3>
          <p className="mt-2 text-sm">
            Instantly find Pokémon by name with real-time search results.
          </p>
        </div>

        <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold">⚔️ Battle Stats</h3>
          <p className="mt-2 text-sm">
            View detailed stats like HP, Attack, Defense & Speed.
          </p>
        </div>

        <div className="bg-white/80 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold">📖 Full Encyclopedia</h3>
          <p className="mt-2 text-sm">
            Learn Pokémon types, abilities, evolutions & lore.
          </p>
        </div>

      </div>

      {/* Stats Section */}
      <div className="mt-20 flex justify-center gap-14 text-center">

        <div>
          <h2 className="text-3xl font-bold">1000+</h2>
          <p>Pokémon</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">18</h2>
          <p>Types</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">∞</h2>
          <p>Adventures</p>
        </div>

      </div>

    </div>
  );
};

export default Home;
