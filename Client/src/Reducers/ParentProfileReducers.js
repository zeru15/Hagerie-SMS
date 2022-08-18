export const parentProfileReducer= (state = {parentInfo: [] }, action ) => {

    switch(action.type)
    {
        case 'GET_PARENTPROFILE_REQUEST' :
            return{
                ...state,
                loading: true
            }
        case 'GET_PARENTPROFILE_SUCCESS' :
            return {
                loading: false,
                parentInfo: action.payload
            }
        case 'GET_PARENTPROFILE_FAILED' :
            return {
                loading: false,
                error : action.payload
            }
        default : return state
    }
}