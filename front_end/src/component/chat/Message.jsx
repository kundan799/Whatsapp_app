import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState,useRef } from "react";
import { getMssage, UserMeaasge } from "../../service/api";
import { AccountContext } from "../context/AccountProvider";
import ChatFooter from "./ChatFooter";
import SingleMessage from "./SingleMessage";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 80vh;
  width: 100%;
  overflow-y: scroll;
`;

//
const Caintaner = styled(Box)`
  padding: 1px 65px;
`;
const Message = ({ converation, person }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [file, setFile] = useState("");
  const [inMessage,setInMessage]=useState(null)
  const [image,setImage]=useState("");
  const scroolBar=useRef();

  const { account,socket,falg,setFlag } = useContext(AccountContext);

  // <------------------------------------------------------------------------------------------------->

  useEffect(()=>{
    socket.current.on("getMessage",data=>{
      setInMessage({
        ...data,
        createdAt:Date.now()
      })
    })

  },[])

    // <------------------------------------------------------------------------------------------------->

  useEffect(() => {
    const getMessageDeatils = async () => {
      let data = await getMssage(converation._id);
      setMessage(data);
    };
    converation._id && getMessageDeatils();
  }, [person._id, converation._id, falg]);

  useEffect(()=>{
    inMessage && converation?.members?.includes(inMessage.senderId)
    && setMessage(prev=>[...prev,inMessage])
  },[inMessage,converation])

  // scrool
  // useEffect(()=>{
  //   scroolBar.current?.scrollIntoView()
  // },[message])

  const SendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message={}
      if(!file){
         message = {
          senderId: account.sub,
          receverId: person.sub,
          conversationId: converation._id,
          type: "text",
          text: value,
        }

      }else{
         message = {
          senderId: account.sub,
          receverId: person.sub,
          conversationId: converation._id,
          type: "file",
          text: image,
        };
      }
    
      //console.log(message)

      socket.current.emit("sendMessage",message)// send message to reail time with the help of socket

      await UserMeaasge(message);
      setValue("");
      setFile("");
    
      setFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {message &&
          message.map((el) => (
            <Caintaner ref={scroolBar}>
              <SingleMessage el={el} />
            </Caintaner>
          ))}
      </Component>
      <ChatFooter
        SendText={SendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Message;
