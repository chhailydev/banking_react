import { Box } from '@mui/material'
import React from 'react'

const CardProduct = ({ product }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'cetner',
      justifyContent: 'center',
      width: '100%',
      gap: '15px',
      flexWrap: 'wrap',
    }}>
      {product?.map((pro, key) => (
        <Box key={key}
          sx={{
            width: '300px',
            borderRadius: '5px',
            padding: '5px',
            boxShadow: '0px 7px 21px #858585'
          }}
        >
          <h1>{pro?.name}</h1>
          <h2>$ {pro?.price}</h2>
          <h3>{pro.quantity}</h3>
        </Box>
      ))}
    </Box>
  )
}

export default CardProduct
