import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& a': {
        display: 'inline-block',
        padding: '15px 16px',
        fontSize: '20px',
        textDecoration: 'none',
        color: '#000',
        fontFamily: 'sans-serif',
      },
      '& .bk--logo': {
        fontWeight: '800',
      }
    }}>
    <NavLink className="bk--logo" to={`/`}>LOGO</NavLink>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/contact">Contact us</NavLink>
      <NavLink to="/help">Help</NavLink>
    </div>
    </Box>
  )
}

export default Header
