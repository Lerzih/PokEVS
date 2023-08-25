import { Pokemon } from "../domain/models/Pokemon";
import { PokeApiAdapter } from "../infrastructure/apiAdapters/PokemonApiAdapter";

import axios from "axios";

const axiosInstance = axios.create();
const pokeApiAdapter = new PokeApiAdapter(axiosInstance);

pokeApiAdapter.getAllPokemon().then((result: Pokemon[] | null) => {
    console.log(result);
}).catch((err: any) => {
    console.log(err);
    
});