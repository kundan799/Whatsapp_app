import React, { useState } from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem,styled } from '@mui/material';

const MenuOption =styled(MenuItem)`
font-size:14px;
padding:16px 60px  5px 24px;
color:#4A4A4A;

`
const Headermenu = () => {
    const [open ,setOpen]=useState(null)
    
    const handleClose=()=>{
        setOpen(null)
    }

    const handleOpen=(event)=>{
        setOpen(event.currentTarget)
    }

  return (
    <>
       <MoreVertIcon onClick={handleOpen} /> 
       <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
       getContentAncherE1={null}
       anchorOrigin={{
        vertical:"bottom",
        horizontal:"center",

       }}
       transformOrigin={{
        vertical:"top",
        horizontal:"right"
       }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu> 
     
      
    </>
  )
}

export default Headermenu
