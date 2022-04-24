export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });

  export const logOut=()=>({
    type:"LOGOUT",
  })

//UPDATE_USER
  export const USER_UPDATE_REQUEST ='USER_UPDATE_REQUEST'
  export const USER_UPDATE_SUCCESS ='USER_UPDATE_SUCCESS'
  export const USER_UPDATE_FAIL ='USER_UPDATE_ FAIL'
  export const USER_UPDATE_RESET ='USER_UPDATE_ RESET'