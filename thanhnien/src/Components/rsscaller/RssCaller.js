import Parser from 'rss-parser';

// url = https://thanhnien.vn/rss

// Khi sử dụng hãy thêm async để data() không bị underfined

class RssCaller {
    constructor(url) {
        this.url = url;
        this.parser = new Parser();
    }
    
    async data() {
        const feed = await this.parser.parseURL(this.url);
        return feed;
    }
}

export default RssCaller;