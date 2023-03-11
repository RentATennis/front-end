export interface iShopContextProps {
  children: React.ReactNode;
}

export interface iShopContext {
  getAllProducts: () => Promise<void>;
  productList: iProduct[];
  verifyDevolution: (date: number) => string;
  userProducts?: iProduct[];
  rentAProduct: (id: number) => void;
  dynamicModal: boolean;
  setDynamicModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentProduct?: iProduct;
  handleClick: (id: number) => void;
  /* setProductList:; */
}

export interface iProduct {
  brand: string;
  category: string;
  color: string;
  dayEnd: string;
  dayStart: string;
  genre: string;
  id: number;
  img: string;
  isRented: boolean;
  name: string;
  price: number;
  size: number[];
}
