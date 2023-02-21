import { Box ,styled} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getCoversation } from '../../service/api'
import { AccountContext } from '../context/AccountProvider'
import ChatHeader from './ChatHeader'
import Message from './Message'



const ChatBox = () => {
  const { person ,account} = useContext(AccountContext);
  const [converation,setConversation]=useState({})

  useEffect(()=>{
    const getConversationUser=async()=>{
     let data= await getCoversation({senderId:account.sub,receverId:person.sub});
     setConversation(data)
    }
    getConversationUser()

  },[person.sub])
  return (
    <Box>
      <ChatHeader person={person}/>
      <Message person={person} converation={converation}/>
    
    </Box>
  )
}

export default ChatBox
