// //import axios from 'axios';
// import {
//     USER_LOADED,
//     USER_LOADING,
//     LOGOUT_SUCCESS,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     NEW_GRADELEVEL_CREATED,
//     NEW_TEACHER_CREATED,
//     NEW_SUBJECT_CREATED,
//     NEW_STUDENT_CREATED

// } from './types';
// import client from '../FeathersClient'
// import { toast } from "react-toastify";
// import swal from 'sweetalert'



// export const loadUser = () => async (dispatch, getState) => {
//     try {
//         const reAuth = await client.reAuthenticate()
//         dispatch({ type: USER_LOADED, payload: reAuth })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }



// export const newGradeLevel = (newGradeLevel) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: NEW_GRADELEVEL_CREATED, payload: newGradeLevel })
//         swal(` ${newGradeLevel.name} Created Successfully`)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// export const newTeacher = (newTeacher) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: NEW_TEACHER_CREATED, payload: newTeacher })
//         swal(` ${newTeacher.name} Created Successfully`)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// export const newSubject = (newSubject) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: NEW_SUBJECT_CREATED, payload: newSubject })
//         swal(` ${newSubject.name} Created Successfully`)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// export const newStudent = (newStudent) => async (dispatch, getState) => {
//     try {
//         dispatch({ type: NEW_STUDENT_CREATED, payload: newStudent })
//         swal(` ${newStudent.name} Created Successfully`)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }







// export const login = (credentials) => dispatch => {
//     //console.log(credentials)
//     try {
//         dispatch({ type: USER_LOADING });
//         client.authenticate(credentials)
//             .then((res) => {
//                 dispatch({
//                     type: LOGIN_SUCCESS,
//                     payload: res
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: LOGIN_FAIL,
//                     payload: error
//                 })
//                 toast.error(` ${error.message}`);
//             })
//     }
//     catch (error) {
//         dispatch({
//             type: LOGIN_FAIL,
//             payload: error
//         })
//         toast.error(` ${error.message}`);
//     }
// }
// // // Logout user 
// export const logout = () => dispatch => {
//     try {
//         client.logout()
//             .then((err) => {
//                 dispatch({ type: LOGOUT_SUCCESS, })
//             })
//             .catch((err) => {
//                 dispatch({ type: LOGOUT_SUCCESS, })
//             })
//     }
//     catch (error) {
//         dispatch({ type: LOGOUT_SUCCESS, })
//     }
// }

