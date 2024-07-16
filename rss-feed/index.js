import cors from "cors";
import express from "express";
import RSSparser from "rss-parser";
import GetDetailArticle from "./function/GetDetailsOfArticle.js";

const feedURLs = [
    "https://thanhnien.vn/rss/"
]
const parser = new RSSparser();
let articles = [];
// Chuyển đổi item trong rss sang json
const parse = async url => {
    const feed = await parser.parseURL(url);

    // console.log(feed.items)
    articles = [];
    feed.items.slice(0,feed.items.length).forEach(item =>{
        articles.push({ item })
    })
}
let app = express();
// Server sử dụng thư viện cors để by pass cors
app.use(cors());
// Server sử dụng hàm json() để parse request 
app.use(express.json());

app.post('/', async (req,res) =>{
    let check = req.body.signal;
    if(check==="datafetch") {
        let dataPage = req.body.datapage;
        let urlFeed = feedURLs + dataPage +".rss";
        try {
            await parse(urlFeed);
            res.send(articles);
            console.log(articles);
        } catch (error) {
            res.status(500).send("Error parsing feed");
        }
    }else if(check==="detailarticle") {
        try {
            let articlePage = req.body.articlepage;
            let detailArticle = await GetDetailArticle(articlePage);
            res.send(detailArticle);
        } catch (error) {
            res.status(500).send("Error data article false");
        }
        
    }
})

const server = app.listen("4000", () =>{
    console.log("App is listening at https://localhost:4000")
})