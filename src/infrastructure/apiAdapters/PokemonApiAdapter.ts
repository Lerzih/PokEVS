import { AxiosInstance } from "axios";
import { PokemonService } from "../../domain/services/PokemonServices";
import { mapJsonToPokemon } from "./PokemonMapper";
import { Pokemon } from "../../domain/models/Pokemon";

export class PokeApiAdapter implements PokemonService {
  private readonly POKE_API_BASE_URL = "https://pokeapi.co/api/v2/";
  private readonly QUERY_LIMIT = 20;
  private readonly axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getPokemon(id: number): Promise<Pokemon | null> {
    const apiUrl = `${this.POKE_API_BASE_URL}pokemon/${id}`;
    let pokemon: Pokemon | null;
    try {
      const response = await this.axiosInstance.get(apiUrl);
      pokemon = mapJsonToPokemon(response.data);
    } catch (error) {
      console.log(error);
      pokemon = null;
    }
    return pokemon;
  }

  async getAllPokemon(): Promise<Pokemon[] | null> {
    const apiUrl = `${this.POKE_API_BASE_URL}pokemon/?limit=${this.QUERY_LIMIT}`;
    let pokemon: Pokemon[] | null = null;
    try {
      const response = await this.axiosInstance.get(apiUrl);
      response.data.results.forEach((item: any) => {
        let regex = new RegExp("/pokemon/(.+?)/");
        let res: string =
          "" +
          regex
            .exec(item.url)?.[0]
            .replace("/pokemon/", "")
            .replace("/", "");
        let id: number = +res;

        let pokemon: Pokemon = mapJsonToPokemon(this.getPokemon(id));
        console.log(pokemon);

        return pokemon;
      });
    } catch (error) {
      console.log(error);
    }
    return pokemon;
  }
}
