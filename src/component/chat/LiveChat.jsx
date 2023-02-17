import { Box, Typography, styled, Divider } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../../Data/data.js";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100%;
`;
const Contaner = styled(Box)`
  
  width:100%;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});
const Title=styled(Typography)`
font-size:32px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d;

`

const Subtitle=styled(Typography)`
font-size:14px;
font-family:inherit;
font-weight:400;
color:#41525d;

`
const StyledDivider=styled(Divider)`
margin:20px 0;
opacity:0.4px;


`
const LiveChat = () => {
  return (
    <Component>
      <Contaner>
        <Image src={emptyChatImage} alt="livechat" />
        <Title>WhatsApp Web</Title>
        <Subtitle>
          Send and receive messages without keeping your phone online.
        </Subtitle>
        <Subtitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </Subtitle>

        <StyledDivider />
      </Contaner>
    </Component>
  );
};

export default LiveChat;
