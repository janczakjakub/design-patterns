import Pizza from "../entity/Pizza";

export default interface PizzzaBuilderInterface {
    build(): Pizza;
    addMozzarella(): void;
    addCorregio(): void;
    addCheddar(): void;
    addGarlicSauce(): void;
    addTomatoSauce(): void;
    addChicken(): void;
    addSausage(): void;
    addPepperoni(): void;
    addHam(): void;
    addOregano(): void;
    addCorn(): void;
    addMushrooms(): void;
    addRedOnion(): void;
    addOnion(): void;
    addGreenOlives(): void;
    addBlackOlives(): void;
    addCherryTomatoes(): void;
    addPineapple(): void;
}
