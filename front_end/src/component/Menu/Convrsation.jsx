import { Box, Divider, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../service/api";
import { AccountContext } from "../context/AccountProvider";
import Userconv from "./Userconv";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;
const DividerComponent = styled(Divider)`
  margin: 0 0 0 70px;
`;

const Convrsation = ({ text }) => {
  const { account,socket, setActiveUser,falg} = useContext(AccountContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await getUser();
      console.log("data",res)

      // search find
      const SearchFilter = res.filter((el) =>
        el.name.toLowerCase().includes(text.toLowerCase())
      );
      setUser(SearchFilter);
    };
    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit("addUser",account);// send user online things data to backend 
    // except user from backend
    socket.current.on("getuser",users=>{
      setActiveUser(users);// active user save here

    })

  },[account])
  // use empty array becouse I want fetch data only one time
  //console.log("data",user)
  return (
    <Component>
      {user?.map(
        (el, i) =>
          // check if user login then ther data not show in conversation page
          el.sub !== account.sub && (
            <>
              <Userconv key={i} data={el} />
              <DividerComponent />
            </>
          )
      )}
    </Component>
  );
};

export default Convrsation;
