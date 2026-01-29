import { useState } from "react";
import { FetchPokemon } from "./PokeApi";

export function pokemonCard(){
    const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 1164)+ 1)
    
    return(
        <div>
            <FetchPokemon id={pokemonId} />
        </div>
    )
}