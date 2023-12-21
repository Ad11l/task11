
import {  createTheme } from '@mui/material/styles';


const theme = createTheme({
  overrides: {
    MuiButton:{
        containedPrimary:{
            borderRadius:100,
            color:"#fff",
        }	,
      
    },
    MuiInput: {
      root: {
        borderRadius: '4px',
        border: '1px solid #ccc',
        padding: '8px',
      },
      hover: {
        '&:hover': {
          borderColor: 'blue.500',
        },
      },
      focused: {
        '&:focus': {
          borderColor: 'green.500',
        },
      },
    },
  },
  
  palette: {
    // Your palette configurations
  },
});

export default theme;


