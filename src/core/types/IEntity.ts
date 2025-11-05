export interface IEntity {
    id: number,
    name: string,
    hp: number,
    def?: number,
    attack(): number,
    defense?(): number,
    render(): HTMLElement
}