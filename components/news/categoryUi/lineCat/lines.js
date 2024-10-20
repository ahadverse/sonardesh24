import Image from "next/image";
import Link from "next/link";
import React from "react";

const Lines = ({ news }) => {
  return (
    <div className="sm:w-[380px] h-[130px] border flex justify-between items-center mt-2  p-2">
      <img
        width={150}
        height={120}
        className="w-[150px]  h-[120px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg ml-1 w-[190px]   cursor-pointer">
          {news?.title?.slice(0, 70)}
        </h1>
      </Link>
    </div>
  );
};

export default Lines;
