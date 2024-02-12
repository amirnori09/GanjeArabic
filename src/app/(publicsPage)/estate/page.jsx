import React from "react";

// ! components
import Filter from "@/app/components/pages/estate/Filter";
import DescPage from "@/app/components/pages/estate/DescPage";
import Sidebar from "@/app/components/pages/estate/Sidebar";
import ContentEstate from "@/app/components/pages/estate/ContentEstate";

function page() {
  return (
    <div className="mt-4 max-w-7xl m-auto">
      <Filter />
      <DescPage
        title="لوريم إيبسوم هو ببساطة نص شكلي "
        text='القرن مع إصدار رقائق "ليتراسيت" البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'
      />

      <div className="flex justify-between items-start  gap-x-4">
        <div className="hidden lg:flex lg:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full lg:w-3/4">
          <ContentEstate />
        </div>
      </div>
    </div>
  );
}

export default page;
