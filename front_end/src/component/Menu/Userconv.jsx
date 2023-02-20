import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { setCoversation } from "../../service/api";
import { AccountContext } from "../context/AccountProvider";

const Component = styled(Box)`
  display: flex;
  align-items: center;
  height: 45px;
  cursor: pointer;
  padding: 13px 0;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 15px",
});

const Userconv = ({ data }) => {
  const { setPerson, account } = useContext(AccountContext);
  // console.log("userc",data)
  const getuser = async () => {
    setPerson(data);
    await setCoversation({ senderId: account.sub, receverId: data.sub });
  };
  return (
    <Component onClick={getuser}>
      <Box>
        <Image src={data.picture} alt="" />
      </Box>
      <Box>
        <Box>
          <Typography>{data.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Userconv;
