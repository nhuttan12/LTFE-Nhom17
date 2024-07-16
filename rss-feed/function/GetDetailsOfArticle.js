/* Type result
{
 author:"Name"
 category:"Category of article"
 title:"Title of Article"
 content:"The paragrah in HTML"
 date:"The Date create"
} */
 import fetch from 'node-fetch';
 import { JSDOM } from 'jsdom';
 
 const GetDetailArticle = async (url) => {
   try {
     const response = await fetch(url);
     const html = await response.text();
 
     // Parse HTML content using jsdom
     const dom = new JSDOM(html);
     const doc = dom.window.document;
 
     // Find the specific element .detail-content.afcbc-body
     const element = doc.querySelector('.detail-content.afcbc-body');
 
     // Remove all script tags and comments inside the element
     if (element) {
       // Remove script tags
       const scripts = element.querySelectorAll('script');
       scripts.forEach(script => script.remove());
 
       // Remove comments
       const removeComments = (node) => {
         for (let child = node.firstChild; child !== null; child = child.nextSibling) {
           if (child.nodeType === 8) { // Node.COMMENT_NODE
             node.removeChild(child);
           } else if (child.nodeType === 1) { // Node.ELEMENT_NODE
             removeComments(child);
           }
         }
       };
       removeComments(element);
     }
 
     // Find script tag with type application/ld+json for author
     const jsonScripts = doc.querySelectorAll('script[type="application/ld+json"]');
     let authorName = '';
     let category = '';
     for (let script of jsonScripts) {
       const jsonContent = JSON.parse(script.textContent.trim());
 
       // Extract author name
       if (jsonContent['@type'] === 'NewsArticle' && jsonContent.author) {
         authorName = jsonContent.author.name;
       }
 
       // Extract category name from BreadcrumbList
       if (jsonContent['@type'] === 'BreadcrumbList' && jsonContent.itemListElement) {
         const itemList = jsonContent.itemListElement;
         for (let item of itemList) {
           if (item['@type'] === 'ListItem' && item.position === 2 && item.item) {
             category = item.item.name;
             break;
           }
         }
       }
     }
 
     // Find span with data-role="title"
     const titleSpan = doc.querySelector('span[data-role="title"]');
     const title = titleSpan ? titleSpan.textContent.trim() : '';
 
     // Find div with data-role="publishdate"
     const dateDiv = doc.querySelector('div[data-role="publishdate"]');
     const date = dateDiv ? dateDiv.textContent.trim() : '';
 
     // Return result object
     return {
       author: authorName,
       category: category,
       content: element ? element.outerHTML : 'Element not found',
       title: title,
       date: date
     };
   } catch (error) {
     console.error('Error fetching or parsing HTML:', error);
     return null;
   }
 };
 
export default GetDetailArticle;
