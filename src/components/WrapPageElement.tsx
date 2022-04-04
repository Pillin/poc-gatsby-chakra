import React from "react";
import Layout from "./Layout";

export const wrapPageElement = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>;
};
