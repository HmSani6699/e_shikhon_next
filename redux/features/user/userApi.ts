import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>( {
        updateAvatar: builder.mutation({
            query: (avatar) => ({
                url: "update-user-avatar",
                method: "PUT",
                body:{ avatar },
            Credential:"incude" as const ,
            })
        })
    })
});

export const { useUpdateAvatarMutation} = userApi;