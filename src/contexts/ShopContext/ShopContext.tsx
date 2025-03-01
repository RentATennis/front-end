import { createContext, useEffect, useMemo, useState } from "react"
import { api } from "../../services/api"
import { iFilterOptions, iProduct, iShopContext, iShopContextProps } from "./@types"

export const ShopContext = createContext({} as iShopContext)

export const ShopProvider = ({ children }: iShopContextProps) => {
  const [filterOptions, setFilterOptions] = useState<iFilterOptions>({
    category:'',
    genre:'',
    brand:'',
    color:''
  })

  const [ brands, setBrands ] = useState<string[]>([])
  const [ brandSelect, setBrandSelect ] = useState<string>("")
  const [ colors, setColors ] = useState<string[]>([])
  const [ valueColor, setValueColor ] = useState<string>("");
  const [ category, setCategory ] = useState("")
  const [ valueRadioGender, setValueRadioGender ] =useState<string>("")
  const [ size, setSize ] = useState<string[]>([])
  const [ valueSize, setValueSize ] = useState<string>("")

  const [ productList, setProductList ] = useState<iProduct[]>([])
  const [ userProducts, setUserProducts ] = useState<iProduct[]>([])
  const [ currentProduct, setCurrentProduct ] = useState<iProduct>()
  const [ dynamicModal, setDynamicModal ] = useState(false)
  const [ contractModal, setContractModal ] = useState(false)

  const [totalRentCost, setTotalRentCost] = useState(0)
  const [stores, setStores] = useState<string[]>([])
  const [store, setStore] = useState('')

  useEffect(() => {
    const storesList = async () => {
      try {
        const response = await api.get('/stores')
        setStores(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    storesList()
  }, [])


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

  const rentAProduct = () => {  
    if(currentProduct !== undefined){
      setUserProducts([...userProducts, currentProduct])
      setContractModal(!contractModal)      
    }
  }

  useEffect(() => {
    if (userProducts.length > 0) {
      localStorage.setItem('@RentATennis: Products', JSON.stringify(userProducts))
    }
  }, [userProducts])

  const handleContractModal = () => {
    setContractModal(!contractModal)
    setDynamicModal(!dynamicModal)
  }

  const handleClick = (name: string) => {
      const newSelectedProduct = productList.find((product) => product.name === name)
      setCurrentProduct(newSelectedProduct)
      setDynamicModal(!dynamicModal)
  }

  const verifyDevolution = (date: number) => {
    if(date < 0){
        return 'Em atraso'
    }else if (date === 0){
        return 'Hoje'
    }else if (date === 1){
        return 'Amanhã'
    }else{
        return `${date} dias`
    }
  }

  const filteredProducts = useMemo(() => {
    return productList.filter((product) => {
    if (filterOptions.category && product.category !== filterOptions.category) {
    return false;
    }
    if (filterOptions.genre && product.genre !== filterOptions.genre) {
    return false;
    }
    if (filterOptions.brand && product.brand !== filterOptions.brand) {
    return false;
    }
    if (filterOptions.color && product.color !== filterOptions.color) {
    return false;
    }
    
    return true;
    });
    }, [filterOptions, productList]);

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
        verifyDevolution, 
        userProducts, 
        rentAProduct, 
        dynamicModal, 
        setDynamicModal,
        contractModal,
        setContractModal, 
        currentProduct,
        setCurrentProduct, 
        handleClick,
        filterOptions, 
        setFilterOptions,
        filteredProducts,
        handleContractModal,
        totalRentCost, 
        setTotalRentCost,
        stores,
        store,
        setStore
      }
    }>
      {children}
    </ShopContext.Provider>
  )
}
