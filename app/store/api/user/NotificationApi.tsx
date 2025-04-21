import { baseApi } from "../baseApi";

export const NotificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => ({
        url: "/user-notification",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = NotificationApi;
