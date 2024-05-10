import { Box } from '@mui/material'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Box sx={{
        display: 'flex',
        height: '99vh',
        alignItems: 'center',
        justifyContent: 'center',
        '& h1':{
            color: '#000',
            fontSize: '56px',
            fontWeight: '600',
            fontFamily: 'sans-serif',
        }
    }}>
      <h1>Not Found Page 404</h1>
    </Box>
  )
}

export default NotFoundPage
