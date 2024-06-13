// import React, { useState, useEffect } from 'react';

// const LoadMoreComponent = () => {
//   // Assume fetchedData is the data you fetched and want to display.
//   const fetchedData = [
//     /* Your data here */
//   ];

//   // State to keep track of full data and visible data
//   const [data, setData] = useState([]);
//   const [visibleData, setVisibleData] = useState([]);
//   const [itemsToShow, setItemsToShow] = useState(5); // Number of items to show initially

//   // Load data when component mounts
//   useEffect(() => {
//     setData(fetchedData);
//     setVisibleData(fetchedData.slice(0, itemsToShow));
//   }, []);

//   // Load more items when "Load More" button is clicked
//   const loadMore = () => {
//     const newItemsToShow = itemsToShow + 5;
//     setItemsToShow(newItemsToShow);
//     setVisibleData(data.slice(0, newItemsToShow));
//   };

//   return (
//     <div>
//       <ul>
//         {visibleData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       {visibleData.length < data.length && (
//         <button onClick={loadMore}>Load More</button>
//       )}
//     </div>
//   );
// };

// export default LoadMoreComponent;






































