import { useRadioGroup } from "@mui/material/RadioGroup"
import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { SelectChangeEvent } from "@mui/material"
import { ShopContext } from "../../../../../contexts/ShopContext/ShopContext"


const InputRadioCategory = () => {
  const { category ,setCategory,filterOptions, setFilterOptions  } = React.useContext(ShopContext)

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setFilterOptions({...filterOptions,category:event.target.value as string});
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Categorias</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        onChange={handleChangeCategory}
      >
        <FormControlLabel value="" control={<Radio />} label="Todos" />
        <FormControlLabel value="Casual" control={<Radio />} label="Casual" />
        <FormControlLabel value="Social" control={<Radio />} label="Social" />
      </RadioGroup>
    </FormControl>
  )
}

export default InputRadioCategory
