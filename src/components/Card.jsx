import React, { use, useEffect, useState } from 'react'
import Carddata from './Carddata'
import axios from 'axios'

 const  Card = (props) => {

    const stats = props.elem.stats

    const formattedStats = {
  hp: stats.find(s => s.stat.name === "hp")?.base_stat,
  attack: stats.find(s => s.stat.name === "attack")?.base_stat,
  defense: stats.find(s => s.stat.name === "defense")?.base_stat,
  speed: stats.find(s => s.stat.name === "speed")?.base_stat,



}
  //find the pokeamon type and store it into type array
  const type=props.elem.types.map(t => t.type.name)
  
  const abilities=props.elem.abilities.map(a => a.ability.name)
  // console.log(abilities)
    const [descrip, setdescrip] = useState('')
    const id=props.elem.id
    const desc=async(id)=>{
  const des= await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  // console.log(des.data.flavor_text_entries[0].flavor_text);
  // return 
  //cleaning the description text by removing special characters like \n and \f
  const englishEntry = des.data.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );

  if (englishEntry) {
    const cleanText = englishEntry.flavor_text.replace(/[\n\f]/g, " ");
    setdescrip(cleanText);
  }
      // console.log(des.data);
      
}
  useEffect(() => {
    desc(id)
  },[id])
// console.log(props.elem.sprites)
// {console.log(props.elem)}
console.log(props.elem.sprites.other)

    return (
     <div>
      <div>
        
          <Carddata description={descrip} Id={id} img1={props.elem.sprites.other.dream_world.front_default} img2={props.elem.sprites.other.showdown.front_default} name={props.elem. name} hp={formattedStats.hp} attack={formattedStats.attack} defense={formattedStats.defense} speed={formattedStats.speed} type1={type[0]} type2={type[1]}  abilities1={abilities[0]} abilities2={abilities[1]} abilities3={abilities[2]} weight={props.elem.weight}  height={props.elem.height} />
        
      </div>


     
        
        
    </div>
  )
}

export default Card
