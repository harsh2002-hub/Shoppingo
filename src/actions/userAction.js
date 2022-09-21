import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    // UPDATE_PROFILE_REQUEST,
    // UPDATE_PROFILE_SUCCESS,
    // UPDATE_PROFILE_FAIL,
    // UPDATE_PASSWORD_REQUEST,
    // UPDATE_PASSWORD_SUCCESS,
    // UPDATE_PASSWORD_FAIL,
    // FORGOT_PASSWORD_REQUEST,
    // FORGOT_PASSWORD_SUCCESS,
    // FORGOT_PASSWORD_FAIL,
    // RESET_PASSWORD_REQUEST,
    // RESET_PASSWORD_SUCCESS,
    // RESET_PASSWORD_FAIL,
    // ALL_USERS_REQUEST,
    // ALL_USERS_SUCCESS,
    // ALL_USERS_FAIL,
    // DELETE_USER_REQUEST,
    // DELETE_USER_SUCCESS,
    // DELETE_USER_FAIL,
    // UPDATE_USER_REQUEST,
    // UPDATE_USER_SUCCESS,
    // UPDATE_USER_FAIL,
    // USER_DETAILS_REQUEST,
    // USER_DETAILS_SUCCESS,
    // USER_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  import axios from "axios";
  // const token = sessionStorage.getItem('token');
  // Login
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
       const token="token";
      const config = { headers: { "Content-Type": "application/json"}, "withCredentials": true };
      const { data } = await axios.post(
        // "http://localhost:4000/api/v1/login"  -- main,
         "https://shoppingo-backend-harsh.herokuapp.com/api/v1/login",
        // "https://serverofecommercer.herokuapp.com/api/v1/login",
        { email, password },
        config,
        {withCredentials: true}
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };


  // Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data"},"withCredentials": true  };
  
      // const { data } = await axios.post(`http://localhost:4000/api/v1/register`, userData, config);
      const { data } = await axios.post(`https://shoppingo-backend-harsh.herokuapp.com/api/v1/register`, userData, config);
      //  const {data} =await axios.post("https://serverofecommercer.herokuapp.com/api/v1/registerUser",userData,config);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.message,
      });
    }
  };

  // Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    // const { data } = await axios.get("http://localhost:4000/api/v1/me",{"withCredentials": true});
    const { data } = await axios.get("https://shoppingo-backend-harsh.herokuapp.com/api/v1/me",{"withCredentials": true});
    // const {data}=await axios.get("https://serverofecommercer.herokuapp.com/api/v1/user",{"withCredentials": true});
    console.log(data);
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
};
// Logout User
export const logout = () => async (dispatch) => {
  try {
    // await axios.get("http://localhost:4000/api/v1/logout",{"withCredentials": true});
    await axios.get("https://shoppingo-backend-harsh.herokuapp.com/api/v1/logout",{"withCredentials": true});
    // await axios.get("https://serverofecommercer.herokuapp.com/api/v1/logout",{"withCredentials": true});
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
  }
};

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };