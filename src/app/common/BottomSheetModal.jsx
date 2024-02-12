"use client";
import React from "react";

import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import ContentFilter from "../components/pages/estate/ContentFilter";

function BottomSheetModal({ children, open, setOpen }) {
  function onDismiss() {
    setOpen(false);
  }

  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      snapPoints={({ minHeight, maxHeight }) => [
        maxHeight / 2,
        maxHeight / 0.6,
      ]}
    >
      {children}
    </BottomSheet>
  );
}

export default BottomSheetModal;
