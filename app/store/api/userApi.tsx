import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/admin/user-management/users-details?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    getUserInfo: builder.query({
      query: ({ id }) => ({
        url: `/admin/user-profile-info/${id}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});
export const { useGetUsersQuery, useGetUserInfoQuery } = userApi;
