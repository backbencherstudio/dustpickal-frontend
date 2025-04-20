import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboards: builder.query({
      query: (params = { year: 2025, month: 4, page: 1, limit: 10 }) => ({
        url: `/admin/dashboard`,
        method: "GET",
        params: {
          year: params.year,
          month: params.month,
          page: params.page,
          limit: params.limit,
        },
      }),
      providesTags: ["Dashboard"],
    }),
    getApiUsageOverview: builder.query({
      query: () => ({
        url: `/admin/api-management/usage-overview`,
        method: "GET",
      }),
    }),
    getDailyUsageTokens: builder.query({
      query: ({ dateFilter }) => ({
        url: `/admin/api-management/daily-usage`,
        method: "GET",
        params: {
          year: dateFilter?.year,
          month: dateFilter?.month,
        },
      }),
    }),
    getUserUsage: builder.query({
      query: ({ page, dateFilter }) => ({
        url: `/admin/api-management/user-usages`,
        method: "GET",
        params: {
          page,
          year: dateFilter?.year, // Pass the date as a query parameter
          month: dateFilter?.month,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDashboardsQuery,
  useGetApiUsageOverviewQuery,
  useGetDailyUsageTokensQuery,
  useGetUserUsageQuery,
} = dashboardApi;
