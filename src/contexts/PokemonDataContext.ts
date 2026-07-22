import { createContext, useContext } from "react";

export type PokemonDataType = {
    id: number;
    name: string;
    // generation: number;
    spriteUrl: string;
    shiny: boolean;
    // moves: string[];
}

export const defaultPokemonData: PokemonDataType = {
    id: 25,
    name: "pikachu",
    // generation: 1,
    shiny: false,
    spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}

export let PokemonDataContext = createContext<PokemonDataType>(defaultPokemonData);

if (PokemonDataContext){
    console.log(PokemonDataContext);
}

export function usePokemonData() {
    return useContext(PokemonDataContext);
}