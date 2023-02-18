import { Dialog, Box, Typography, ListItem, List, styled } from "@mui/material";
import React, { useContext } from "react";
import { qrCodeImage } from "../../Data/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../../service/api";

const Component = styled(Box)`
  display: flex;
`;
const Caintaner = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;
//
const Qrcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});
const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 16px;
    line-height: 28px;
    color: #747f86;
  }
`;

const dailogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};
const LoginDailog = () => {

  const {setAccount}=useContext(AccountContext)
  const LoginSucess = async (res) => {
    // using jwt decode user details
    const userData=jwt_decode(res.credential);
    //console.log("userData",userData)
    setAccount(userData)
    await addUser(userData)
  };
  const LoginError = (res) => {
    console.log("login failed",res)

  };

  // google outh run on port localhost:3000
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dailogStyle }} hideBackdrop={true}>
        <Component>
          <Caintaner>
            <Title>To use whatsapp on your computer</Title>
            <StyleList>
              <ListItem>1. Open whatsapp on your phone</ListItem>
              <ListItem>
                2. Tap menu setting and open select whatsapp web
              </ListItem>
              <ListItem>3. Tap on Link a Device</ListItem>
              <ListItem>
                4. Point your phone to this screen to capyure the code
              </ListItem>
            </StyleList>
          </Caintaner>
          <Box style={{position:"relative"}}>
            <Qrcode src={qrCodeImage} alt="qr code" />
            <Box style={{position:"absolute" ,top:"50%" ,transform:"translateX(17%)"}}>
            <GoogleLogin onSuccess={LoginSucess} onError={LoginError} />
            </Box>
            
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDailog;
