import { useRadioGroup } from "@mui/material/RadioGroup"
import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

interface iInputProps {
  label: string;
  type: "text" | "email" | "password" | "radio";
}

const InputRadioCategory = () => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Categorias</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="AllCat"
        name="radio-buttons-group"
      >
        <FormControlLabel value="AllCat" control={<Radio />} label="Todos" />
        <FormControlLabel value="Casual" control={<Radio />} label="Casual" />
        <FormControlLabel value="Social" control={<Radio />} label="Social" />
      </RadioGroup>
    </FormControl>
  )
}

export default InputRadioCategory
