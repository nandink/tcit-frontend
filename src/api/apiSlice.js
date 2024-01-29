import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts'],
        }),
        addPost: builder.mutation({
            query: (createPost) => ({
                url: '/posts',
                method: 'POST',
                body: createPost,
            }),
            invalidatesTags: ['Posts'],
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

export const {useFetchPostsQuery, useDeletePostMutation, useAddPostMutation} = apiSlice;
