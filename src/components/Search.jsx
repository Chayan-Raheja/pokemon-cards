import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Search = ({ pkname }) => {
  const [all, setall] = useState([]);
  const [filter, setfilter] = useState([]);
  const [final, setfinal] = useState(null);

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
      setfinal(null);
      return;
    }

    const result = all.filter((p) =>
      p.name.startsWith(pkname.toLowerCase())
    );

    setfilter(result);
  }, [pkname, all]);

  // 3️⃣ Load detail of FIRST matched pokemon
  useEffect(() => {
    if (filter.length === 0) return;

    const loadDetail = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${filter[0].name}`
      );
      setfinal(res.data);
    };

    loadDetail();
  }, [filter]);

  return (
    <div className="mt-4">
      {final && <Card elem={final} />}
    </div>
  );
};

export default Search;
