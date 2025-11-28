import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user-reducer.jsx";

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;