import React from "react";
import { TextField } from "@mui/material";

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
      <TextField
        {...otherprops}
        sx={{
          "&:hover": {},
          '& .MuiOutlinedInput-root': {
      
      '&.Mui-focused fieldset': {
        borderColor: '#37474F',
        
      },
    },
         ...sx,
        }}
      />
  );
};

export default Secondary;
