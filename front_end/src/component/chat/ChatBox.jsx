import { Box ,styled} from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import ChatHeader from './ChatHeader'
import Message from './Message'



const ChatBox = () => {
  const { person } = useContext(AccountContext);
  return (
    <Box>
      <ChatHeader person={person}/>
      <Message person={person}/>
    
    </Box>
  )
}

export default ChatBox
