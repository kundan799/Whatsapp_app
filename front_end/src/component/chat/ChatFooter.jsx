import React from 'react';
//icon

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { Box, InputBase,styled } from '@mui/material';


//css
const Caintaner=styled(Box)`
display:flex;
height:40px;
background:#f0f2f5;
width:100%;
padding: 0 15px;
align-items:center;
& > * {
    margin :5px;
    color:#687780;
}

`
const SInputBox=styled(Box)`
background-color:#ffffff;
border-Radius:10px;
width:85%;
`
const SearchBox=styled(InputBase)`
width:100%;
padding:20px;
height:10px;
padding-left:25px;


`
const ClipIcon=styled(AttachFileOutlinedIcon)`
transform:rotate(40deg)
`
const ChatFooter = () => {
  return (
    <Caintaner>
        <EmojiEmotionsOutlinedIcon/>
        <ClipIcon/>
        <SInputBox>
            <SearchBox placeholder='type a message'/>
        </SInputBox>
        <MicIcon/>
      
    </Caintaner>
  )
}

export default ChatFooter
