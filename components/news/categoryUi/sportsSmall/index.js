import Image from "next/image";
import Link from "next/link";
import React from "react";

const SportsSmall = ({ news }) => {
  return (
    <div className="sm:w-[350px] w-full sm:h-[150px] border flex justify-between items-center p-2">
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-lg sm:w-[170px]  cursor-pointer">
          {news?.title?.slice(0, 60)}
        </h1>
      </Link>
      <img
        width={150}
        height={130}
        className="sm:w-[150px]  h-[130px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
    </div>
  );
};

export default SportsSmall;
