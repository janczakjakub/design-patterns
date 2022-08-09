export default class Pizza {
    private ingredients: string[] = [];

    constructor() {
        this.ingredients.push("PizzaDough");
    }

    public addIngredient(name: string): void {
        this.ingredients.push(name);
    }

    public getIngredient(): void {
        console.log(`Ingedients: ${this.ingredients.join(", ")}\n`);
    }
}
