import { Spin } from "antd";
import React from "react";

function Loading({ ...rest }) {
  return <Spin spinning {...rest} />;
}

export default Loading;
