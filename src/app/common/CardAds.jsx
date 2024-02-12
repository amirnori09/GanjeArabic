import React from "react";
import BtnLink from "./BtnLink";

function CardAds() {
  return (
    <div className="card card-compact bg-base-100">
      <figure className="max-h-44">
        <img
          src="https://postimage01.divarcdn.com/static/photo/post/ELTEvlKG5W8_6EDIOCELHw/e703c051-fa69-4c5e-b172-25fbf19cb63b.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="card-title text-[12px] font-bold md:text-[14px] lg:text-[18px]">
          فيلا دوبلكس 300 متر للبيع
        </p>
        <p>
          كود 257 للبيع فيلا دوبلكس في رويان منطقة براند فانوش داخل المدينة مع
          امن 24 ساعة مساحة
        </p>
        <div className="card-actions">
          <BtnLink href="/" text="معلومات اكثر" />
        </div>
      </div>
    </div>
  );
}

export default CardAds;
