import { Box,styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getMssage, UserMeaasge } from '../../service/api';
import { AccountContext } from '../context/AccountProvider';
import ChatFooter from './ChatFooter';
import SingleMessage from './SingleMessage';

const Wrapper=styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size: 50%;
`
const Component = styled(Box)`
    height: 80vh;
    width:100%;
    overflow-y: scroll;
`;

// 
const Caintaner=styled(Box)`
  padding:1px 65px;

`
const Message = ({converation,person}) => {
  const [value, setValue] = useState("");
  const [message,setMessage]=useState([]);
  const [falg,setFlag]=useState(false)

  const { account } = useContext(AccountContext);

  useEffect(()=>{
    const getMessageDeatils=async()=>{
      let data= await getMssage(converation._id);
      setMessage(data)
    }
    converation._id && getMessageDeatils()

  },[person._id,converation._id,falg])

  const SendText=async(e)=>{
    const code=e.keyCode|| e.which ;
    if(code===13){
      let message={
        senderId:account.sub,
        receverId:person.sub,
        conversationId:converation._id,
        type:"text",
        text:value,
      }
      //console.log(message)
      await UserMeaasge(message);
      setValue("")
      setFlag(prev=>!prev)

    }


  }
  return (
    <Wrapper>
     <Component>
      {
        message && message.map((el)=>(
          <Caintaner>
            <SingleMessage el={el}/>
          </Caintaner>
          

        ))
      }

     </Component>
     <ChatFooter SendText={SendText} setValue={setValue} value={value} />
    </Wrapper>
  )
}

export default Message
