import ChatRoomInterface from "./ChatRoomInterface";

export default class ChatUser {
    private nick: string;
    private chatRoom: ChatRoomInterface;

    constructor(nick: string) {
        this.nick = nick;
    }

    public getNick(): string {
        return this.nick;
    }

    public joinToChatRoom(chatRoom: ChatRoomInterface): void {
        this.chatRoom = chatRoom;
    }

    public sendMessage(message: string, recipient?: ChatUser): void {
        this.chatRoom.send(message, this, recipient);
    }

    public receiveMessage(message: string, sender: ChatUser, isPublic: boolean): void {
        console.log(
            `|${
                isPublic ? "public" : "private"
            }|${sender.getNick()} -> ${this.getNick()}|: ${message}`
        );
    }
}
