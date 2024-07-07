import React from "react";
import ItemGioiTre from "./ItemGioiTre";
import ItemDoiSong from "./ItemDoiSong";
import gioitredoisong from "./cssgioitrevadoisong.css"
const young_data = [
    {
        image:"https://images2.thanhnien.vn/zoom/300_188/528068263637045248/2024/7/6/14a1-1720271759729229230191-0-0-946-1514-crop-17202726744482006695067.jpeg",
        title: "Mang sức trẻ 'Ba sẵn sàng' đến với vùng khó khăn",
        description: "Mang sức trẻ 'Ba sẵn sàng' đến với vùng khó khăn"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/6/img5166-17202626219231843036239-105-1568-4000-5463-crop-17202626778011365089324.jpg",
        title:"Người trẻ phải tiên phong trong cuộc cách mạng 4.0",
        description:"Người trẻ phải tiên phong trong cuộc cách mạng 4.0"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/6/3c882f497e7cdc22856d-17202467396731387561168-0-887-1605-2492-crop-1720247959416454502425.jpg",
        title:"Lan tỏa nhiều câu chuyện vấn đề hay đến người trẻ",
        description:"Lan tỏa nhiều câu chuyện vấn đề hay đến người trẻ"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/6/base64-17202519114151596797116-0-436-805-1241-crop-172026113629364442796.jpeg",
        title:"Tranh tài đầy hấp dẫn tại một hội thi...",
        description:"Tranh tài đầy hấp dẫn tại một hội thi..."
    }
]
const life_data = [
    {
        image:"https://images2.thanhnien.vn/zoom/300_188/528068263637045248/2024/7/6/edit-edit-anh-man-hinh-2024-07-06-luc-123751-17202521115011197696291-0-80-381-690-crop-1720252131228718293050.png",
        title:"Đã tìm thấy người đàn ông biệt tích 3 tuần ở TP.HCM",
        description:"Đã tìm thấy người đàn ông biệt tích 3 tuần ở TP.HCM"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/6/ce7d1ba7-e8fc-4107-be0f-bd359a80e6cd-1720263113452997171279-200-245-1102-1147-crop-1720263323926777368051.jpeg",
        title:"CSGT TP.HCM mở đường giúp ô tô chở trẻ sơ sinh đi cấp cứu",
        description:"CSGT TP.HCM mở đường giúp ô tô chở trẻ sơ sinh đi cấp cứu"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/6/anh-man-hinh-2024-07-06-luc-163203-1720258359500247743272-84-0-790-1130-crop-1720258447961898873137.png",
        title:"Phát hiện bộ hài cốt dưới ống cống khi thi công dự án hơn 8.000 tỉ đồng",
        description:"Phát hiện bộ hài cốt dưới ống cống khi thi công dự án hơn 8.000 tỉ đồng"
    },
    {
        image:"https://images2.thanhnien.vn/zoom/84_84/528068263637045248/2024/7/4/kien-truc-su-172010804567896949438-0-547-1790-2337-crop-1720108080436811805876.jpg",
        title:"Phòng chống cháy nổ ở chung cư: Kiến trúc sư chỉ cách an toàn từ gian bếp",
        description:"Phòng chống cháy nổ ở chung cư: Kiến trúc sư chỉ cách an toàn từ gian bếp"
    }
]

const ListGioiTreVaDoiSong = () => {
    return (
        <div className="young_life_container">
            <div className="youngContainer">
                <h2>Giới Trẻ</h2>
                <div className="youngList">
                    {young_data.map((young, index)=>(
                        <ItemGioiTre
                            key={index}
                            image={young.image}
                            title={young.title}
                            description={young.description}
                        />
                    ))}
                </div>
            </div>
            <div className="lifeContainer">
                <h2>Đời sống</h2>
                <div className="lifeList">
                    {life_data.map((life, index)=> (
                        <ItemDoiSong
                            key={index}
                            image={life.image}
                            title={life.title}
                            description={life.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ListGioiTreVaDoiSong;