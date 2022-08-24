import IngredientInterface from "./IngredientInterface";

export default class SimpleIngredient implements IngredientInterface {
    private name: string;
    private calories: number;
    private iron: number;
    private vitaminC: number;

    constructor(name: string, calories: number, iron: number, vitaminC: number) {
        this.name = name;
        this.calories = calories;
        this.iron = iron;
        this.vitaminC = vitaminC;
    }

    public getName(): string {
        return this.name;
    }

    public getCalories(): number {
        return this.calories;
    }

    public getIron(): number {
        return this.iron;
    }

    public getVitaminC(): number {
        return this.vitaminC;
    }
}
