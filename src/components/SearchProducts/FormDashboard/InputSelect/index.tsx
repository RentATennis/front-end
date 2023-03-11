import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ShopContext } from "../../../../contexts/ShopContext/ShopContext"

const InputSelect = () => {
  const {
    brands, 
    setBrands,
    brandSelect, 
    setBrandSelect,
    productList
  } = React.useContext(ShopContext)
  
  
  React.useEffect(() => {
    const getBrandsProducts = () => {
      const allProducts = productList
      const arrayBrands: string[] = allProducts.map(product => product.brand)  
      const brandFiltered = Array.from(new Set(arrayBrands))
      setBrands(brandFiltered)

    };
    getBrandsProducts()

  },[productList])



  const handleChange = (event: SelectChangeEvent) => {
    setBrandSelect(event.target.value as string);
  
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brandSelect}
          label="Marca"
          onChange={handleChange} 
          >{ 
            brands.map(brand => (
              
              <MenuItem key={brand} value={brand}>{brand}</MenuItem>
              
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default InputSelect
