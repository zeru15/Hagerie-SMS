export const studentProfileReducer = (state = {studentInfo: [] }, action ) => {

    switch(action.type)
    {
        case 'GET_STUDENTPROFILE_REQUEST' :
            return{
                ...state,
                loading: true
            }
        case 'GET_STUDENTPROFILE_SUCCESS' :
            return {
                loading: false,
                studentInfo: action.payload
            }
        case 'GET_STUDENTPROFILE_FAILED' :
            return {
                loading: false,
                error : action.payload
            }
        default : return state
    }
}