import { useState } from "react";
import { useFetchPokemon } from "./PokeApi";

export function PokemonCard(){
    const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 1024)+ 1);
    const [currentInput, setCurrentInput] = useState('');
    const {pokemonData, isLoading} = useFetchPokemon(pokemonId); //custom hook!?

    if (isLoading) return <p>. . .</p>

    function checkAnswer(){
        const newId = Math.floor(Math.random() * 1164)+ 1;
       return setPokemonId(newId);
    }

    return(
        <div>
            <input type="text" name="pokemonName" onChange={e => setCurrentInput(e.target.value)}/>
            <button type="submit" onClick={checkAnswer}>Done!</button>
        </div>
    )
}