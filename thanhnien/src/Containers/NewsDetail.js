import React, { useEffect, useState } from "react";
import DataFetch from "../Components/fetchRSS/DataFetch";
import parse from "html-react-parser";

const serverLink = "http://localhost:4000/";

function NewsDetail() {
  // Giao thức fetch mới
  
  // Test Lấy chi tiết article
  
  const [test_data, setTest_data] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const ngaymoidadenSignal = {
                signal: "detailarticle",
                articlepage:
                  "https://thanhnien.vn/dam-vinh-hung-bi-cam-dien-9-thang-185240716132440871.htm",
              };
            const testData = DataFetch(serverLink,ngaymoidadenSignal);
            setTest_data(testData);
        } catch (err) {
            console.log(err);
        }
    }

    fetchData();
  })
  console.log(test_data);

  // Lấy src của bức ảnh trong content
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };

  return (
    <div>
        {test_data!== null && test_data.authorname}
    </div>
  );
}

export default NewsDetail;
