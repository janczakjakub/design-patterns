import Pizza from "../entity/Pizza";
import { CheeseEnum } from "./CheeseEnum";
import { SauceEnum } from "./SauceEnum";
import { MeatEnum } from "./MeatEnum";
import { IngredientsAdditional } from "./IngredientsAdditionalEnum";
import PizzzaBuilderInterface from "./PizzaBuilderInterface";

export default class PizzzaBuilder implements PizzzaBuilderInterface {
    private pizzaObj: Pizza = new Pizza();

    public build(): Pizza {
        return this.pizzaObj;
    }

    public addMozzarella(): PizzzaBuilder {
        this.pizzaObj.addIngredient(CheeseEnum.Mozzarella);
        return this;
    }

    public addCorregio(): PizzzaBuilder {
        this.pizzaObj.addIngredient(CheeseEnum.Corregio);
        return this;
    }

    public addCheddar(): PizzzaBuilder {
        this.pizzaObj.addIngredient(CheeseEnum.Cheddar);
        return this;
    }

    public addGarlicSauce(): PizzzaBuilder {
        this.pizzaObj.addIngredient(SauceEnum.GarlicSauce);
        return this;
    }

    public addTomatoSauce(): PizzzaBuilder {
        this.pizzaObj.addIngredient(SauceEnum.TomatoSauce);
        return this;
    }

    public addChicken(): PizzzaBuilder {
        this.pizzaObj.addIngredient(MeatEnum.Chicken);
        return this;
    }

    public addSausage(): PizzzaBuilder {
        this.pizzaObj.addIngredient(MeatEnum.Sausage);
        return this;
    }

    public addPepperoni(): PizzzaBuilder {
        this.pizzaObj.addIngredient(MeatEnum.Pepperoni);
        return this;
    }

    public addHam(): PizzzaBuilder {
        this.pizzaObj.addIngredient(MeatEnum.Ham);
        return this;
    }

    public addOregano(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.Oregano);
        return this;
    }

    public addCorn(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.Corn);
        return this;
    }

    public addMushrooms(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.Mushrooms);
        return this;
    }

    public addRedOnion(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.RedOnion);
        return this;
    }

    public addOnion(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.Onion);
        return this;
    }

    public addGreenOlives(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.GreenOlives);
        return this;
    }

    public addBlackOlives(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.BlackOlives);
        return this;
    }

    public addCherryTomatoes(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.CherryTomatoes);
        return this;
    }

    public addPineapple(): PizzzaBuilder {
        this.pizzaObj.addIngredient(IngredientsAdditional.Pineapple);
        return this;
    }
}
