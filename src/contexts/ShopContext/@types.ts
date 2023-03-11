export interface iShopContextProps {
  children: React.ReactNode;
}

export interface iShopContext {
  getAllProducts: () => Promise<void>;
  productList: iProduct[];
  category:string; 
  setCategory:React.Dispatch<React.SetStateAction<string>>;
  brandSelect:string;
  setBrandSelect:React.Dispatch<React.SetStateAction<string>>;
  brands: string[];
  setBrands:React.Dispatch<React.SetStateAction<string[]>>;
  valueRadioGender:string; 
  setValueRadioGender:React.Dispatch<React.SetStateAction<string>>;
  colors:string[]; 
  setColors:React.Dispatch<React.SetStateAction<string[]>>;
  valueColor:string;
  setValueColor:React.Dispatch<React.SetStateAction<string>>;
  size:string[]; 
  setSize:React.Dispatch<React.SetStateAction<string[]>>;
  valueSize:string;
  setValueSize:React.Dispatch<React.SetStateAction<string>>;

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
