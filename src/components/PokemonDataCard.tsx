import { usePokemonData } from "../contexts/PokemonDataContext"


export function PokemonDataCard(){

    const pokemonDataObj = usePokemonData();

    return <div>
        <h3>{pokemonDataObj.id}</h3>
        <h1>{pokemonDataObj.name}</h1>
        <img src={pokemonDataObj.spriteUrl} />
    </div>
}