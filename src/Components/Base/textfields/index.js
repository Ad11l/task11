import React, { useState } from 'react'; import { Box, MenuItem, Select } from "@mui/material";
import { Secondary } from "./Fields";
import item from '../../../item.json'
function Textfields() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ mx: 2, mb:30, mt:10, display: "flex", flexDirection: "column" }}>
      <h1>TEXT FIELDS</h1>
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
          label="Values select"
          sx={{
            width: '323px',
          }}
        >
          
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