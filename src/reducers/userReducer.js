import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, CLEAR_ERROR, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET, UPDATE_PROFILE_SUCCESS, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_REQUEST } from "../constants/userConstants"

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false
            }
        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case REGISTER_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case LOAD_USER_REQUEST:
            return {
                isAuthenticated: false,
                loading: true,
                error: null
            }
        case LOAD_USER_SUCCESS:
            return {
                isAuthenticated: true,
                loading: false,
                error: null,
                user: action.payload
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default:
            return {
                ...state
            }

    }
}

export const userUpdateReducer = (state = {}, action) => {

    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
               loading:true,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                isUpdated:true,
                loading:false,
                user:action.payload
            }
        case UPDATE_PROFILE_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error:null
            }
        case UPDATE_PROFILE_RESET:
            return{
                ...state,
                isUpdated:false
            }
        default:
           return{
            ...state
           }
    }
}


export const updatePassword=(state={} , action)=>{
    
    switch(action.type)
    {
        case RESET_PASSWORD_REQUEST:
            return{
                loading:true,
            }
        case RESET_PASSWORD_SUCCESS:
        return {
            sucess:true,
            loading:false
        }
        case RESET_PASSWORD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return{
            ...state
           }
    }
}
