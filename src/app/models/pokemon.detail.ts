export class PokemonDetail {
    name!: string;
    types: Type[];
    sprites!: Sprite;

    constructor() {
        this.types = [];
    }
}

class Type {
    slot!: number;
    type!: {
        name: string;
    }
}

class Sprite {
    front_default!: string;
}
