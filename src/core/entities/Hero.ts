import type { IEntity } from "../types/IEntity";
import { addToRoot } from "../utills/root";

export class Hero implements IEntity {
    public id: number
    public name: string
    public hp: number
    public def: number

    constructor(id: number, name: string, hp: number, def: number) {
        this.id = id
        this.name = name
        this.hp = hp
        this.def = def
    }

    attack(): number {
        return 0
    }

    render(): HTMLElement {
        const block = document.createElement("div")
        block.className = "hero"
        block.innerHTML = `Name: ${this.name}`
        addToRoot(block)
        return block
    }
}   