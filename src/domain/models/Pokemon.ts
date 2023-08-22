export type Pokemon = {
    id: number,
    name: string,
    types: string[],
    height: number,
    weight: number,
    sprite: string
}

export interface IPokemon {
    getPokemon: (id: number) => Promise<Pokemon>,
    getAllPokemon: () => Promise<Pokemon[]>
}