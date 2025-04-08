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
    getRuleById: builder.query({
      query: (id) => ({
        url: `/admin/rule-management/${id}`,
        method: "GET",
      }),
      providesTags: ["Rules"],
    }),
    createRule: builder.mutation({
      query: (data) => ({
        url: "/admin/rule-management",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Rules"],
    }),
    updateRule: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/rule-management/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Rules"],
    }),
    deleteRule: builder.mutation({
      query: (id) => ({
        url: `/admin/rule-management/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rules"],
    }),
  }),
});
export const {
  useGetRulesQuery,
  useCreateRuleMutation,
  useUpdateRuleMutation,
  useDeleteRuleMutation,
  useGetRuleByIdQuery,
} = ruleApi;
