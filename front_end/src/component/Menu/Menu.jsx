import { Box } from '@mui/material'
import React from 'react'
import Convrsation from './Convrsation'
import Header from './Header'
import Search from './Search'

const Menu = () => {
  return (
    <Box>
       <Header/>
       <Search/>
       <Convrsation/>
      
    </Box>
  )
}

export default Menu
