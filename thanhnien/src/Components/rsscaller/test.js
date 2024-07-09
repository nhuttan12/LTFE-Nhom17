import RssCaller from "./RssCaller.js"

(async () => {
    try {
        const test = new RssCaller('https://thanhnien.vn/rss/home.rss')
        const feed = await test.data();
        console.log(feed.items);
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
    }
})();