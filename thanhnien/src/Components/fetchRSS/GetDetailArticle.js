import DataFetch from "./DataFetch";

const GetDetailArticle = async (serverLink, guid) => {
    try {
        const signal = { signal: "detailarticle", articlepage: guid };
        const detailData = await DataFetch(serverLink, signal);
        return detailData;
    } catch (error) {
        console.error('Error fetching article detail:', error);
        throw error; // Có thể ném lỗi ra ngoài để xử lý ở nơi gọi hàm
    }
};

export default GetDetailArticle;