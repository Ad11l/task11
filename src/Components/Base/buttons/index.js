import * as React from 'react';
import "../../../App.css";
import { Box } from "@mui/material";
import { Iconbutton } from "./buttons";
import { Secondary } from "./buttons";

function Buttons() {
  return (
      <section style={{ mx: 2, mt: "100px", }}>
        <h1>Primary</h1>
        <Box sx={{ ml:"20px", display: "inlineflex", gap: "20px" }}>

          <Secondary variant="contained" color="secondary" size="small" disableRipple
            sx={{
              height: '40px',
              width: 180,
              "&:active": {
              backgroundColor: "#485A63",},
              "&.Mui-active": {
          backgroundColor:"#485A63"
        }
            }}>
            BUTTON TEXT
            </Secondary>
            

          <h2>Secondary</h2>

          <Secondary variant="outlined" color="secondary"
          sx={{
              height: '40px',
              width: 180,
            }}
            >learn
            </Secondary>

        </Box>

        <Box sx={{ display: "flex", gap: 90 }}>
          <h2>Flat(red)</h2>
          <h2>FLAT(DEFAULT)</h2>
        </Box>

        <Box sx={{ display: "flex", gap: 90 }}>

          <Secondary sx={{
            "&:hover": {
              backgroundColor: "transparent",
              color: "#D63936",
            }
          }}
            variant="text" >FLAT RED</Secondary>

          <Secondary sx={{
            "&:hover": {
              backgroundColor: "transparent",
              color: "#223138",
            }
          }}
            variant="text" color="secondary" disabled>FLAT DEFAULT</Secondary>
        </Box>

        <Box sx={{ display: "flex", gap: 90 }}>
          <h1>Icon</h1>
          <h1>Underline</h1>
        </Box>

        <Box sx={{ display: "flex", gap: 90 }}>

          <Iconbutton color="white" size="large" variant={'h1custom'}
            sx={{
              backgroundColor:"#E85451",
              "&:hover": {
              backgroundColor: "#D63936",}              
            }}
            
            >
          </Iconbutton>

          <Secondary sx={{
            textDecoration: 'underline',
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: 'underline',
              color: "#223138"
            }
          }} variant="text" color="secondary" >
            Underline
            </Secondary>
        </Box>


        <Box sx={{ display: "flex", gap: 40 }}>
          <h5>primary</h5>
          <h5>secondary</h5>
        </Box>


        <Box sx={{ display: "flex", gap: 30 }}>
          <Secondary
            variant="contained"
            color="secondary"
            size="small"
          >
            BUTTON TEXT
          </Secondary>
          <Secondary variant="outlined" color="secondary">
          BUTTON TEXT
          </Secondary>
        </Box>

      </section>
  );
}

export default Buttons;
