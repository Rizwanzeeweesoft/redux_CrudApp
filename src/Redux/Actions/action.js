import { FETCH_POSTS, LOGIN, DELETE_USER, EDIT_USER, FETCH_EDIT_USER } from './type';
import axios from "axios";




export const FetchList = () => {
    return async (dispatch) => {
        await axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
            dispatch({
                type: FETCH_POSTS,
                payload: result,
            })
        }).catch(error => {
            console.log(error)
        })
    }
};


export const login = LoginData => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', LoginData).then((result) => {
            dispatch({
                type: LOGIN,
                payload: result,
            })
        }).catch(error => {
            console.log(error)
        })
    }
};

export const deleteuser = (id) => {
    return async (dispatch) => {
        await axios.delete(`${'https://jsonplaceholder.typicode.com/posts'}/${id}`).then(() => {
            dispatch({
                type: DELETE_USER,
                payload: id,
            })
        }).catch(error => {
            console.log(error)
        })
    }
};


export const EditList = (id) => {
    return async (dispatch) => {
        await axios.get(`${'https://jsonplaceholder.typicode.com/posts'}/${id}`).then((result) => {
            dispatch({
                type: FETCH_EDIT_USER,
                payload: result,
            })
        }).catch(error => {
            console.log(error)
        })
    }
};


export const UpdateList = (id, postData) => {
    return async (dispatch) => {
        await axios.put(`${'https://jsonplaceholder.typicode.com/posts'}/${id}`, postData).then((result) => {
            dispatch({
                type: EDIT_USER,
                payload: result,
            })
        }).catch(error => {
            console.log(error)
        })
    }
};


// export function edituser(data) {  
//     return async dispatch => {  
//         axios.post(url,data).then((result)=>{
//             dispatch({
//                 type: EDIT_USER,
//                 payload: result,
//             })
//             }).catch(error=>{
//                 console.log(error)
//             })
//     }  
// }; 