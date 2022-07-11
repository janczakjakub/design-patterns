import CursorInterface from "../entity/cursor/CursorInterface";
import Mouse from "../entity/cursor/Mouse";
import DisplayInterface from "../entity/display/DisplayInterface";
import Monitor from "../entity/display/Monitor";
import Keyboard from "../entity/textDevice/Keyboard";
import TextDeviceInterface from "../entity/textDevice/TextDeviceInterface";
import ComputerFactory from "./ComputerFactory";

export default class PcFactory implements ComputerFactory {
    public createCursor(): CursorInterface {
        return new Mouse();
    }

    public createDisplay(): DisplayInterface {
        return new Monitor();
    }

    public createTextDevice(): TextDeviceInterface {
        return new Keyboard();
    }
}
