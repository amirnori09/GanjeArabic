import React from "react";

function MegaHeader() {
  return (
    <div className="w-full flex justify-center items-center bg-hero-bg bg-cover p-4 min-h-40">
      <div className="text-center max-w-2xl m-auto lg:py-24">
        <h1 className="text-neutral-200 text-1xl z-30 lg:text-5xl">
          وفي{" "}
          <small className="text-yellow_custom text-2xl lg:text-6xl">
            أسرع وقت
          </small>{" "}
          ممكن اعثر على{" "}
          <small className="text-yellow_custom text-2xl lg:text-6xl">
            أفضل المنازل
          </small>{" "}
          في إيران بسهولة وفي أسرع وقت
        </h1>
      </div>
    </div>
  );
}

export default MegaHeader;
