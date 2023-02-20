import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, InputBase, styled } from "@mui/material";

const Component = styled(Box)`
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Inputfeild = styled(InputBase)`
  width: 100%;
  padding-left: 65px;
`;
const Icon = styled(Box)`
  height: 100%;
  padding: 6px 10px;
  position: absolute;
  color: #6c7b84;
`;
const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`;

const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchOutlinedIcon fontSize="small" />
        </Icon>
        <Inputfeild
          placeholder="Search or start new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
};

export default Search;
