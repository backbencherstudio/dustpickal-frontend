import { baseApi } from "./baseApi";

export const ruleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRules: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/admin/rule-management?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Rules"],
    }),
  }),
});
export const { useGetRulesQuery } = ruleApi;
