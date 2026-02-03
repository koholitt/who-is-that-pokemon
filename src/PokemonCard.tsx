import { useState } from "react";
import { useFetchPokemon } from "./PokeApi";
import styles from './PokemonCard.module.css';

export function PokemonCard(){
    const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 1024)+ 1);
    const [currentInput, setCurrentInput] = useState('');
    const [currentScore, setCurrentScore] = useState({
        score: 0,
        bestScore: 0
    })

    const {pokemonData, isLoading} = useFetchPokemon(pokemonId); //custom hook!?

    if (isLoading) return <p>. . .</p>

    function checkAnswer(){
        const newId = Math.floor(Math.random() * 1024)+ 1;

        if(currentInput === pokemonData?.name){
            setCurrentScore({...currentScore, score: currentScore.score +1});
            setCurrentInput('');
            return setPokemonId(newId);
        }
        else{
            setCurrentScore({...currentScore, score: 0, bestScore: Math.max(currentScore.score, currentScore.bestScore)});
            setCurrentInput('');
            return setPokemonId(newId);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.score}>
                <p>Score {currentScore.score}</p>
                <p>Best {currentScore.bestScore}</p>
            </div>

            <div className={styles.card}>
                <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
                <input type="text" name="pokemonName" onChange={e => setCurrentInput(e.target.value)}/>
                <button type="submit" onClick={checkAnswer}>Done!</button>
            </div>
        </div>
    )
}