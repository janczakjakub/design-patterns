import CursorInterface from "./CursorInterface";

export default class Mouse implements CursorInterface {
    getCursor(): string {
        return "Logitech mouse";
    }
}
