import { Box, Typography,styled } from '@mui/material'
import React from 'react'


const Component=styled(Box)`
display:flex;
height:45px;
cursor:pointer;
padding:13px 0;


`
const Image=styled("img")({
    width:50,
    height:50,
    borderRadius:"50%",
    padding:"0 15px"
})


const Userconv = ({data}) => {
   // console.log("userc",data)
  return (
    <Component>
        <Box>
            <Image  src={data.picture } alt=""/>

        </Box>
        <Box>
            <Box>
                <Typography>{data.name}</Typography>
            </Box>
            
            </Box>
      
    </Component>
  )
}

export default Userconv
