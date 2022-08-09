import * as lib from "../index";

const pizzaBuilder: lib.builder.PizzaBuilder = new lib.builder.PizzaBuilder();
const pizzaDirector = new lib.builder.PizzaDirector(pizzaBuilder);

console.log("Margarita");
const margaritaObj: lib.builder.Pizza = pizzaDirector.buildMargarita();
margaritaObj.getIngredient();

console.log("Fungo");
const fungoaObj: lib.builder.Pizza = pizzaDirector.buildFungo();
fungoaObj.getIngredient();

console.log("Prosciuto");
const prosciutoObj: lib.builder.Pizza = pizzaDirector.buildProsciuto();
prosciutoObj.getIngredient();

console.log("Hawai");
const hawaiObj: lib.builder.Pizza = pizzaDirector.buildHawai();
hawaiObj.getIngredient();

console.log("Pollo");
const poloObj: lib.builder.Pizza = pizzaDirector.buildPollo();
poloObj.getIngredient();
