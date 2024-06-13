"use client";
import OtherNews from "@/components/OtherNews";
import { newsData } from "@/services/service";
import Image from "next/image";
import { useParams } from "next/navigation";

const NewsDetails = () => {
  const { id } = useParams();
  const data = newsData.map((item) => item);
  const filter = data.find((items) => items.id == id);

  return (
    <div className="w-[1440px] mx-auto my-10">
      <div className="px-[60px]">
        <div className="text-center w-[984px] mx-auto">
          <h1 className="text-[66px] font-semibold">{filter?.title}</h1>
          <p className="text-[#636363] text-3xl mt-[30px]">{filter?.date}</p>
        </div>
        <div>
          <Image
            src={filter?.image}
            width={1320}
            height={521}
            alt=""
            className="h-[521px] w-full my-[70px]"
          />

          <div className="flex flex-col gap-5">
            <h3 className="text-[22px] leading-[33px]">{filter?.dis}</h3>
            <h3 className="text-[22px] leading-[33px]">{filter?.dis1}</h3>
            <h3 className="text-[22px] leading-[33px]">{filter?.dis2}</h3>
            <h3 className="text-[22px] leading-[33px]">{filter?.dis3}</h3>
            <h3 className="text-[22px] leading-[33px]">{filter?.dis4}</h3>
            <h3 className="text-[22px] leading-[33px]">{filter?.dis5}</h3>
          </div>
        </div>
      </div>

      <div className="bg-[#FCF7EF]  mt-[194px]">
        <div className="px-[60px] pt-[60px] pb-[50px]">
          <h1 className="text-[70px] font-semibold">Other News</h1>
          <div className="border-t-[1.5px] border-[#B8B8B8] my-10"></div>
          <OtherNews/>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
