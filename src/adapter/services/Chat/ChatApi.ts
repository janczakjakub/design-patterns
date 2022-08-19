export default class ChatApi {
    private login: string;
    private apiKey: string;

    constructor(login: string, apiKey: string) {
        this.login = login;
        this.apiKey = apiKey;
    }

    public signIn(): void {
        console.log(`Signed in to chat via account ${this.login}`);
    }

    public publishMesage(chatId: string, message: string): void {
        console.log("CHAT ID: " + chatId);
        console.log(message);
    }
}
