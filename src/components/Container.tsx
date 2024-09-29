import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto w-11/12 ">{children}</div>;
};

export default Container;
