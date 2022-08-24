import IngredientInterface from "./IngredientInterface";

export default class ComplexIngredient implements IngredientInterface {
    private name: string;
    private ingredients: IngredientInterface[];

    constructor(name: string) {
        this.name = name;
        this.ingredients = [];
    }

    public addIngredient(ingredient: IngredientInterface): void {
        this.ingredients.push(ingredient);
    }

    public getName(): string {
        return this.name;
    }

    public getCalories(): number {
        let totalCaloriers: number = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            totalCaloriers += this.ingredients[i].getCalories();
        }

        return totalCaloriers;
    }

    public getIron(): number {
        let totalIron: number = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            totalIron += this.ingredients[i].getIron();
        }

        return totalIron;
    }

    public getVitaminC(): number {
        let totalVitaminC: number = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            totalVitaminC += this.ingredients[i].getVitaminC();
        }

        return totalVitaminC;
    }
}
