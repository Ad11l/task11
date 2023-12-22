import React from 'react'
import { TextField } from '@mui/material'

const styles = {
  someTextField: {
    minHeight: 420,
  },
  someOtherTextField: {
    minHeight: 120,
  },
}

export const Secondary = (props) => {
  const { sx, InputLabelProps, ...otherprops } = props

  return (
    <TextField
      {...otherprops}
      InputLabelProps={{
        style: {
          color: '#737678', 
        },
        ...InputLabelProps,
      }}
        sx={{
          "&:hover": {},
          '& .MuiOutlinedInput-root': {
      
      '&.Mui-focused fieldset': {
        borderColor: '#37474F',
        color:'#737678'
        
      },
    },
            ...sx,
        }}
    />
  )
}

export default Secondary
