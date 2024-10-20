import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleNews = ({ news }) => {
  return (
    <div className="sm:w-[270px] w-full mb-5 sm:mb-0 sm:h-[440px] border border-gray-200 p-2 overflow-hidden  mt-5 sm:m-0">
      <img
        width={270}
        height={150}
        className="w-full sm:h-[150px] h-[200px]"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="font-bold text-xl  cursor-pointer">
          {news?.title?.slice(0, 100)}
        </h1>
        <p className="text-lg">
          <div
            className={`mt-5 text-sm sm:text-lg `}
            dangerouslySetInnerHTML={{
              __html: news?.description?.slice(0, 170),
            }}
          ></div>
          <button>...Read More</button>
        </p>
      </Link>
    </div>
  );
};

export default SingleNews;
