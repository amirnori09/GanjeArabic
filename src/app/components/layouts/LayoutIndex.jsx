import React from "react";

// ! components
import FooterIndex from "./footer/FooterIndex";
import HeaderIndex from "./header/HeaderIndex";

function LayoutIndex({ children }) {
  return (
    <div>
      <HeaderIndex />
      {children}
      <FooterIndex />
    </div>
  );
}

export default LayoutIndex;
