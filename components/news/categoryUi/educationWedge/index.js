import Image from "next/image";
import Link from "next/link";
import React from "react";

const EducationWedge = ({ news }) => {
  return (
    <div className="relative sm:w-[600px] w-full sm:h-[440px]">
      <img
        width={600}
        height={440}
        className="w-full h-full border p-2"
        src={news?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
      />
      <Link href={`/news/${news?.permalink}`}>
        <h1 className="text-center text-white text-xl w-full font-bold  absolute bottom-5">
          {news?.title}
        </h1>{" "}
      </Link>
    </div>
  );
};

export default EducationWedge;
