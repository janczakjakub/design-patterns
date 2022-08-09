import Pizza from "../entity/Pizza";
import PizzzaBuilderInterface from "./PizzaBuilderInterface";

export default class PizzaDirector {
    private pizzaBuilder: PizzzaBuilderInterface;

    constructor(builder: PizzzaBuilderInterface) {
        this.pizzaBuilder = builder;
    }

    public buildMargarita(): Pizza {
        this.pizzaBuilder.addTomatoSauce();
        this.pizzaBuilder.addMozzarella();
        this.pizzaBuilder.addOregano();

        return this.pizzaBuilder.build();
    }

    public buildFungo(): Pizza {
        this.pizzaBuilder.addTomatoSauce();
        this.pizzaBuilder.addMozzarella();
        this.pizzaBuilder.addMushrooms();
        this.pizzaBuilder.addOnion();

        return this.pizzaBuilder.build();
    }

    public buildProsciuto(): Pizza {
        this.pizzaBuilder.addTomatoSauce();
        this.pizzaBuilder.addMozzarella();
        this.pizzaBuilder.addHam();
        this.pizzaBuilder.addMushrooms();

        return this.pizzaBuilder.build();
    }

    public buildHawai(): Pizza {
        this.pizzaBuilder.addTomatoSauce();
        this.pizzaBuilder.addMozzarella();
        this.pizzaBuilder.addHam();
        this.pizzaBuilder.addPineapple();

        return this.pizzaBuilder.build();
    }

    public buildPollo(): Pizza {
        this.pizzaBuilder.addTomatoSauce();
        this.pizzaBuilder.addCheddar();
        this.pizzaBuilder.addChicken();
        this.pizzaBuilder.addCorn();
        this.pizzaBuilder.addRedOnion();

        return this.pizzaBuilder.build();
    }
}
