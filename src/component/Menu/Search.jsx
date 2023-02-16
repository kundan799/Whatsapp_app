import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, InputBase,styled } from '@mui/material';

const Component=styled(Box)`
height:45px;
background:#fff;
border-bottom:1px solid #F2F2F2;
display:flex;
align-items:center;
`
            
const Inputfeild=styled(InputBase)`
width:100%;
padding-left:65px;


`
const Icon =styled(Box)`
height:100%;
padding:6px 10px;
position:absolute;
color:#6c7b84;


`
const Wrapper=styled(Box)`
background-Color:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;

`

const Search = () => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchOutlinedIcon fontSize='small'/>

            </Icon>
            <Inputfeild placeholder='Search or start new chat' />
        </Wrapper>
      
    </Component>
  )
}

export default Search
