import { Box ,styled, Typography} from '@mui/material'
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
//
const BoxWrapper=styled(Box)`
background:white;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgb(0,0,0,0.08);
& :first-child {
  font-size: 13px;
  color:#008069;
  font-weight:200;
}
& :last-child {
  margin:14px 0px;
  color:#4A4A4A
}

`//
const DiscripsionBox=styled(Box)`
padding:15px 20px 28px 30px;
font-size:13px;
color:#a79cb3

`
const Profile = () => {
    const { account } = useContext(AccountContext);
  return (
    <>
      <ProfileComponenet>
      <Image src={account.picture} alt="userdp" />

      </ProfileComponenet>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <Box>
      <DiscripsionBox>This is not your username or pin. This name will be visible to your WhatsApp contacts.</DiscripsionBox>
      </Box>
      <BoxWrapper>
      <Typography>About</Typography>
      <Typography> Never Give Up 🙂 🙂</Typography>
      </BoxWrapper>
    </>
  )
}

export default Profile
