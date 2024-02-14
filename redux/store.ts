// "use client "
// import { configureStore } from "@reduxjs/toolkit"
// import { apiSlice } from "./features/api/apiSlice"
// import { authSlice } from "./features/auth/authSlice"
 
// export const store = configureStore({
//     reducer: {
//         [apiSlice.reducerPath]: apiSlice.reducer,
//         auth:authSlice,
//     },
//     devTools: false,
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat( apiSlice.middleware)
// })


// ======> gpt codde <==== //

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./features/auth/authApi"; 
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware), 
    devTools: false,
});
