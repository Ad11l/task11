// Secondary.js
import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';


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
    const { children, variant, color, sx, Disabled, size,} = props;

    return (
        <Box>
            <IconButton
    
                variant={variant}
                color={color}
                Disabled={Disabled}
                size={size}
                sx={sx}>
                <AddCircleIcon />
                {children}

            </IconButton>
            <Typography variant={variant}
            >hello</Typography>
        </Box>
    );
};
