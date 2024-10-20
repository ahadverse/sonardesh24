import React from "react";
import NewsListWedge from "../news/categoryUi/list";
import style from "./list.module.css";
import NationalLeft from "../news/categoryUi/national";
import Smaller from "../news/ui/smaller";
import Link from "next/link";
import Image from "next/image";

const NewsList = ({ news }) => {
  return (
    <div className={style.container}>
      <div className={style.listContainer}>
        {news.map((a) => (
          <NewsListWedge news={a} />
        ))}
      </div>

      <div className="flex flex-col block sm:hidden gap-5">
        {news.map((a) => (
          <div className="sm:w-[300px] h-[123px] flex justify-between items-center border  p-2">
            <img
              width={120}
              height={70}
              className="sm:w-[120px] h-[80px]"
              src={a?.image ?? "https://d18uevuxerz55l.cloudfront.net/logo.png"}
            />
            <Link href={`/news/${a?.permalink}`}>
              <h1 className=" text-md  font-bold ml-1 p-2 sm:p-0 sm:w-[150px]">
                {a?.title?.slice(0, 40)}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <div className="w-[350px] bg-red-400 ml-5 h-[600px] hidden sm:block">
          <img
            className="h-full"
            src="https://www.jcrew.com/brand_creative/2023/202303-Mar/fac_looks/w_fit_guide_pants_ANIMATING_06.gif"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
