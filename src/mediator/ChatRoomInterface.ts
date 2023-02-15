import ChatUser from "./ChatUser";

export default interface ChatRoomInterface {
    join(participant: ChatUser): void;
    send(message: string, sender: ChatUser, recipient?: ChatUser): void;
}
