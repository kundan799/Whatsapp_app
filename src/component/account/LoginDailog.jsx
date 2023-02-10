import { Dialog, Box, Typography, ListItem, List,styled } from "@mui/material";
import React from "react";
import {qrCodeImage} from "../../Data/data"

const Component=styled(Box)`
display:flex;
`
const Caintaner=styled(Box)`
padding:56px 0 56px 56px

`
const Title=styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;

`
const Qrcode=styled("img")({
  height:264,
  width:264,
  margin:"50px 0 0 50px"

}
  
)

const dailogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "none",
};
const LoginDailog = () => {
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dailogStyle }}>
        <Component>
          <Caintaner>
            <Title>To use whatsapp on your computer</Title>
            <List>
              <ListItem>1. Open whatsapp on your phone</ListItem>
              <ListItem>2. Tap menu setting and open select whatsapp web</ListItem>
              <ListItem>3. Point your phone to this screen to capyure the code</ListItem>
            </List>
          </Caintaner>
          <Box>
            <Qrcode src={qrCodeImage} alt="qr code"/>
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDailog;
