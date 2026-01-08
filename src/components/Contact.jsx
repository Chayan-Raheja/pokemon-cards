import React from "react";

const Contact = () => {
  return (
    <footer className="bg-black/75 text-gray-300 ">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Pokémon Encyclopedia
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Your ultimate destination to explore Pokémon stats, abilities,
            evolutions, and battle knowledge. Built for trainers, by trainers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li  className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li  className="hover:text-yellow-400 cursor-pointer">Search Pokémon</li>
            <li className="hover:text-yellow-400 cursor-pointer">Types</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              📧 <span>support@pokemonpedia.com</span>
            </li>
            <li className="flex items-center gap-2">
              🌐 <span>www.pokemonpedia.com</span>
            </li>
            <li className="flex items-center gap-2">
              📍 <span>India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 text-center py-4 text-sm">
        © {new Date().getFullYear()} Pokémon Encyclopedia. All rights reserved.
      </div>

    </footer>
  );
};

export default Contact;
