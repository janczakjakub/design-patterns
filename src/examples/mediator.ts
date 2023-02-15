import * as lib from "../index";
import JsonInterpreter from "../interpreter/JsonInterpreter";

const chatRoom = new lib.mediator.ChatRoom();

const lucy = new lib.mediator.ChatUser("Lucy");
const george = new lib.mediator.ChatUser("George");
const joe = new lib.mediator.ChatUser("Joe");

chatRoom.join(lucy);
chatRoom.join(george);
chatRoom.join(joe);

lucy.sendMessage("Hello");
george.sendMessage("Hi");
joe.sendMessage("Do you like turles?", george);
george.sendMessage("Yes i like", joe);
