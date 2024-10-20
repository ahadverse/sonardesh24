import Image from "next/image";
import Link from "next/link";
import React from "react";

const NationalLeft = ({ news }) => {
  return (
    <div>
      <div className="sm:w-[280px] h-[210px] border border-gray-200 p-1 overflow-hidden">
        <img
          width={280}
          height={150}
          className="w-full h-[120px] sm:h-[150px]"
          src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
        />
        <Link href={`/news/${news?.permalink}`}>
          <h1 className="font-bold text-lg  cursor-pointer">
            {news?.title?.slice(0, 60)}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default NationalLeft;
