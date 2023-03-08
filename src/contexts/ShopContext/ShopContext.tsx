import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iShopContext, iShopContextProps } from "./@types";

export const ShopContext = createContext({} as iShopContext);

export const ShopProvider = ({ children }: iShopContextProps) => {
  const [productList, setProductList] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get("/products");
      setProductList(response.data);
    } catch (error) {
      toast.error('Tempo Expirado, tente novamente')
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ getAllProducts, productList }}>
      {children}
    </ShopContext.Provider>
  );
};
