import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: ({ data }) => ({
                url: "create-course", // corrected URL
                method: "POST",
                body: { data },
                credentials: "include" as const
            })
        }),
        getAllCourses: builder.query({
            query: () => ({
                url: "get-courses",
                method: "GET",
                credentials: "include" as const
            })
        })
    })
});

export const { useCreateCourseMutation, useGetAllCoursesQuery } = courseApi;
