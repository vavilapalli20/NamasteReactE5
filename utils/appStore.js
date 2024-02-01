import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

const appStore = configureStore({
    reducer: {
        card: cardReducer,
        // if we have user slice the we would have added user: userReducer
    },
});


export default appStore;