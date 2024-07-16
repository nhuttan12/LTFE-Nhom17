import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetch = (url, payload) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(url, payload);
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default DataFetch;

// Đối tượng JS này dùng để Fetch Data từ 1 server và gửi thêm 1 signal