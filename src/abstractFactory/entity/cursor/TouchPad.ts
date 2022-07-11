import CursorInterface from "./CursorInterface";

export default class TouchPad implements CursorInterface {
    getCursor(): string {
        return "msi touchpad";
    }
}
