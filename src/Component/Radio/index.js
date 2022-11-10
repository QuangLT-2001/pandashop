import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
const RadioButton = ({value, onChange, label}) => {
     return(
          <>
               <FormControlLabel
               value={value}
               control={<Radio />}
               label={label}
               onChange={onChange}
               />

          </>
     )
}
export default RadioButton;