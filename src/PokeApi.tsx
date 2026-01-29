import { useEffect, useState } from "react";

interface FetchPokemonProps{ //:type interface used for data that the function recives
    id: number;
}

interface Pokemon{ 
    sprites: {
        front_default: string
    },
    name: string;
}

export function FetchPokemon({id}:FetchPokemonProps){ //:type annotations used for data that the function recives
    const [pokemonData, setPokemonData] = useState<Pokemon|null>(null); //generics <> tells a tool what type of data to work with ()

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();

                setPokemonData(data);

            }catch(error){
                console.log(error);
            };
        };

        fetchData();
    }, [id])

    if(!pokemonData) return <p>. . .</p>
    
    return(
        <>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
    );
}