import React from "react";
import { iShopContextProps } from "./ShopContext/@types";
import { ShopProvider } from "./ShopContext/ShopContext";

const GlobalProviders = ({ children }: iShopContextProps) => {
  return <ShopProvider>{children}</ShopProvider>;
};

export default GlobalProviders;
