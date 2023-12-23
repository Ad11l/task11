import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";


export const Secondary = (props) => {
    const { children, sx, ...otherprops } = props;
    console.log("size is", props)
    return (
            <Button                
                {...otherprops}
                sx={{
                    padding: '10px 16px',
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: "8px",
                    ...sx
                }}
            >
                {children}
            </Button>
    );
};
export const Iconbutton = (props) => {
    const { children,variant,  ...otherprops} = props;

    return (
        <Box>
            <IconButton
            {...otherprops}    
                >
                <AddCircleIcon />
                {children}
            </IconButton>
            <ThemeProvider theme={theme}>

            <Typography variant={variant}>{children}hello</Typography>
            </ThemeProvider>

        </Box>
    );
};

