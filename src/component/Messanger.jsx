import React from "react";
import LoginDailog from "./account/LoginDailog";
import { AppBar, Toolbar,styled,Box } from "@mui/material";

const Component=styled(Box)`
height:100vh;
background:#DCDCDC;
`

const Header=styled(AppBar)`
height:220px;
background-color:#00bfa5;
box-shadow:none;
`
const Messanger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDailog />
    </Component>
  );
};

export default Messanger;
