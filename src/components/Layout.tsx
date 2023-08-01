import React from "react";
import { St } from "./LayoutStyle";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <St.Layout>{children}</St.Layout>;
};

export default Layout;
