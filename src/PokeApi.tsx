import { useEffect, useState } from "react";

interface Pokemon{ 
    sprites: {
        front_default: string
    },
    name: string;
}

export function useFetchPokemon(id:number){ //:type annotations used for data that the function recives
    const [pokemonData, setPokemonData] = useState<Pokemon|null>(); //generics <> tells a tool what type of data to work with ()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            setIsLoading(true);
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if(!response.ok)
                   // response.ok is true if status 200-299 
                   throw new Error("Pokemon not found");

                const data = await response.json();
                setPokemonData(data);

            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id])
    
    return {pokemonData, isLoading};
}