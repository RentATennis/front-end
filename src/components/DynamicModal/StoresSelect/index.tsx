import { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ShopContext } from '../../../contexts/ShopContext/ShopContext'

export default function StoresSelect() {
  const { stores, store, setStore } = useContext(ShopContext)

  const handleChange = (event: SelectChangeEvent) => {
    setStore(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loja</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store}
          label="Loja"
          onChange={handleChange}
          color='success'
        >
          {stores.map(element => {
            return (
              <MenuItem key={element} value={element}>{element}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}