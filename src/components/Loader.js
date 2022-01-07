/** @format */

import React from "react";
import { Spin, Typography } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography.Title style={{ color: "white" }}>
        Please Wait
      </Typography.Title>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
