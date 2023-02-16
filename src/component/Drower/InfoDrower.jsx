import { Box, Drawer, Typography, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import Profile from "./Profile";
const drowerstyle = {
  left: 20,
  top: 15,
  height: "95%",
  width: "29%",
  boxShadow: "none",
};

//
const Header = styled(Box)`
  background: #008069;
  height: 108px;
  color: white;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 10px;
    font-weight: 600;
  }
`;
//
const Component = styled(Box)`
  background: #f0f2f5;
  height: 85%;
`;
const InfoDrower = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      // anchor={anchor}
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drowerstyle }}
      style={{ zIndex: 1500 }}
      hideBackdrop={true}
    >
      <Header>
        <ArrowBackIcon onClick={handleClose} />
        <Typography>Profile</Typography>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrower;
