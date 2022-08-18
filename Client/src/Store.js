import {combineReducers} from 'redux'

import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import {studentProfileReducer} from './Reducers/StudentProfileReducers'
import {parentProfileReducer} from './Reducers/ParentProfileReducers'
import {announcementReducer} from './Reducers/AnnouncementReducers'

const rootReducer = combineReducers( {
    studentProfileReducer : studentProfileReducer,
    parentProfileReducer : parentProfileReducer,
    announcementReducer : announcementReducer

})

const initialState = {}

const store = createStore(rootReducer , initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store