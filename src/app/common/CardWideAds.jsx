import Link from "next/link";
import React from "react";


function CardWideAds() {
  return (
    <Link
      href="/"
      className="flex bg-white_custom rounded-md justify-between items-start gap-x-2 p-2 h-40"
    >
      <figure className="rounded-md h-36 w-1/3">
        <img
          src="https://s100.divarcdn.com/static/photo/post/fY9VvcyH_rvGTrGHqArdug/56b705c6-08a5-4219-a5f3-7aca5f1db04d.jpg"
          alt="Movie"
          className="w-40 h-full bg-cover rounded-md"
        />
      </figure>
      <div className="card-body flex flex-col justify-between  items-start h-full p-2 pt-0 w-2/3">
        <div className="">
          <p className="card-title text-[12px] lg:text-[14px]">شقة 230 متر بالمدينة</p>
        </div>
        <div className="flex w-full text-[10px] lg:text-[12px]">
          <div className="flex justify-start items-center">قیمت : ۲۰۰۰۰۰۰۰</div>
          <div className="divider divider-horizontal"></div>
          <div className="flex justify-start items-center">۵ اتاق</div>
          <div className="divider divider-horizontal"></div>
          <div className="flex justify-start items-center">۸۷ متر</div>
        </div>
        <div className="flex justify-between w-full text-[10px] gap-x-4">
          <div className="">
            <p className="">خراسان رضوی - مشهد</p>
          </div>
          <div className="">
            <p>لحظاتی پیش</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardWideAds;
