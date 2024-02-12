import Btn from "@/app/common/Btn";
import React from "react";

function SearchBox() {
  return (
    <div className="bg-white_custom space-y-4 w-full p-4 max-w-6xl m-auto rounded-md lg:-mt-10 z-[999]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <select className="select select-bordered w-full bg-neutral-100">
          <option disabled selected>
            اختر مدينتك
          </option>
          <option>مشهد</option>
          <option>شیراز</option>
        </select>
        <select className="select select-bordered w-full bg-neutral-100">
          <option disabled selected>
            التجميع
          </option>
          <option>1,000,000</option>
          <option>2,000,000</option>
        </select>
        <select className="select select-bordered w-full bg-neutral-100">
          <option disabled selected>
            الحد الأقصى للسعر
          </option>
          <option>1,000,000</option>
          <option>2,000,000</option>
        </select>
        <Btn text="جست و جو" />
      </div>
    </div>
  );
}

export default SearchBox;
