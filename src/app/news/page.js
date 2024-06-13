"use client";
import Image from "next/image";
import { newsData } from "./../../services/service";
import Link from "next/link";
import { useEffect, useState } from "react";

const News = () => {
    // const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(()=>{
        setVisibleData(newsData.slice(0, itemsToShow));
        // setData(newsData);
    },[])

    
    const loadMore = () => {
        const newItemsToShow = itemsToShow + 5;
        setItemsToShow(newItemsToShow);
        setVisibleData(newsData.slice(0, newItemsToShow));
      };
  return (
    <div className="w-[1440px] mx-auto">
      <div className="bg-[#FCF7EF] text-[#171717] py-[70px] px-[123px] ">
        <div className="text-center">
          <h1 className="text-[90px]  font-semibold pt-[17px]">Our News</h1>
          <p className="text-xl font-medium">
            Get the latest updates and deeper coffee experience from IMAJI
            Coffee
          </p>
        </div>

        <div className="pt-10">
          <Image
            src="/image/Rectangle2.png"
            className="w-full"
            alt=""
            width={1500}
            height={500}
          />
        </div>
        <h3 className="text-3xl font-medium pt-[30px]">
          Collaboration to Develop Coffee and Beverage Industry Expertise in
          Indonesia
        </h3>
        <div className="flex gap-2 text-xl font-medium pt-[10px]">
          <p>4 Min</p>
          <li>August 19,2024</li>
        </div>
      </div>
      <div  className="mt-20 ">
        {visibleData.map((items) => (
   
    <Link  href={`/news/${items.id}`} >
    <div className="border-t  border-[#B8B8B8]  mx-[108px]">
            <div className="flex gap-[60px] items-center mt-5 mb-[50px]">
              <Image src={items?.image} width={261} height={205} />
              <div>
                <h2 className="text-[46px] font-medium">{items?.title}</h2>
                <div className="flex gap-2 pt-4">
                  <p>{items?.time}</p>
                  <li>{items?.date}</li>
                </div>
              </div>
            </div>
          </div>
    </Link>

        ))}
      </div>
      <div className="flex justify-center">
        {visibleData.length < newsData?.length && (
        <button className="text-[#986B24] border-[#986B24] border w-36  h-[52px] text-xl  mt-[30px] mb-5" onClick={loadMore}>Load More</button>
      )}
      </div>
    </div>
  );
};

export default News;
