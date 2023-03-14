import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ShopContext } from '../../../../../contexts/ShopContext/ShopContext';

const SelectColor = () => {
  
  const { productList,colors, setColors, valueColor, setValueColor,filterOptions, setFilterOptions } = React.useContext(ShopContext)

React.useEffect(() =>{
    const getAllColors = () => {
        const arrayColors = productList.map(product => product.color) 
        const colorsFiltered = Array.from(new Set(arrayColors))
        setColors(colorsFiltered)   
    }
    getAllColors()
},[productList])


const handleChange = (event: SelectChangeEvent) => {
  const colorSelect = event.target.value as string;
  setValueColor(colorSelect);

  if (colorSelect === "") {
    setFilterOptions((prevState) => ({
      ...prevState,
      color: "",
    }));
  } else {
    setFilterOptions((prevState) => ({
      ...prevState,
      color: colorSelect,
    }));
  }
};

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueColor}
          defaultValue=""
          label="Cor"
          onChange={handleChange}
          color="success"
        >
          <MenuItem key="" value= "">Todos</MenuItem>
          {colors.map(color => ( <MenuItem key={color} value={color}>{color}</MenuItem>))}

        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectColor