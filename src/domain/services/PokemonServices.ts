import { Pokemon } from '../models/Pokemon';

export interface PokemonService {
    getPokemon: (id: number) => Promise<Pokemon | null>,
    getAllPokemon: () => Promise<Pokemon[] | null>
}