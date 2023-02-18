import axios from "axios";

const url = "";

export const addUser = async (data) => {
  try {
    await axios.post(url, data);
  } catch (err) {
    console.log("Error while adding API", err.message);
  }
};
