import React from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const styles = {
  someTextField: {
    minHeight: 420,
  },
  someOtherTextField: {
    minHeight: 120,
  },
};

export const Secondary = (props) => {
  const { sx, ...otherprops } = props;

  return (
    <ThemeProvider theme={theme}>
      <TextField
        {...otherprops}
        sx={{
          "&:hover": {},
          "&:active": {},
          ...sx,
          
        }}
        
      />
    </ThemeProvider>
  );
};
