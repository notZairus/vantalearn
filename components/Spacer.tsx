"use client";

import React from "react";

const Spacer = ({ width = 25, height = 1, ...props }) => {
  return (
    <div
      style={{
        height: height * 4,
        width: width * 4,
      }}
      {...props}
    />
  );
};

export default Spacer;
