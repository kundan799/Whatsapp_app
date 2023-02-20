import { Box,styled } from '@mui/material'
import React from 'react'
import ChatFooter from './ChatFooter';

const Wrapper=styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`
const Component = styled(Box)`
    height: 80vh;
    width:100%;
    overflow-y: scroll;
`;
const Message = () => {
  return (
    <Wrapper>
     <Component>

     </Component>
     <ChatFooter />
    </Wrapper>
  )
}

export default Message
