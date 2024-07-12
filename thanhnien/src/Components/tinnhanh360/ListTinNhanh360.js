import React, { useEffect,useState } from "react";
import ItemTinNhanh360 from "./ItemTinNhanh360";
import tinnhanh360css from "./csstinnhanh360.css";
import axios from "axios";
// const data_tinnhanh360 = [
//     {
//         image:"https://images2.thanhnien.vn/zoom/192_120/528068263637045248/2024/7/7/giac-ngu-ngon-17203436987161116637310-72-0-1672-2560-crop-1720343738389360275294.jpg",
//         category:"Sức khỏe",
//         description:"Lý do nên chạy bộ mỗi ngày"
//     },
//     {
//         image:"https://images2.thanhnien.vn/thumb_w/192/528068263637045248/2024/7/7/z5610855545493-1b8705a581bc578716122b404d0084f2-1720360541632389873255-1-414-1334-1414-crop-1720360569442772143496.jpg",
//         category:"Bóng đá Việt Nam",
//         description:"Bích Thùy ghi ‘cú poker’ đẳng cấp, Thái Nguyên T&T tiếp tục bám đuổi CLB TP.HCM I"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/192_120/528068263637045248/2024/7/7/edit-jeewonnuthantuongkpopnongbong2-17203352567771647118092-39-0-662-997-crop-1720335266275366246372.jpeg",
//         category:"Đời nghệ sĩ",
//         description:"Sắc vóc nóng bỏng của nữ thần tượng Kpop 9X"
//     },
//     {
//         image:"https://images2.thanhnien.vn/thumb_w/192/528068263637045248/2024/7/5/h4-17201748625531612633336-0-367-778-951-crop-1720175013947474860799.jpg",
//         category:"Gen Z du lịch",
//         description:"Trải nghiệm du lịch tại Triều Tiên"
//     },
//     {
//         image:"https://images2.thanhnien.vn/zoom/192_120/528068263637045248/2024/7/7/1000015085-1720340271003813279988-272-0-932-1056-crop-17203414374931531113549.jpg",
//         category:"Thể thao & Cộng đồng",
//         description:"Chung kết giải cầu lông phong trào thu hút gần 100 tay vợt tham gia"
//     },
//     {
//         image:"https://images2.thanhnien.vn/thumb_w/192/528068263637045248/2024/7/7/2024-07-05t220634z-1739927654-up1ek751p5ils-rtrmadp-3-soccer-euro-por-fra-report-17203439813701542785799-0-225-1579-1409-crop-1720344024189762457892.jpg",
//         category:"Euro 2024",
//         description:"Nếu Pháp vô địch EURO 2024, HLV Deschamps sẽ lập kỷ lục vĩ đại trong lịch sử"
//     },
// ]

const ListTinNhanh360 = () => {
    
    const [data_tinnhanh360, setData_tinnhanh360] = useState([]);

    console.log(data_tinnhanh360);
    const getData_tinhnhanh360 = async () => {
        try {
         const res = await axios.get("http://localhost:4000/");
         setData_tinnhanh360(res.data);
     } catch (error) {
         console.log(error);
      }
    }

    useEffect(()=>{
        getData_tinhnhanh360();
    },[])


    return (
        <div className="tinnhanh360-container">
            <div className="tinnhanh360-title">
                Tin nhanh
                <span>360</span>
            </div>
            <div className="tinnhanh360List">
                {data_tinnhanh360.map((tinnhanh,index)=>(
                    <ItemTinNhanh360
                        key={index}
                        stuff={tinnhanh.item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListTinNhanh360;