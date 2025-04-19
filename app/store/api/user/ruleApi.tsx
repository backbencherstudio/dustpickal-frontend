import { baseApi } from "../baseApi";

interface UpdateRuleResponse {
  message: string;
  status: boolean;
  data: {
    id: string;
    title: string;
    sub_rule: string;
    published_date: string;
    last_modified: string;
  };
}

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
        url: `/user-rules-management/rule/${id}`,
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
    updateRule: builder.mutation<UpdateRuleResponse, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/user-rules-management/update-rule/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Rules"],
    }),
    deleteRule: builder.mutation({
      query: (id) => ({
        url: `/user-rules-management/delete-rule/${id}`,
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
