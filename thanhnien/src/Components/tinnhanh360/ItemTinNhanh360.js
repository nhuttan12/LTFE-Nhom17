import React from "react";
import parse from "html-react-parser";
// stuff là 1 item của mảng trả về trong server
// VD :
// arr = [
//     prop1:
//     {
//       item:{
//        image:
//          "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/tro-xi-nhiet-dien-1a-171921031585163605971.jpg",
//        title:
//          "Chính phủ yêu cầu báo cáo về 3,8 triệu tấn tro xỉ tồn đọng ở trà vinh",
//        description:
//           "Phó thủ tướng Trần Hồng Hà yêu cầu các bên liên quan báo cáo về hàng triệu tấn tro xỉ tại Trà Vinh đang khó tiêu thụ, dù đã được chứng nhận hợp chuẩn, hợp quy làm vật liệu san lấp.",
//        url: "https://thanhnien.vn/9-nhom-doi-tuong-duoc-tang-luong-huu-tro-cap-tu-17-185240628184739934.htm",
//      }
//     },
//     prop2:
//     {
//      item:{
//        image:
//          "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/tro-xi-nhiet-dien-1a-171921031585163605971.jpg",
//         title:
//          "Chính phủ yêu cầu báo cáo về 3,8 triệu tấn tro xỉ tồn đọng ở trà vinh",
//         description:
//          "Phó thủ tướng Trần Hồng Hà yêu cầu các bên liên quan báo cáo về hàng triệu tấn tro xỉ tại Trà Vinh đang khó tiêu thụ, dù đã được chứng nhận hợp chuẩn, hợp quy làm vật liệu san lấp.",
//        url: "https://thanhnien.vn/9-nhom-doi-tuong-duoc-tang-luong-huu-tro-cap-tu-17-185240628184739934.htm",
//       }
//     },
//     prop3:
//     {
//       item:{
//        image:
//          "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/tro-xi-nhiet-dien-1a-171921031585163605971.jpg",
//        title:
//          "Chính phủ yêu cầu báo cáo về 3,8 triệu tấn tro xỉ tồn đọng ở trà vinh",
//        description:
//          "Phó thủ tướng Trần Hồng Hà yêu cầu các bên liên quan báo cáo về hàng triệu tấn tro xỉ tại Trà Vinh đang khó tiêu thụ, dù đã được chứng nhận hợp chuẩn, hợp quy làm vật liệu san lấp.",
//         url: "https://thanhnien.vn/9-nhom-doi-tuong-duoc-tang-luong-huu-tro-cap-tu-17-185240628184739934.htm",
//       }
//     }
// ]
// Một item:{} là 1 stuff
// Một prop:{} là props



const ItemTinNhanh360 = (props) => {
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };
  return (
    <div className="tinnhanh360-item">
      <div className="tinnhanh360-img">
        {parse(extractAnchorTag(props.stuff.content))}
      </div>
      <div className="tinnhanh360-url">
        <a href={parse(props.stuff.link)}>{parse(props.stuff.title)}</a>
      </div>
    </div>
  );
};

export default ItemTinNhanh360;

  

