import { Pokemon } from "../models/Pokemon";

export interface PokemonRepository {
    getPokemons(): Promise<Pokemon[]>;
    getPokemonById(id: number): Promise<Pokemon>;
}