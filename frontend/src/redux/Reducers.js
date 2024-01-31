import { combineReducers } from "@reduxjs/toolkit";
import authreducer from './AuthSlice'

const rootReducer=combineReducers({
auth:authreducer,
})
export default rootReducer