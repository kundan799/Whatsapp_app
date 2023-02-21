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

// conversation
export const setCoversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (err) {
    console.log("get error when call setconversation ", err.message);
  }
};

//getCoversation

export const getCoversation = async (data) => {
  try {
   let res= await axios.post(`${url}/conversation/get`, data);
   return res.data;
  } catch (err) {
    console.log("get error when call getconversation ", err.message);
  }
};


// message post 
export const UserMeaasge=async(data)=>{
  try{
    await axios.post(`${url}/message/add`,data)

  }catch(err){
    console.log("get error when call UserMeaasge ", err.message);
  }

}

// get message

export const getMssage=async(id)=>{
  try{
    let res=await axios.get(`${url}/message/get/${id}`);
    return res.data;
  }catch(err){
    console.log("get error when call getMeaasge ", err.message);

  }
}