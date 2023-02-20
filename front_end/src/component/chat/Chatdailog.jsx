import { Dialog, Box, styled } from "@mui/material";

import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import Menu from "../Menu/Menu";
import ChatBox from "./ChatBox";
import LiveChat from "./LiveChat";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponenet = styled(Box)`
  min-width: 380px;
`;
const RightComponent = styled(Box)`
  width: 71%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgb(0, 0, 0, 0.14);
`;

const dailogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};
const Chatdailog = () => {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dailogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponenet>
          <Menu />
        </LeftComponenet>
        <RightComponent>
          {/* <LiveChat /> */}
          {/* <------if object length is empty then empty oter wise chat------------------------> */}
          {Object.keys(person).length ? <ChatBox /> : <LiveChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default Chatdailog;
