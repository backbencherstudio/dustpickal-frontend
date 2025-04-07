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
  }),
  overrideExisting: false,
});

export const { useGetDashboardsQuery } = dashboardApi;
