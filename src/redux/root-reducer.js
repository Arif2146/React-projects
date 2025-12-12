import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user-reducer.jsx";
import CartReducer from "./cart/reducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
});

export default rootReducer;