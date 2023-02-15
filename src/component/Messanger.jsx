import React, { useContext } from "react";
import LoginDailog from "./account/LoginDailog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "./context/AccountProvider";
import Chatdailog from "./chat/Chatdailog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00a783;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a783;
  box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
         <Header>
            <Toolbar></Toolbar>
          </Header>
           <Chatdailog />
        </>
     
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDailog />
        </>
      )}
    </Component>
  );
};

export default Messanger;
