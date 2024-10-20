import Image from "next/image";
import Link from "next/link";
import React from "react";

const International = ({ news }) => {
  return (
    <div className="relative sm:w-[550px] sm:h-[390px]">
      <img
        width={550}
        height={390}
        className="w-full h-full border p-2"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
          {news?.title}
        </h1>
      </Link>
    </div>
  );
};

export default International;
