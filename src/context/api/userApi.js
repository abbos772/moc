import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["User"],
    }),
    getUserDetail: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    postUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    putUser: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  usePostUserMutation,
  useGetProductsQuery,
  useGetUserDetailQuery,
  usePutUserMutation,
} = productApi;
