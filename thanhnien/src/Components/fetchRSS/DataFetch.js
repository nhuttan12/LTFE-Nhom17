import axios from 'axios';

const DataFetch = async (url, payload) => {
  try {
    const res = await axios.post(url, payload);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default DataFetch;
// Đối tượng JS này dùng để Fetch Data từ 1 server và gửi thêm 1 signal