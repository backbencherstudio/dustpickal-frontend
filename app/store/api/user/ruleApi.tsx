import { baseApi } from "../baseApi";

export const ruleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRules: builder.query({
      query: ({ page = 1, limit = 10, search = "", is_draft = false }) => ({
        url: `/analyzer-interface/all-rules?page=${page}&limit=${limit}&search=${search}&is_draft=${is_draft}`,
        method: "GET",
      }),
      providesTags: ["Rules"],
    }),
    getAllRules: builder.query({
      query: () => ({
        url: `/analyzer-interface/all-rules`,
        method: "GET",
      }),
      providesTags: ["Rules"],
    }),
    getRuleById: builder.query({
      query: (id) => ({
        url: `/analyzer-interface/rules/${id}`,
        method: "GET",
      }),
      providesTags: ["Rules"],
    }),
    createRule: builder.mutation({
      query: (data) => ({
        url: "/analyzer-interface/rules",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Rules"],
    }),
    updateRule: builder.mutation({
      query: ({ id, data }) => ({
        url: `/analyzer-interface/edit-rules/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Rules"],
    }),
    deleteRule: builder.mutation({
      query: (id) => ({
        url: `/analyzer-interface/rules/${id}`,
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
  useGetAllRulesQuery,
} = ruleApi;
