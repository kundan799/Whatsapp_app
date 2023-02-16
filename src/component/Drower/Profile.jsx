import { Box ,styled} from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'

const ProfileComponenet=styled(Box)`
display:flex;
justify-content:center;

`
const Image=styled("img")({
    width:200,
    height:200,
    borderRadius:"50%",
    padding:"25px  0" 
})
const Profile = () => {
    const { account } = useContext(AccountContext);
  return (
    <>
      <ProfileComponenet>
      <Image src={account.picture} alt="userdp" />

      </ProfileComponenet>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  )
}

export default Profile
