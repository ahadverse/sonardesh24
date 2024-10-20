import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsListWedge = ({ news }) => {
  return (
    <div className="flex justify-between items-center border overflow-hidden mb-5">
      <div className="m-2">
        <img
          width={450}
          height={250}
          className="sm:w-[450px] sm:h-[250px]"
          src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
        />
      </div>
      <div className="sm:w-[550px] sm:h-[250px] mx-5">
        <Link href={`/news/${news?.permalink}`}>
          <h1 className="text-2xl font-bold truncate">
            {news?.title?.slice(0, 30)} {news?.title?.length > 30 ? "..." : ""}
          </h1>
          <h1 className="text-lg hidden sm:block">
            <div
              className={` text-sm sm:text-lg `}
              dangerouslySetInnerHTML={{
                __html: news?.description?.slice(0, 350),
              }}
            ></div>
            {news?.description?.length > 400 ? <b>... বিস্তারিত পড়ুন</b> : ""}
          </h1>
        </Link>
      </div>{" "}
    </div>
  );
};

export default NewsListWedge;
