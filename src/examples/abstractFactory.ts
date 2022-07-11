import * as lib from "../index";

function clientCode(factory: lib.abstractFactory.ComputerFactory) {
    const cursor: lib.abstractFactory.CursorInterface = factory.createCursor();
    const display: lib.abstractFactory.DisplayInterface = factory.createDisplay();
    const textDevice: lib.abstractFactory.TextDeviceInterface = factory.createTextDevice();

    console.log(`cursor is: ${cursor.getCursor()}`);
    console.log(`display is: ${display.getDisplay()}`);
    console.log(`input text device is: ${textDevice.getInputTextDevice()}`);
}

console.log("Client Pc Factor");
clientCode(new lib.abstractFactory.PcFactory());
console.log("---------------------");

console.log("Client Laptop Factor");
clientCode(new lib.abstractFactory.LaptopFactory());
console.log("---------------------");
