import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Search = ({ pkname }) => {
  const [all, setall] = useState([]);
  const [filter, setfilter] = useState([]);
  const [final, setfinal] = useState([]);
  const [not_found, setnot_found] = useState(false);
  //  Load all pokemon once
  useEffect(() => {
    const loadPokemon = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      setall(res.data.results);
    };
    loadPokemon();
  }, []);

  //  Filter while typing
  useEffect(() => {
    if (!pkname) {
      setfilter([]);
      setfinal([]);
      return;
    }

    const result = all.filter((p) => p.name.startsWith(pkname.toLowerCase()));

    setfilter(result);
  }, [pkname, all]);

  //  Load detail of FIRST matched pokemon
  useEffect(() => {
    if (filter.length === 0) {
      setfinal([]);
      return;
    }
    setnot_found(false);
    const loadDetail = async () => {
      const requests = filter.map((p) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)
      );

      const responses = await Promise.all(requests);
      const data = responses.map((r) => r.data);
      setfinal(data);
    };
    // console.log(setfinal);

    loadDetail();
  }, [filter]);

  useEffect(() => {
    if (pkname && filter.length === 0) {
      // console.log("lawde");
      setnot_found(true);
    }
  }, [final]);
  return (
    <div>
      {not_found ? (
        <h2 className=" text-center text-2xl font-bold mt-10 ">
          {pkname} Pokemon Not Found
        </h2>
      ) : (
        <div className="relative z-30 min:h-screen grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white ">
          {final.map((pokemon) => (
            <Card key={pokemon.id} elem={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
