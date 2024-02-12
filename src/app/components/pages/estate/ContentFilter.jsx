"use client";
import React from "react";
import { IconX } from "@tabler/icons-react";

function ContentFilter({ setOpen }) {
  return (
    <div className="bg-white_custom p-4 space-y-8">
      <div className="flex justify-between items-center">
        <p className="font-bold">المرشحات</p>
        <div className="flex lg:hidden" onClick={() => setOpen(false)}>
          <IconX />
        </div>
      </div>

      {/* rooms number */}
      <div className="flex flex-col space-y-4">
        <div className="">
          <p> عدد الغرف </p>
          <div className="">
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفتين</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">ثلاث غرف</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">اربع غرف</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">خمسة غرف</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="flex flex-col space-y-4">
        <p>سعر</p>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا 1 میلیارد تومان</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا 4 میلیارد تومان</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا 10 میلیارد تومان</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا 50 میلیارد تومان</span>
          </label>
        </div>
      </div>

      {/* metrics */}
      <div className="flex flex-col space-y-4">
        <p>تمتير</p>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا ۱۰۰ متر</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا ۲۰۰ متر</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا ۴۰۰ متر</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ContentFilter;
