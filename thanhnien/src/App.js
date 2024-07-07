// import React, { useState, useEffect } from 'react';
// import Parser from 'rss-parser';
// import {type} from "@testing-library/user-event/dist/type";
//
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
// type
// Props = {}
// const App = ({}: Props) => {
//   const [rssItems, setRssItems] = useState([]);
//   useEffect(() => {
//     const parser = new Parser();
//     parser.parseURL(`${CORS_PROXY}https://www.reddit.com/.rss`, (err, feed) => {
//       if (err) throw err;
//       setRssItems(feed.items);
//     });
//     return (
//         console.log(rssItems)
//     )
//   }, []);
// }
// export default App;
