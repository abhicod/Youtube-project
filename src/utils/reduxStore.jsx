import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const reduxStore = configureStore({
    reducer: {
        app : appSlice,
    }
})

export default reduxStore