import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import ReactDOMServer from 'react-dom/server';

const htmlContent = `
<div class="VCSortableInPreviewMode" type="VideoStream" embed-type="4" data-width="600px" data-height="400px" data-vid="thanhnien.mediacdn.vn/325084952045817856/2024/7/16/16-dam-vinh-hung-dien-tai-my-17211213097311466723335.mp4" data-info="1944edae7e30ad5c0a8934e4933fd1d3" data-autoplay="false" data-removedlogo="false" data-location="" data-displaymode="0" data-thumb="https://thanhnien.mediacdn.vn/325084952045817856/2024/7/16/base64-1721121404449339999255.jpeg" data-contentid="" data-namespace="thanhnien" data-originalid="" videoid="101901009127829504"><div class="VideoCMS_Caption"><p class="" data-placeholder="nhập chú thích" style="text-align: center;">Đàm Vĩnh Hưng sang Mỹ đi hát giữa thông tin bị UBND TP.HCM cấm diễn 9 tháng</p></div></div>
`;

const TestApp = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const videoDiv = divRef.current.querySelector('.VCSortableInPreviewMode');
      if (videoDiv) {
        const videoUrl = videoDiv.getAttribute('data-vid');
        const playerElement = (
          <ReactPlayer url={videoUrl} controls width="600px" height="400px" />
        );
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = ReactDOMServer.renderToString(playerElement);
        videoDiv.innerHTML = tempDiv.innerHTML;
      }
    }
  }, []);

  return (
    <div className='test' ref={divRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default TestApp;
