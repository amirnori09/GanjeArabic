"use client";
import React, { useState } from "react";
import { IconFilter } from "@tabler/icons-react";
import BottomSheetModal from "@/app/common/BottomSheetModal";
import ContentFilter from "./ContentFilter";

function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white_custom w-full p-4 lg:rounded-md lg:hidden">
        <div
          className="flex justify-start items-center gap-x-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <IconFilter />
          <small>فیلترها</small>
        </div>
        <div className="flex justify-end items-center">
          <select className="select select-bordered select-xs w-full max-w-xs">
            <option disabled selected>
              ترتيب حسب
            </option>
            <option>الأحدث</option>
            <option>الاكبر</option>
          </select>
        </div>
      </div>
      <BottomSheetModal open={open} setOpen={setOpen}>
        <ContentFilter setOpen={setOpen} />
      </BottomSheetModal>
    </>
  );
}

export default Filter;
