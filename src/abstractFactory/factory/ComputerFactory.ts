import CursorInterface from "../entity/cursor/CursorInterface";
import DisplayInterface from "../entity/display/DisplayInterface";
import TextDeviceInterface from "../entity/textDevice/TextDeviceInterface";

export default interface ComputerFactory {
    createCursor(): CursorInterface;
    createDisplay(): DisplayInterface;
    createTextDevice(): TextDeviceInterface;
}
