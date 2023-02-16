import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatIcon from "@mui/icons-material/Chat";

import AutorenewIcon from "@mui/icons-material/Autorenew";
import PeopleIcon from "@mui/icons-material/People";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Headermenu from "./Headermenu";
import InfoDrower from "../Drower/InfoDrower";
import { useState } from "react";

const Header = () => {
  const [openDrower ,setOpenDrower]=useState(false)
  const { account } = useContext(AccountContext);

  const Component = styled(Box)`
    height: 44px;
    background: #f0f2f5;
    padding: 8px 16px;
    display: flex;
    align-items: center;
  `;

  const Image = styled("img")({
    height: 40,
    width: 40,
    borderRadius: "50%",
  });

  // icon componenet
  const IconComponent = styled(Box)`
    margin-left: auto;
    & > * {
      margin-left: 2px;
      padding: 8px;
      color: #54656f;
      font-size: 22px;
    }
    & :first-child {
      font-size: 22px;
      margin-right: 8px;
    }
  `;

  // drower
  const handleDrower=()=>{
    setOpenDrower(true)
  }

  return (
    <>
      <Component>
        {account.picture ? (
          <Image src={account.picture} alt="userdp"  onClick={handleDrower}/>
        ) : (
          <Image
            src={
              "https://lh3.googleusercontent.com/a/AEdFTp4L4MkGaZO7LYQ3FQBYwUuHQjZN8-JTL4lhN20p=s96-c"
            }
            alt="userdp"
            onClick={handleDrower}
          />
        )}
        <IconComponent>
          <PeopleIcon />
          <AutorenewIcon />
          <ChatIcon />
          <Headermenu/>
        </IconComponent>
      </Component>
      <InfoDrower open={openDrower} setOpen={setOpenDrower}/>
    </>
  );
};

export default Header;
