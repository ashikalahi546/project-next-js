"use client";
import { useEffect, useState } from "react";
const Posts = () => {
const [items, setItems] = useState([]);
const [itemsToShow, setItemsToShow] = useState(5);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setItems(data.slice(0, itemsToShow)));
}, [itemsToShow]); 

const loadMore = () => {
  const newItemsToShow = itemsToShow + 5;
  setItemsToShow(newItemsToShow);
};
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {items.map((item) => (
          <div className="border p-5" key={item.id}>
            <h1>{item?.title}</h1>
            <h1>{item?.body}</h1>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <button  onClick={loadMore} className="bg-orange-500 px-5 py-2">See More</button>
      </div>
    </div>
  );
};

export default Posts;
