import axios from 'axios'
// import { response } from 'express';

export const studentProfile = () => async dispatch => {

    dispatch({type: 'GET_STUDENTPROFILE_REQUEST'})

    try{
        const response = await axios.get('/api/studentInfo/StudentInfo')
        console.log(response);
        dispatch({type: 'GET_STUDENTPROFILE_SUCCESS', payload: response.data})
    }catch (error) {
        dispatch({type: 'GET_STUDENTPROFILE_FAILED', payload: error})
    }

}