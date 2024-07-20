import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Features/user/UserSlice";

const store = configureStore({
    reducer
});