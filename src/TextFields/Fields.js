import React from "react";
import { TextField } from "@mui/material";
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
          '& .MuiOutlinedInput-root': {
      
      '&.Mui-focused fieldset': {
        borderColor: '#37474F',
        
      },
    },
          // "&.Mui-focused": {
          //   borderColor: "#37474F", 
          // },
          ...sx,
        }}
      />
    </ThemeProvider>
  );
};

export default Secondary;
