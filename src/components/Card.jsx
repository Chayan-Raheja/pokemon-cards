import React, { useEffect, useState } from 'react'
import Carddata from './Carddata'

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


 
// console.log(props.elem.sprites)
{console.log(props.elem)}

    return (
     <div>
      <div>
        
          <Carddata  Id={props.elem.id} img1={props.elem.sprites.front_default} img2={props.elem.sprites.front_shiny} name={props.elem. name} hp={formattedStats.hp} attack={formattedStats.attack} defense={formattedStats.defense} speed={formattedStats.speed} type1={type[0]} type2={type[1]}  abilities1={abilities[0]} abilities2={abilities[1]} abilities3={abilities[2]} weight={props.elem.weight}  height={props.elem.height} />
        
      </div>


     
        
        
    </div>
  )
}

export default Card
