import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer: {
        userState: userSlice.reducer,
        movieState: movieSlice.reducer
    }
});

export default store;