import Link from "next/link";
import React from "react";

function BtnLink({ className, href, text }) {
  return (
    <Link
      href={href}
      className={`btn bg-primary_custom w-full text-white_custom hover:bg-primary_custom/90 rounded-md ${className}`}
    >
      {text}
    </Link>
  );
}

export default BtnLink;
