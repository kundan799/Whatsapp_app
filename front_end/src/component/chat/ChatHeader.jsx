import { Box, Typography,styled } from '@mui/material'
import React, { useContext } from 'react';
// icon
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountContext } from '../context/AccountProvider';

const Header =styled(Box)`
    height:44px;
    background:#f0f2f5;
    padding:8px 16px;
    display:flex;
    align-items:center;
`

const Image =styled("img")({
    height:40,
    width:40,
    borderRadius:"50%",
    imageResolution: "300dpi"
})

const Name=styled(Typography)`
margin-left:10px 
`
const Status=styled(Typography)`
margin-left:10px ;
font-size:12px;
color:rgb(0,0,0,0.4)
`
const RightComponent=styled(Box)`
margin-left:auto;
& >svg {
    padding:10px;
    font-size:24px;
}

`

const ChatHeader = ({person}) => {
  const { activeuser} = useContext(AccountContext);
  return (
    <Header>
     <Image src={person.picture} alt="user"/>
     <Box>
        <Name>{person.name}</Name>
        <Status >{activeuser?.find(user=>user.sub===person.sub)?"online":"offline"}</Status>
     </Box>
     <RightComponent>
        <SearchOutlinedIcon/>
        <MoreVertIcon/>
     </RightComponent>
    </Header>
  )
}

export default ChatHeader
