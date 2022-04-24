import axios from "axios";
// import{
//   USER_UPDATE_REQUEST,
// } from "./context/AuthActions";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

// update user

// export const userprofileReducer = async (state ={}, action) => {
//   switch (action.type) {
//     case "USER_UPDATE_REQUEST":
//       return { loading: true};
//     case "USER_UPDATE_SUCCESS":
//       return {loading:false,success:true, user:action.payload};
//     case "USER_UPDATE_FAIL":
//       return {loading:false,success:false, error:action.payload};
//       default:
//         return state;
//   }

// }