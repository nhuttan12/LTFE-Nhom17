import RssCaller from "../rsscaller/RssCaller.mjs";

var feed;
(async () => {
  try {
    const test = new RssCaller("https://thanhnien.vn/rss/home.rss");
    feed = await test.data();
    // console.log(feed);
    console.log(feed.items[0]);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
  }
})();
