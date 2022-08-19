import ChatApi from "../Chat/ChatApi";
import SenderInterface from "../SenderMessage/SenderInterface";

export default class ChatAdapter implements SenderInterface {
    private chatApiObj: ChatApi;
    private chatId: string;

    constructor(chatApiObj: ChatApi, chatId: string) {
        this.chatApiObj = chatApiObj;
        this.chatId = chatId;
    }

    public send(tittle: string, message: string): void {
        this.chatApiObj.signIn();
        this.chatApiObj.publishMesage(this.chatId, tittle.toUpperCase() + " " + message);
    }
}
