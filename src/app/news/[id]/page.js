"use client"
import { newsData } from "@/services/service";
import Image from "next/image";
import { useParams } from "next/navigation";


const NewsDetails = () => {
    const {id} = useParams();
    const data = newsData.map((item)=>item);
    const filter = data.find((items)=>items.id == id);

    return (
        <div className="w-[1320px] mx-auto">
            <div className="text-center w-[984px] mx-auto">
                <h1 className="text-[66px] font-semibold">{filter?.title}</h1>
                <p className="text-[#636363] text-3xl mt-[30px]">{filter?.date}</p>
            </div>
            <div className="mt-[70px]">
                <Image src={filter?.image} width={1320} height={521} alt="" className="h-[521px] w-full"/>
            </div>
        </div>
    );
};

export default NewsDetails;