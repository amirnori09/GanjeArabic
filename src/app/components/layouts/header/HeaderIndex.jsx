import React from "react";
import { IconBuilding } from "@tabler/icons-react";
import Link from "next/link";

function HeaderIndex() {
  return (
    <div className="flex justify-between items-center bg-white_custom p-2 w-full">
      <div className="flex justify-start items-center gap-x-4 max-w-7xl m-auto w-full">
        {/* <div className="lg:hidden">
          <IconMenuDeep />
        </div> */}
        <div className="bg-primary_custom p-2 rounded-full flex justify-center items-center">
          <IconBuilding color="white" />
        </div>
        <ul className="flex justify-start items-center gap-x-8 text-[8px] lg:text-[12px]">
          <li>
            <Link href="/" className="hover:text-primary_custom">
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary_custom">
              معلومات عنا
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary_custom">
              اتصل بنا
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderIndex;
