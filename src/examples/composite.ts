import * as lib from "../index";

const egg = new lib.composite.SimpleIngredient("Egg", 155, 6, 0);
const milk = new lib.composite.SimpleIngredient("Milk", 42, 0, 0);
const sugar = new lib.composite.SimpleIngredient("Sugar", 387, 0, 0);
const rice = new lib.composite.SimpleIngredient("Rice", 370, 8, 0);

const ricePudding = new lib.composite.ComplexIngredient("Rice pudding");
ricePudding.addIngredient(egg);
ricePudding.addIngredient(milk);
ricePudding.addIngredient(rice);
ricePudding.addIngredient(sugar);

function getIngredientInformation(ingredient: lib.composite.IngredientInterface) {
    console.log(`Name: ${ingredient.getName()}`);
    console.log(`Calories: ${ingredient.getCalories()}`);
    console.log(`Iron: ${ingredient.getIron()}`);
    console.log(`Vitamin C: ${ingredient.getVitaminC()}\n`);
}

console.log('Simple ingredient - "Leaf"');
getIngredientInformation(milk);

console.log('Complex ingredient - "Branch/Tree"');
getIngredientInformation(ricePudding);
