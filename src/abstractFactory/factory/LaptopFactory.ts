import CursorInterface from "../entity/cursor/CursorInterface";
import TouchPad from "../entity/cursor/TouchPad";
import BuiltInMonitor from "../entity/display/BuiltInMonitor";
import DisplayInterface from "../entity/display/DisplayInterface";
import IntegratedKeyboard from "../entity/textDevice/IntegratedKeyboard";
import TextDeviceInterface from "../entity/textDevice/TextDeviceInterface";
import ComputerFactory from "./ComputerFactory";

export default class LaptopFactory implements ComputerFactory {
    public createCursor(): CursorInterface {
        return new TouchPad();
    }

    public createDisplay(): DisplayInterface {
        return new BuiltInMonitor();
    }

    public createTextDevice(): TextDeviceInterface {
        return new IntegratedKeyboard();
    }
}
