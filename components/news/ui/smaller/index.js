import Image from "next/image";
import Link from "next/link";
import React from "react";

const Smaller = ({ news }) => {
  return (
    <div className="sm:w-[300px] sm:h-[93px] flex justify-between items-start border  p-2">
      <img
        width={120}
        height={70}
        className="sm:w-[120px] h-[70px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className=" text-md  font-bold ml-1 p-2 sm:p-0 sm:w-[150px]">
          {news?.title?.slice(0, 40)}
        </h1>
      </Link>
    </div>
  );
};

export default Smaller;
