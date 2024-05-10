import { Box } from '@mui/material'
import React from 'react'

const CardUser = ({ users }) => {
  return(
    <Box sx={{
      display: 'flex',
      alignItems: 'cetner',
      justifyContent: 'center',
      width: '100%',
      gap: '15px',
      flexWrap: 'wrap',
    }}>
      {users?.map((user, key) => (
        <Box key={key}
          sx={{
            width: '300px',
            borderRadius: '5px',
            padding: '5px',
            boxShadow: '0px 7px 21px #858585'
          }}
        >
          <h1>{user?.username}</h1>
          <h2>{user?.email}</h2>
        </Box>
      ))}
    </Box>
  )
}

export default CardUser
