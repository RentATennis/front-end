import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { iShopContext, iShopContextProps } from "./@types"

export const ShopContext = createContext({} as iShopContext)

export const ShopProvider = ({ children }: iShopContextProps) => {
  const [ productList, setProductList ] = useState([])

  const [ brands, setBrands ] = useState<string[]>([])
  const [ brandSelect, setBrandSelect ] = useState<string>("")

  const [ colors, setColors ] = useState<string[]>([])
  const [ valueColor, setValueColor ] = useState<string>("");

  const [ category, setCategory ] = useState("AllCat")
  const [ valueRadioGender, setValueRadioGender ] =useState<string>("AllGender")

  const [ size, setSize ] = useState<string[]>([])
  const [ valueSize, setValueSize ] = useState<string>("")

  const getAllProducts = async () => {
    try {
      const response = await api.get("/products");
      setProductList(response.data);
    } catch (error) {
    console.log(error)
    }
  }
  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <ShopContext.Provider value={
      { 
        getAllProducts, 
        productList,
        category, 
        setCategory, 
        brandSelect, 
        setBrandSelect, 
        brands, 
        setBrands,
        valueRadioGender, 
        setValueRadioGender,
        colors, 
        setColors,
        valueColor, 
        setValueColor,
        size,
        setSize,
        valueSize,
        setValueSize,
      }
    }>
      {children}
    </ShopContext.Provider>
  )
}
