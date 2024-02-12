import Link from "next/link";
import React from "react";

function TitleSesction({ title, link }) {
  return (
    <div className="my-6 flex justify-between items-center">
      <p className="text-[19px] font-extrabold md:text-[28px]">{title}</p>
      {!!link && (
        <Link
          href={link}
          className="text-primary_custom hover:text-primary_custom/90"
        >
          مشاهده همه
        </Link>
      )}
    </div>
  );
}

export default TitleSesction;
