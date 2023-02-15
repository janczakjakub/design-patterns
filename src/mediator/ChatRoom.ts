import ChatRoomInterface from "./ChatRoomInterface";
import ChatUser from "./ChatUser";

export default class ChatRoom implements ChatRoomInterface {
    private participants: { [key: string]: ChatUser } = {};

    public join(participant: ChatUser): void {
        this.participants[participant.getNick()] = participant;
        participant.joinToChatRoom(this);
    }

    public send(message: string, sender: ChatUser, recipient?: ChatUser): void {
        if (recipient) {
            recipient.receiveMessage(message, sender, false);
        } else {
            for (let key in this.participants) {
                if (this.participants[key] !== sender) {
                    this.participants[key].receiveMessage(message, sender, true);
                }
            }
        }
    }
}
