import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboards: builder.query({
      query: (params = { year: 2025, month: 4 }) => ({
        url: `/admin/dashboard?year=${params.year}&month=${params.month}`,
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetDashboardsQuery } = dashboardApi;
