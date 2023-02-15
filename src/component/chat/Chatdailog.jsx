import { Dialog, Box ,styled} from "@mui/material";

import React from "react";
import Menu from "../Menu/Menu";
import LiveChat from "./LiveChat";


const Component =styled(Box)`
display:flex;

`
const LeftComponenet=styled(Box)`
Width:25%;
min-width:20%;

`
const RightComponent=styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left: 1px solid rgb(0,0,0,0.14)
`

const dailogStyle = {
  height: "95%",
  width: "100%",
  margin: "20px",
  borderRadius: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};
const Chatdailog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dailogStyle }} hideBackdrop={true} maxWidth={"md"}>
      <Component>
        <LeftComponenet>
          <Menu/>
        </LeftComponenet>
        <RightComponent>
          <LiveChat />
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default Chatdailog;
