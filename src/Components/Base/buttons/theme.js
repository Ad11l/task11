import { createTheme } from '@mui/material/styles';

const primary = '#E85451';
const secondary = '#37474F';
const success = '#27AE60';
const warning = "#E2B93B";
const error = '#C94444';
const grey1 = '#737678';
const grey2 = '#BBBBBB';
const grey3 = '#F2F2F2';
const white = '#FFFFFF';

const theme = createTheme({
  palette: {    
        primary: {
            main: primary,
            },
        secondary:{
            main: secondary
        },
        success:{
            main:success,
        },
        warning:{
            main:warning,
        },
        error:{
            main:error,
        },
        grey1:{
            main:grey1
        },
        grey2:{
            main:grey2
        },
        grey3:{
            main:grey3
        },
        white:{
            main:white
        }
  },
  typography: {
    variant: {
      h1custom: {
        fontSize: '2.436rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      h0custom: {
        fontSize: '2.1rem',
        fontWeight: 500,
      },
      h1: {
        fontSize: '1.811rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      h2: {
        fontSize: '1.561rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      h3: {
        fontSize: '1.346rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      h4: {
        fontSize: '1.16rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      bodynormal_b: {
        fontSize: '1rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      bodynormal_r: {
        fontSize: '1rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
     bodysall_b: {
        fontSize: '0.862rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      bodysmall_r: {
        fontSize: '0.862rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',
      },
      captions:{
        fontSize: '0.743rem',
        fontWeight: 500,
        fontFamily: 'poppins, sans-serif',

      }
      
    },
  },
});

export default theme;
