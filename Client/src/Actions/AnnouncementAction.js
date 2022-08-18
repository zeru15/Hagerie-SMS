import axios from 'axios'
// import { response } from 'express';

export const Announcement = () => async dispatch => {

    dispatch({type: 'GET_ANNOUNCEMENT_REQUEST'})

    try{
        const response = await axios.get('/api/announcements/Announcements')
        console.log(response);
        dispatch({type: 'GET_ANNOUNCEMENT_SUCCESS', payload: response.data})
    }catch (error) {
        dispatch({type: 'GET_ANNOUNCEMENT_FAILED', payload: error})
    }

}