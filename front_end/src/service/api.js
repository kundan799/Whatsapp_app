import axios from "axios";

const url = "http://localhost:8500";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log("Error while adding API", err.message);
  }
};

// get
export const getUser = async () => {
  try {
    let res = await axios.get(`${url}/users`);
    //console.log(res);
    return res.data;
  } catch (err) {
    console.log("get error when call getuserApi ", err.message);
  }
};
