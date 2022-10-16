import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/slice"
import loader from "../slice/loaderSlice"

export const store = configureStore({
    reducer: {
        coreReducer: reducer,
        load: loader,
    },
});