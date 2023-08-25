import { Pokemon } from "../../domain/models/Pokemon";

export function mapJsonToPokemon(json: any): Pokemon {
    return {
        id: json.id,
        name: json.name,
        types: json.types,
        height: json.height,
        weight: json.weight,
        sprite: json.sprites.front_default
    }
}