import { api } from "./Product";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getPro: build.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["Product"],
    }),
    //    deleteUser: build.mutation({
    //       query: (id) => ({
    //         url: `/product/${id}`,
    //         method: "DELETE",
    //       }),
    //       invalidatesTags: ["Product"],
    //     }),
    //     postUser: build.mutation({
    //       query: (body) => ({
    //         url: `/product`,
    //         method: "POST",
    //         body,
    //       }),
    //       invalidatesTags: ["Product"],
    //     }),
  }),
});
export const { useGetProQuery } = productApi;
