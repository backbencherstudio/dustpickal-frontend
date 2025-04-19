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
      query: () => ({
        url: `/admin/api-management/daily-usage`,
        method: "GET",
      }),
    }),
    getUserUsage: builder.query({
      query: (page) => ({
        url: `/admin/api-management/user-usages?page=${page}`,
        method: "GET",
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
