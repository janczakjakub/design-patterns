import * as lib from "../index";

const filePath = "https://example.pl/file1";

async function clientCode() {
    console.log("Run downloader");
    const downloader = new lib.proxy.Downloader();

    console.time("Download file");
    await downloader.download(filePath);
    console.timeEnd("Download file");

    console.time("Download file again");
    await downloader.download(filePath);
    console.timeEnd("Download file again");

    console.log("\nRun downloader with cache - proxy");
    const downloaderWithCache = new lib.proxy.DownloaderWithCache(downloader);

    console.time("Downloader with cache file");
    await downloaderWithCache.download(filePath);
    console.timeEnd("Downloader with cache file");

    console.time("Downloader with cache file again");
    await downloaderWithCache.download(filePath);
    console.timeEnd("Downloader with cache file again");
}

clientCode();
