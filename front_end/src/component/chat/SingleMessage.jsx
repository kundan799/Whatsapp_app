import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { formetDate } from "../../utils/utils";
import { AccountContext } from "../context/AccountProvider";

const Sender = styled(Box)`
  background: #d9fdd3;
  border-radius: 7px;
  max-width: 60%;
  display: flex;
  padding: 7px;
  width: fit-content;
  margin-left: auto;
  word-break: break-word;
`;
const Resiver = styled(Box)`
  background: #ffffff;
  border-radius: 7px;
  max-width: 60%;
  display: flex;
  padding: 7px;
  width: fit-content;
  word-break: break-word;
`;
const Text = styled(Typography)`
  font-size: 15px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 11px;
  color: #919191;
  word-break: keep-all;
  margin-top: auto;
  margin-top: 6px;
`;

const SingleMessage = ({ el }) => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === el.senderId ? (
        <Sender>
          <Text>{el.text}</Text>
          <Time>{formetDate(el.createdAt)}</Time>
        </Sender>
      ) : (
        <Resiver>
          <Text>{el.text}</Text>
          <Time>{formetDate(el.createdAt)}</Time>
        </Resiver>
      )}
    </>
  );
};

export default SingleMessage;
