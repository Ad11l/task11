import React, { useState } from 'react'; import { Box, TextField, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { Secondary } from "./Fields";
import item from '../../item.json'
function Textfields() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ mx: 2, mt: "10px", display: "flex", flexDirection: "column" }}>
      <h1>TEXT FIELD</h1>
      <Box>
        <Secondary
          label="Label"
          //  placeholder='Name'
          required
          // helperText='Helper text'
          // disabled
          // error
          sx={{
            marginTop: "20px",
            width: '300px',
            height: '100px',
          }}
        // InputProps={{
        //   startAdornment: (
        //     <FormControlLabel
        //       control={<Checkbox />}
        //     />
        //   ),
        // }}
        />
      </Box>
      <Box mt='20px'>
        <Secondary
          rows={4}
          multiline
          placeholder='Enter text'
          sx={{
            width: '316px',
          }}
        />

      </Box>
      <Box mt='20px'>
        <Secondary
          select
          placeholder="Value"
          value={selectedValue}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{
            width: '323px',
          }}
        >
          <MenuItem disabled selected ="true">
            Value
          </MenuItem>
          {item.values.map((value, valueIndex) => (
            <MenuItem key={valueIndex}>{Object.values(value)[0]}
            </MenuItem>
          ))}
        </Secondary>
      </Box>


    </Box>
  );
}

export default Textfields;