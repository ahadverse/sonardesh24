import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigNews = ({ news }) => {

  return (
    <div className="sm:w-[650px] sm:h-[440px] border border-gray-200 p-1 mt-5 sm:m-0">
      <img
        width={650}
        height={370}
        alt="sonardesh24.com"
        className="w-[430px] sm:w-full sm:h-[370px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold  text-xl mt-2 truncate w-[400px] p-2 sm:w-full  cursor-pointer">
          {news?.title}
        </h1>
      </Link>
    </div>
  );
};

export default BigNews;
