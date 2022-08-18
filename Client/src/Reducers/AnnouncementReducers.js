export const announcementReducer= (state = {announcement: [] }, action ) => {

    switch(action.type)
    {
        case 'GET_ANNOUNCEMENT_REQUEST' :
            return{
                ...state,
                loading: true
            }
        case 'GET_ANNOUNCEMENT_SUCCESS' :
            return {
                loading: false,
                announcement: action.payload
            }
        case 'GET_ANNOUNCEMENT_FAILED' :
            return {
                loading: false,
                error : action.payload
            }
        default : return state
    }
}