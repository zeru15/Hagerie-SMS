import axios from 'axios'
// import { response } from 'express';

export const parentProfile = () => async dispatch => {

    dispatch({type: 'GET_PARENTPROFILE_REQUEST'})

    try{
        const response = await axios.get('/api/parentInfo/ParentInfo')
        console.log(response);
        dispatch({type: 'GET_PARENTPROFILE_SUCCESS', payload: response.data})
    }catch (error) {
        dispatch({type: 'GET_PARENTPROFILE_FAILED', payload: error})
    }

}