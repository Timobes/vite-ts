import type { IEntity } from "../types/IEntity"

export class Game {
    private hero: IEntity

    constructor(hero: IEntity) {
        this.hero = hero
    }

    start() {
        this.hero.render()
    }
}