// Header.js
import * as React from 'react';
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Secondary } from "./button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: 2, mt: "10px", display: "flex", flexDirection: "column" }}>
      <h1>TEXT FIELD</h1>
        <Box>
          <Secondary
            label="Label"
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
      </Box>
    </ThemeProvider>
  );
}

export default Header;
