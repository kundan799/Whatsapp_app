import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { setCoversation, getCoversation } from "../../service/api";
import { AccountContext } from "../context/AccountProvider";
import { formetDate } from "../../utils/utils";

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

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

const Userconv = ({ data }) => {
  const { setPerson, account, falg } = useContext(AccountContext);
  //console.log("userc",data);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const Udata = await getCoversation({
        senderId: account.sub,
        receverId: data.sub,
      });
      setMessage({ text: Udata?.message, timestamp: Udata?.updatedAt });
    };
    getConversationDetails();
  }, [falg]);

  const getuser = async () => {
    setPerson(data);
    await setCoversation({ senderId: account.sub, receverId: data.sub });
  };
  return (
    <Component onClick={getuser}>
      <Box>
        {/* <Image src={data.picture} alt="single pic" /> */}
        <Image src={data.picture} alt="pic" />
      </Box>
      <Box style={{width: '100%'}}>
        <Container>
          <Typography>{data.name}</Typography>
          {message?.text && (
            <Timestamp >{formetDate(message?.timestamp)}</Timestamp>
          )}
        </Container>
        <Text>
        
            {message?.text?.includes("localhost") ? "media" : message.text}

        </Text>
      </Box>
    </Component>
  );
};

export default Userconv;
