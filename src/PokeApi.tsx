import { useEffect, useState } from "react";

interface Pokemon{
    sprites: {
        front_default: string;
    }
    name: string;
}

export function fetchPokemon({id}){
    const [pokemonData, setPokemonData] = useState<Pokemon|null>(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();

                setPokemonData(data);

            }catch(error){
                alert(error);
            };
        };

        fetchData();
    }, [id])

    if(!pokemonData)
        return <p>. . .</p>
    
    return(
        <>
            <img src={pokemonData.sprites.front_default} alt="don't cheat" />
        </>
    );
}