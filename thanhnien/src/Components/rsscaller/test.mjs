import RssCaller from "./RssCaller.mjs"

(async () => {
    try {
        const test = new RssCaller('https://thanhnien.vn/rss/doi-song.rss')
        const feed = await test.data();
        console.log(feed);
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
    }
})();