import React from "react";

function Wrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default Wrapper;
