import React, { useEffect, useState } from "react";
//icon

import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { Box, InputBase, styled } from "@mui/material";
import { fileUplode } from "../../service/api";

//css
const Caintaner = styled(Box)`
  display: flex;
  height: 40px;
  background: #f0f2f5;
  width: 100%;
  padding: 0 15px;
  align-items: center;
  & > * {
    margin: 5px;
    color: #687780;
  }
`;
const SInputBox = styled(Box)`
  background-color: #ffffff;
  border-radius: 10px;
  width: 85%;
  
`;
const SearchBox = styled(InputBase)`
  width: 100%;
  padding: 15px;
  height: 10px;
  padding-left: 25px;
`;
const ClipIcon = styled(AttachFileOutlinedIcon)`
  transform: rotate(40deg);
`;
const ChatFooter = ({ SendText, setValue, value,setFile, file,setImage }) => {

  useEffect(()=>{
    const setImagedata=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let res=await fileUplode(data);
        setImage(res.data)// give image link and set here

      }
    }
    setImagedata()

  },[file])

  //
  const onFilexhange=(e)=>{
    //console.log(e)
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);

  }
  return (
    <Caintaner>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input type="file" style={{ display: "none" }} id="fileInput" onChange={onFilexhange} />
      <SInputBox>
        <SearchBox
          placeholder="type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => SendText(e)}
          value={value}
        />
      </SInputBox>
      <MicIcon />
    </Caintaner>
  );
};

export default ChatFooter;
