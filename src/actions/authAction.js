//import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_LOADING,
    REGISTER_FAIL,

} from './types';
import client from '../FeathersClient'
import { toast } from "react-toastify";
import swal from 'sweetalert'



export const loadUser = () => async (dispatch, getState) => {
    try {
        const reAuth = await client.reAuthenticate()
        dispatch({ type: USER_LOADED, payload: reAuth })
    }
    catch (error) {
        console.log(error)
    }
}


export const login = (credentials) => dispatch => {
    try {
        dispatch({ type: USER_LOADING });
        client.authenticate(credentials)
            .then((res) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: error
                })
                toast.error(` ${error.message}`);
            })
    }
    catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        })
        toast.error(` ${error.message}`);
    }
}
// // Logout user 
export const logout = () => dispatch => {
    try {
        client.logout()
            .then((err) => {
                dispatch({ type: LOGOUT_SUCCESS, })
            })
            .catch((err) => {
                dispatch({ type: LOGOUT_SUCCESS, })
            })
    }
    catch (error) {
        dispatch({ type: LOGOUT_SUCCESS, })
    }
}


export const register = ({ name, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ name, email, password })

    axios.post('api/users', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch(returnErrors(error.response.data, error.response.status_code, 'REGISTER_FAIL'))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}





// Login Users
export const login = ({ email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({ email, password })

    axios.post('api/auth', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch(returnErrors(error.response.data, error.response.status_code, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

