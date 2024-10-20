import Image from "next/image";
import Link from "next/link";
import React from "react";

const MiddlePart = ({ news }) => {
  return (
    <div className="sm:w-[460px] sm:h-[450px] border border-gray-200 p-2 overflow-hidden">
      <img
        width={460}
        height={250}
        className="w-full h-[250px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-xl p-1 cursor-pointer">
          {news?.title?.slice(0, 80)}
        </h1>

        <div
          className={`mt-5 text-sm sm:text-lg `}
          dangerouslySetInnerHTML={{
            __html: news?.description?.slice(0, 180),
          }}
        ></div>
        <button>...Read More</button>
      </Link>
    </div>
  );
};

export default MiddlePart;
