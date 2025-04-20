import { baseApi } from "./baseApi";

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (params = { page: 1, limit: 5 }) => ({
        url: `/admin/notification`,
        method: "GET",
        params,
      }),
      providesTags: ["Notifications"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetNotificationsQuery } = notificationApi;
