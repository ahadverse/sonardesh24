import Image from "next/image";
import Link from "next/link";
import React from "react";

const LineCategoryWedge = ({ news }) => {
  return (
    <div>
      <div className="sm:w-[380px] sm:h-[420px] border border-gray-200 p-2 overflow-hidden">
        <img
          width={380}
          height={250}
          className="w-full h-[250px]"
          src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
        />
        <Link href={`/news/${news?.permalink}`}>
          <h1 className="font-bold text-xl p-1 cursor-pointer">
            {news?.title.slice(0, 60)}
          </h1>
          <p className="text-lg p-1">
            <div
              className={` text-sm sm:text-lg `}
              dangerouslySetInnerHTML={{
                __html: news?.description?.slice(0, 50),
              }}
            ></div>
            {news?.description?.length > 50 ? (
              <button>...Read More</button>
            ) : (
              ""
            )}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LineCategoryWedge;
