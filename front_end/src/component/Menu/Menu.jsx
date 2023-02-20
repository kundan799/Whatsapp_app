import { Box } from "@mui/material";
import React, { useState } from "react";
import Convrsation from "./Convrsation";
import Header from "./Header";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <Box>
      <Header />
      <Search setText={setText} />
      <Convrsation text={text} />
    </Box>
  );
};

export default Menu;
