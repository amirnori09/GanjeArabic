import React from "react";

function DescPage({ title, text }) {
  return (
    <div className="p-4 bg-white_custom space-y-2 my-2 lg:rounded-md">
      <h1 className="text-xl lg:text-2xl font-bold"> {title} </h1>
      <p className="text-[10px] lg:text-base">{text}</p>
    </div>
  );
}

export default DescPage;
