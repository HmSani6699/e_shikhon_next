import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { url } from "inspector";
import { userLoggedIn } from "../auth/authSlice";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: (data) => ({
                url: "refresh",
                method: "GET",
                credentials:"include" as const,
            }),
        }),
        loadUser: builder.query({
            query: (data) => ({
                url: "me",
                method: "GET",
                credentials:"include" as const,
            }),
              async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.activationToken,
              user:result.data.user,
            })
          );
        } catch (error: any) {
          console.error(error);
        }
      },
        }),

    }),
});

export const { useRefreshTokenQuery,useLoadUserQuery} = apiSlice;