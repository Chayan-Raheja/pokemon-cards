import React, { useState } from "react";

const Carddata = (props) => {
  // console.log(JSON.stringify(props.description));

  const pokemonTypeStyles = {
    fire: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-yellow-300 via-amber-500 to-orange-700 text-black
    shadow-[0_0_25px_rgba(255,180,0,0.8)]
    hover:shadow-[0_0_45px_rgba(255,200,50,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    water: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-cyan-300 via-sky-500 to-blue-700 text-black
    shadow-[0_0_25px_rgba(0,180,255,0.7)]
    hover:shadow-[0_0_45px_rgba(0,220,255,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    grass: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-lime-300 via-green-500 to-emerald-700 text-black
    shadow-[0_0_25px_rgba(50,200,100,0.7)]
    hover:shadow-[0_0_45px_rgba(80,255,160,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    normal: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-zinc-200 via-stone-300 to-neutral-400 text-black
    shadow-[0_0_20px_rgba(200,200,200,0.6)]
    hover:shadow-[0_0_40px_rgba(230,230,230,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    bug: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-lime-200 via-green-400 to-lime-700 text-black
    shadow-[0_0_25px_rgba(140,220,90,0.7)]
    hover:shadow-[0_0_45px_rgba(180,255,120,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    poison: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-purple-300 via-fuchsia-500 to-violet-700 text-white
    shadow-[0_0_25px_rgba(180,90,255,0.7)]
    hover:shadow-[0_0_45px_rgba(210,140,255,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    ground: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-700 text-black
    shadow-[0_0_25px_rgba(200,160,80,0.7)]
    hover:shadow-[0_0_45px_rgba(230,190,120,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    electric: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 text-black
    shadow-[0_0_30px_rgba(255,255,100,0.9)]
    hover:shadow-[0_0_50px_rgba(255,255,150,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    fairy: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-pink-300 via-rose-400 to-fuchsia-600 text-white
    shadow-[0_0_25px_rgba(255,150,220,0.8)]
    hover:shadow-[0_0_45px_rgba(255,190,240,1)]
    hover:-translate-y-1 transition-all duration-300
  `,
    fighting: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-red-400 via-orange-600 to-red-800 text-white
    shadow-[0_0_25px_rgba(255,90,90,0.8)]
    hover:shadow-[0_0_45px_rgba(255,130,130,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    psychic: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-700 text-white
    shadow-[0_0_25px_rgba(255,120,200,0.8)]
    hover:shadow-[0_0_45px_rgba(255,160,230,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    rock: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-stone-300 via-stone-500 to-stone-800 text-black
    shadow-[0_0_25px_rgba(150,140,120,0.8)]
    hover:shadow-[0_0_45px_rgba(190,180,160,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    ghost: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-indigo-400 via-purple-600 to-indigo-900 text-white
    shadow-[0_0_25px_rgba(140,120,255,0.8)]
    hover:shadow-[0_0_45px_rgba(180,160,255,1)]
    hover:-translate-y-1 transition-all duration-300
  `,
    ice: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-sky-200 via-cyan-300 to-blue-500 text-black
    shadow-[0_0_25px_rgba(120,220,255,0.8)]
    hover:shadow-[0_0_45px_rgba(170,240,255,1)]
    hover:-translate-y-1 transition-all duration-300
  `,

    dragon: `
    rounded-xl m-5 p-3 flex flex-col justify-center items-center
    bg-gradient-to-br from-indigo-500 via-purple-700 to-red-700 text-white
    shadow-[0_0_25px_rgba(180,120,255,0.8)]
    hover:shadow-[0_0_45px_rgba(255,150,200,1)]
    hover:-translate-y-1 transition-all duration-300
  `,
    dark: `
  rounded-xl m-5 p-3 flex flex-col justify-center items-center
  bg-gradient-to-br from-gray-700 via-zinc-800 to-black text-white
  shadow-[0_0_25px_rgba(80,80,80,0.9)]
  hover:shadow-[0_0_50px_rgba(120,120,120,1)]
  hover:-translate-y-1 transition-all duration-300
`,
    steel: `
  rounded-xl m-5 p-3 flex flex-col justify-center items-center
  bg-gradient-to-br from-slate-200 via-gray-400 to-zinc-700 text-black
  shadow-[0_0_25px_rgba(160,160,180,0.8)]
  hover:shadow-[0_0_45px_rgba(200,200,230,1)]
  hover:-translate-y-1 transition-all duration-300
`,
  };

  const [showAbilities, setShowAbilities] = useState(false);
  const [states, setstates] = useState(false);
  const show1 = () => {
    setShowAbilities(!showAbilities);
    states ? setstates(false) : null;
  };
  const show2 = () => {
    setstates(!states);
    showAbilities ? setShowAbilities(false) : null;
  };
  return (
    <div>
      <div className={pokemonTypeStyles[props.type1]}>
        <h1 className=" flex justify-center relative -mt-1 font-bold ">
          #{String(props.Id).padStart(3, "0")}
        </h1>

        {/* image */}
        <div className="relative  w-38 h-38  bg-black/30 rounded-full overflow-visible items-center justify-center flex">
          <img
            className="absolute h-32 hover:-translate-y-4 hover:scale-150 transition-all duration-300"
            src={props.img1}
            alt={props.name}
          />
          {/* <img
            className="absolute h-30 opacity-0 group-hover:opacity-100"
            src={props.img2}
            alt={props.name}
          /> */}
        </div>

        {/* name */}
        <div className="flex items-center gap-1 my-1.5">
          <i className="ri-circle-fill text-base"></i>
          <h2 className="capitalize text-xl font-semibold">{props.name}</h2>
          <i className="ri-circle-fill text-base"></i>
        </div>

        {/* type */}
        <div className="flex gap-4 my-1 text-white">
          <p className="bg-black/20 capitalize rounded-2xl py-1 px-3">
            {props.type1}
          </p>
          {props.type2 && (
            <p className="bg-black/20 capitalize rounded-2xl py-1 px-3">
              {props.type2}
            </p>
          )}
        </div>
        {/* <div className="my-2 px-6">
          <p className="text-black/75 ">{props.description}</p>
        </div> */}
        <div className="flex items-center bg-black/25 py-5 my-3 px-14 gap-6 rounded-2xl">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold ri-scales-2-line  text-white">
              {" "}
              {props.weight} <p className="text-gray-200/75">Weight</p>
            </h1>
          </div>

          <hr className="h-12 w-px bg-white/30 border-none" />

          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-white ri-arrow-up-long-line">
              {" "}
              {props.height} <p className="text-gray-200/75">Height</p>
            </h1>
          </div>
        </div>
        {/* <p>Type: {props.type1} {props.type2? `,${props.type2}`: ''} </p> */}
        {/* <p>Type 2: {props.type2}</p> */}
        <div className="flex gap-4 my-2">
          <button
            className="bg-black/55 rounded-2xl py-1.5 px-3 text-white cursor-pointer active:scale-85"
            onClick={() => {
              show2();
            }}
          >
            {states ? "Hide states" : "Show states"}
          </button>
          <button
            className="bg-black/55 rounded-2xl py-1.5 px-3 text-white cursor-pointer active:scale-85"
            onClick={() => show1()}
          >
            {showAbilities ? "Hide abilities" : "Show abilities"}
          </button>
        </div>
      </div>

      <div>
        {showAbilities && (
          <p
            className={`
        ${pokemonTypeStyles[props.type1]}
        animate-[fadeInUp_0.4s_ease-out]
      `}
          >
            {/* Abilities: */}
            <div className="flex justify-around  w-full">
              {props.abilities1 && (
                <span className="px-3 py-1 capitalize rounded-full text-sm bg-white/30 border border-white/20">
                  {props.abilities1}
                </span>
              )}

              {props.abilities2 && (
                <span className="px-3 py-1 capitalize rounded-full text-sm bg-white/30 border border-white/20">
                  {props.abilities2}
                </span>
              )}

              {props.abilities3 && (
                <span className="px-3 py-1 capitalize rounded-full text-sm bg-white/30 border border-white/20">
                  {props.abilities3}
                </span>
              )}
            </div>
          </p>
        )}
      </div>

      <div>
        {states && (
          <div
            className={`
        ${pokemonTypeStyles[props.type1]} animate-[fadeInUp_0.4s_ease-out]`}
          >
            {/* HP */}
            <div className="w-full mb-3">
              <div className="flex justify-between text-base font-semibold">
                <span>HP</span>
                <span>{props.hp}%</span>
              </div>
              <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-7000"
                  style={{ width: `${props.hp}%` }}
                ></div>
              </div>
            </div>

            {/* Attack */}
            <div className="w-full mb-3">
              <div className="flex justify-between text-base font-semibold">
                <span>Attack</span>
                <span>{props.attack}%</span>
              </div>
              <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all duration-700"
                  style={{ width: `${props.attack}%` }}
                ></div>
              </div>
            </div>

            {/* Defense */}
            <div className="w-full mb-3">
              <div className="flex justify-between text-base font-semibold">
                <span>Defense</span>
                <span>{props.defense}%</span>
              </div>
              <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-700"
                  style={{ width: `${props.defense}%` }}
                ></div>
              </div>
            </div>

            {/* Speed */}
            <div className="w-full">
              <div className="flex justify-between text-base font-semibold">
                <span>Speed</span>
                <span>{props.speed}%</span>
              </div>
              <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-700"
                  style={{ width: `${props.speed}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carddata;
