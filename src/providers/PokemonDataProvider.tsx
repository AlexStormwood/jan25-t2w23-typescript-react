import { useEffect, useState } from "react";
import { defaultPokemonData, PokemonDataContext, type PokemonDataType } from "../contexts/PokemonDataContext";
// import { type PokemonDataType } from "../contexts/PokemonDataContext";

export function PokemonDataProvider({children}: {children: React.ReactNode}){

    const [pokemonDataObj, setPokemonDataObj] = useState<PokemonDataType>(defaultPokemonData)

    useEffect(() => {
        const getPokemonData = async () => {
            let randomPokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + (Math.floor(Math.random() * 1025) + 1)
            let response = await fetch(randomPokemonUrl);
            let bodyData = await response.json();

            let isShiny = Boolean(Math.random() > 0.5);

            let newPokemonData: PokemonDataType = {
                id: bodyData.id,
                name: bodyData.name,
                shiny: isShiny,
                spriteUrl: (isShiny ? bodyData.sprites.front_shiny : bodyData.sprites.front_default)
            }

            setPokemonDataObj(newPokemonData);
        }
        getPokemonData();
    }, [])

    return <PokemonDataContext.Provider value={pokemonDataObj}>
            {children}
        </PokemonDataContext.Provider>
}