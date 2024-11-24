import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Store/Auth/AuthSlice";
import signupReducer from "./Store/Auth/SignupSlice"; 

const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
    },
});

export default store;