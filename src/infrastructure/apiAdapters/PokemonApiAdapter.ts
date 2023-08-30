import { PokemonService } from "../../domain/services/PokemonServices";
import { mapJsonToPokemon } from "./PokemonMapper";
import { Pokemon } from "../../domain/models/Pokemon";

export class PokeApiAdapter implements PokemonService {
  private readonly POKE_API_BASE_URL = "https://pokeapi.co/api/v2/";
  private readonly QUERY_LIMIT = 20;

  constructor() {}

  async getPokemon(id: number): Promise<Pokemon | null> {
    const apiUrl = `${this.POKE_API_BASE_URL}pokemon/${id}`;
    const response = fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return mapJsonToPokemon(res);
      })
      .catch((err) => {
        console.error(err);
        return null;
      });

    return response;
  }

  getAllPokemon(): Pokemon[] | null {
    return null;
  }

  // async getAllPokemon(): Promise<Pokemon[] | null> {
  //   const apiUrl = `${this.POKE_API_BASE_URL}pokemon/?limit=${this.QUERY_LIMIT}`;
  //   let pokemon: Pokemon[] | null = null;
  //   try {
  //     const response = await this.axiosInstance.get(apiUrl);
  //     response.data.results.forEach((item: any) => {
  //       let regex = new RegExp(/pokemon\/(.+?)\//gm);
  //       let res: string =
  //         "" +
  //         regex.exec(item.url)?.[0].replace("/pokemon/", "").replace("/", "");
  //       let id: number = +res;

  //       let pokemon: Pokemon = mapJsonToPokemon(this.getPokemon(id));

  //       return pokemon;
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return pokemon;
  // }
}
