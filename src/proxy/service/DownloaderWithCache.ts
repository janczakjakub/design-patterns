import DownloadInterface from "./DownloadInterface";

export default class DownloaderWithCache implements DownloadInterface {
    private downloader: DownloadInterface;
    private cache: string[] = [];

    constructor(downloader: DownloadInterface) {
        this.downloader = downloader;
    }

    public async download(url: string): Promise<void> {
        if (this.cache.includes(url)) {
            console.log("End of process.");
        } else {
            await this.downloader.download(url);
            this.cache.push(url);
        }
    }
}
