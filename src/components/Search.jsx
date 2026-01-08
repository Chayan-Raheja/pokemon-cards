import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Search = ({ pkname }) => {
  const [all, setall] = useState([]);
  const [filter, setfilter] = useState([]);
  const [final, setfinal] = useState([]);
  const [not_found, setnot_found] = useState(false);

  // 1️⃣ Load all pokemon once
  useEffect(() => {
    const loadPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      setall(res.data.results);
    };
    loadPokemon();
  }, []);

  // 2️⃣ Filter while typing
  useEffect(() => {
    if (!pkname) {
      setfilter([]);
      setfinal([]);
      setnot_found(false);
      return;
    }

    const result = all.filter((p) => p.name.startsWith(pkname.toLowerCase()));

    setfilter(result);
    setnot_found(result.length === 0);
  }, [pkname, all]);

  // 3️⃣ Load pokemon details
  useEffect(() => {
    if (filter.length === 0) {
      setfinal([]);
      return;
    }

    const loadDetail = async () => {
      const requests = filter
        .slice(0, 10)
        .map((p) => axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`));

      const responses = await Promise.all(requests);
      setfinal(responses.map((r) => r.data));
    };

    loadDetail();
  }, [filter]);

  // ❌ Input empty → dropdown hide
  if (!pkname) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2
    w-[90%] md:w-175
    bg-fuchsia-500/50
    rounded-xl shadow-2xl z-50

    transition-all duration-300 ease-out
    opacity-100 translate-y-0 scale-100"
    >
      {/* ❌ Not Found */}
      {not_found && (
        <p className="text-center py-4 font-semibold text-gray-600">
          {pkname} Pokémon Not Found
        </p>
      )}

      {/* ✅ Dropdown results */}
      {final.length > 0 && (
        <div className="max-h-119 overflow-y-auto  grid grid-cols-1 sm:grid-cols-2 ">
          {final.map((pokemon) => (
            <Card key={pokemon.id} elem={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
