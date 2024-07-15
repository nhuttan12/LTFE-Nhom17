import cors from "cors";
import express from "express";
import RSSparser from "rss-parser";

// const feedURLs = [
//     "https://thanhnien.vn/rss/home.rss",
//     "https://thanhnien.vn/rss/thoi-su.rss",
//     "https://thanhnien.vn/rss/chao-ngay-moi.rss",
//     "https://thanhnien.vn/rss/the-gioi.rss",
//     "https://thanhnien.vn/rss/kinh-te.rss",
//     "https://thanhnien.vn/rss/doi-song.rss",
//     "https://thanhnien.vn/rss/suc-khoe.rss",
//     "https://thanhnien.vn/rss/gioi-tre.rss",
//     "https://thanhnien.vn/rss/tieu-dung-thong-minh.rss",
//     "https://thanhnien.vn/rss/giao-duc.rss",
//     "https://thanhnien.vn/rss/du-lich.rss",
//     "https://thanhnien.vn/rss/van-hoa.rss",
//     "https://thanhnien.vn/rss/giai-tri.rss",
//     "https://thanhnien.vn/rss/the-thao.rss",
//     "https://thanhnien.vn/rss/cong-nghe.rss",
//     "https://thanhnien.vn/rss/xe.rss",
//     "https://thanhnien.vn/rss/thoi-trang-tre.rss",
//     "https://thanhnien.vn/rss/ban-doc.rss",
//     "https://thanhnien.vn/rss/rao-vat.rss",
//     "https://thanhnien.vn/rss/video.rss",
//     "https://thanhnien.vn/rss/dien-dan.rss",
//     "https://thanhnien.vn/rss/podcast.rss",
//     "https://thanhnien.vn/rss/nhat-ky-tet-viet.rss",
//     "https://thanhnien.vn/rss/magazine.rss",
//     "https://thanhnien.vn/rss/cung-con-di-tiep-cuoc-doi.rss",
//     "https://thanhnien.vn/rss/ban-can-biet.rss",
//     "https://thanhnien.vn/rss/cai-chinh.rss",
//     "https://thanhnien.vn/rss/blog-phong-vien.rss",
//     "https://thanhnien.vn/rss/toi-viet.rss",
//     "https://thanhnien.vn/rss/viec-lam.rss",
//     "https://thanhnien.vn/rss/tno.rss",
//     "https://thanhnien.vn/rss/tin-24h.rss",
//     "https://thanhnien.vn/rss/thi-truong.rss",
//     "https://thanhnien.vn/rss/tin-nhanh-360.rss"
// ]

const feedURLs = [
    "https://thanhnien.vn/rss/"
]
const parser = new RSSparser();
let articles = [];
const parse = async url => {
    const feed = await parser.parseURL(url);

    // console.log(feed.items)
    articles = [];
    feed.items.slice(0,40).forEach(item =>{
        articles.push({ item })
    })
}

let app = express();
// Server sử dụng thư viện cors để by pass cors
app.use(cors());
// Server sử dụng hàm json() để parse request 
app.use(express.json());

// Hàm get để lấy danh sách mặc định nhưng hiện tại không cần
// app.get('/', (req, res) =>{
//     res.send(articles);
// })

app.post('/', async (req,res) =>{
    let check = req.body.signal;
    let urlFeed = feedURLs + check + ".rss";
    try {
        await parse(urlFeed); // Chờ hàm parse hoàn thành
        res.send(articles);
        console.log(articles);
    } catch (error) {
        res.status(500).send("Error parsing feed");
    }
})

const server = app.listen("4000", () =>{
    console.log("App is listening at https://localhost:4000")
})