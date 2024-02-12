import CardWideAds from "@/app/common/CardWideAds";
import React from "react";

function ContentEstate() {
  return (
    <div className="rounded-md w-full p-2">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <CardWideAds />
        <CardWideAds />
        <CardWideAds />
        <CardWideAds />
      </div>
    </div>
  );
}

export default ContentEstate;
