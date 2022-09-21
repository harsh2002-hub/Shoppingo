import axios from "axios"
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, CLEAR_ERROR, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_FAIL, LOGOUT_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from "../constants/userConstants"
import FormData from 'form-data';

export const login = (email, password) => {
    const path = "https://serverofecommercer.herokuapp.com/api/v1/login";
    const pathLocal = "http://localhost:4000/api/v1/login";
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST })

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*"
                },
                "withCredentials": true
            };
            const data = await axios.post(path, { email, password }, config)
            const id = data.data.user._id;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.data.user
            })


        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message
            })
        }

    }
}

export const register = ({ name, email, password, avatar }) => {
    const path = "https://serverofecommercer.herokuapp.com/api/v1/registerUser";
    const pathLocal = "http://localhost:4000/api/v1/registerUser";

    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_USER_REQUEST })
            let formData = new FormData();
            formData.set('name', name)
            formData.set('email', email);
            formData.set('password', password);
            formData.set('avatar', avatar);
            
            const config = {
                headers: { "Contetnt-Type": "multipart/form-data" },
                "withCredentials": true
            };
            const data = await axios.post(path, formData, config)
            const id = data.data.user._id;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data.data.user
            })

        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: error.response.data.message
            })
        }

    }
}



export const loadUser = () => {
    const path = "https://serverofecommercer.herokuapp.com/api/v1/user";
    const pathLocal = "http://localhost:4000/api/v1/user";
    return async (dispatch) => {
        try {
            dispatch({
                type: LOAD_USER_REQUEST
            })

            const data = await axios.get(path, { "withCredentials": true });

            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data.data.user
            })
        } catch (error){
            dispatch({
                type: LOAD_USER_FAIL,
                payload: error.response.data.message
            })
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const path = "https://serverofecommercer.herokuapp.com/api/v1/logout";
        const pathLocal = "http://localhost:4000/api/v1/logout";
        try {

            const data = await axios.get(path, { "withCredentials": true })

            dispatch({
                type: LOGOUT_SUCCESS
            })
        }
        catch (error) {
            dispatch({
                type: LOGOUT_FAIL,
                payload: error
            })
        }
    }
}

export const updateProfile = (form) => {
    const path = "https://serverofecommercer.herokuapp.com/api/v1/user";
    const pathLocal = "http://localhost:4000/api/v1/user";
    return async (dispatch) => {
        try {
            dispatch({
                type: UPDATE_PROFILE_REQUEST
            })

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*"

                },
                "withCredentials": true
            };

            const data = await axios.put(path, form, config);
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: data.data
            })

        } catch (error) {
            dispatch({
                type: UPDATE_PROFILE_FAIL,
                payload: error
            })
        }
    }
}

export const resetPassword = (form) => {
    const path = "https://serverofecommercer.herokuapp.com/api/v1/updatePassword";
    const pathLocal = "http://localhost:4000/api/v1/updatePassword";
    return async (dispatch) => {
        try {
            dispatch({
                type: RESET_PASSWORD_REQUEST
            })

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": "*"

                },
                "withCredentials": true
            };

            await axios.post(path ,form,config)

            dispatch({
                type:RESET_PASSWORD_SUCCESS,
            })
        } catch (error) {
              dispatch({
                type:RESET_PASSWORD_FAIL,
                payload:error
              })
        }
    }
}
export const clearError = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_ERROR })
    }
}
