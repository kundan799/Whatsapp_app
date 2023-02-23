import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import GetAppIcon from '@mui/icons-material/GetApp';
import { formetDate } from "../../utils/utils";
import { AccountContext } from "../context/AccountProvider";
import {iconPDF} from "../../Data/data"

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
          {el.type === "file" ? (
            <Imagemessage el={el} />
          ) : (
            <TextMessage el={el} />
          )}
        </Sender>
      ) : (
        <Resiver>
           {el.type === "file" ? (
            <Imagemessage el={el} />
          ) : (
            <TextMessage el={el} />
          )}
        </Resiver>
      )}
    </>
  );
};

// image
const Imagemessage = ({ el }) => {
  return (
    <div  style={{ position: 'relative' }}>
      {el?.text?.includes(".pdf") ? (
        <div style={{ display: "flex" }}>
          <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
          <Typography style={{ fontSize: 14 }}>
            {el.text.split("/").pop()}
          </Typography>
        </div>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={el.text}
          alt={el.text}
        />
      )}
      <Time  style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <GetAppIcon
         fontSize='small' 
         style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }} 
        
        />
        {formetDate(el.createdAt)}
      </Time>
    </div>
  );
};

// text

const TextMessage = ({ el }) => {
  return (
    <>
      <Text>{el.text}</Text>
      <Time>{formetDate(el.createdAt)}</Time>
    </>
  );
};

export default SingleMessage;
