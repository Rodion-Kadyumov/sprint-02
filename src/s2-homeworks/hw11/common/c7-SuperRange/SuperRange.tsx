import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: '#00CC22',
        '& .MuiSlider-thumb': {
          width: 18,
          height: 18,
          border: 1,
          borderColor: '#00CC22',
          background: 'radial-gradient(at center, #00CC22 0%, #00CC22 20%, #fff 20%, #fff 100%)'
        },
      }}
      {...props}
    />
  )
}

export default SuperRange