import React, { useEffect,useState } from "react";
import Item24h from "./Item24h";
import tin24hcss from "./csstin24h.css"
import axios from "axios";
// const data_24h = [
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/tngt-7-7-17203379931331536144881-0-201-1124-2000-crop-17203380029322135637556.jpg",
//         title:"Xe khách giường nằm gặp tai nạn trên cao tốc Vĩnh Hảo - Phan Thiết",
//         description:"Xe khách giường nằm gặp tai nạn trên cao tốc Vĩnh Hảo - Phan Thiết"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/anh-1-cg-17203469787861846008223-0-0-964-1543-crop-1720346982449140444319.jpg",
//         title:"Bình Dương: Tạm giữ hình sự đôi nam nữ cướp giật lấy tiền mua ma túy",
//         description:"Bình Dương: Tạm giữ hình sự đôi nam nữ cướp giật lấy tiền mua ma túy"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/dat-ruong-lua-1720347702574638413364-0-0-397-636-crop-1720347722680770299199.png",
//         title:"Từ ngày 1.8, tặng cho và mua bán đất trồng lúa như thế nào?",
//         description:"Từ ngày 1.8, tặng cho và mua bán đất trồng lúa như thế nào?"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/bidne-1720343811738462168668-4-0-1604-2560-crop-1720344017383612485746.jpg",
//         title:"Ông Biden thu về 38 triệu USD tài trợ mới, nhưng vẫn thua ông Trump",
//         description:"Ông Biden thu về 38 triệu USD tài trợ mới, nhưng vẫn thua ông Trump"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/afp2024070636324nyv2highrestopshotchinaweatherclimate-17203431408241474605373-0-0-1600-2560-crop-17203432368251216234449.jpg",
//         title:"Trung Quốc điều động vệ tinh, máy bay đối phó vỡ đê hồ Động Đình",
//         description:"Trung Quốc điều động vệ tinh, máy bay đối phó vỡ đê hồ Động Đình"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/20240707-lei00776-17203409004571822901241-0-0-1600-2560-crop-17203411068821974822599.jpg",
//         title:"Thí sinh 'tắt nụ cười' vì đề thi yêu cầu so sánh 'Việt Bắc' với 'Tây Tiến'",
//         description:"Thí sinh 'tắt nụ cười' vì đề thi yêu cầu so sánh 'Việt Bắc' với 'Tây Tiến'"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/77-chay-1-1720338845037164569438-0-0-1441-2306-crop-1720339059126634075641.jpg",
//         title:"TP.HCM: Cháy lớn ở bãi chứa pallet gỗ, khu dân cư náo loạn",
//         description:"TP.HCM: Cháy lớn ở bãi chứa pallet gỗ, khu dân cư náo loạn"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/7/img5393-17203389099801539068563-200-0-1200-1600-crop-17203391300481244288748.jpeg",
//         title:"Hơn 30.000 người thế chấp iPhone qua iCloud để vay lãi ‘cắt cổ’",
//         description:"Hơn 30.000 người thế chấp iPhone qua iCloud để vay lãi ‘cắt cổ’"
//     },
// ]

const List24h = () =>{
    const [data_24h, setData_24h] = useState([]);

    console.log(data_24h);

    // const getData_24h = async () => {
    //     try {
    //      const res = await axios.get("http://localhost:4000/");
    //      setData_24h(res.data);
    //  } catch (error) {
    //      console.log(error);
    //   }
    // }

    const getData_24h = async () => {
        try {
         const go = {
            "signal": "tin-24h"
         }
         const res = await axios.post("http://localhost:4000/",go);
         setData_24h(res.data);
     } catch (error) {
         console.log(error);
      }
    }

    useEffect(()=>{
        getData_24h();
    },[])
    return (
        <div className="container-24h">
            <h2>Tin 24h</h2>
            <div className="list24h">
                {data_24h.map((item24h, index)=>(
                    <Item24h
                        key={index}
                        stuff={item24h.item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default List24h;