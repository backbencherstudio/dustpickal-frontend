import { baseApi } from "./baseApi";

export const ruleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupports: builder.query({
      query: () => ({
        url: `/user-support`,
        method: "GET",
      }),
      providesTags: ["Support"],
    }),
    getSupportInfo: builder.query({
      query: (id) => ({
        url: `/user-support/${id}`,
        method: "GET",
      }),
    }),
    replySupport: builder.mutation({
      query: ({ id, content }) => ({
        url: `/admin/support/${id}/reply`,
        method: "POST",
        body: content,
      }),
    }),
  }),
});
export const {
  useGetAllSupportsQuery,
  useGetSupportInfoQuery,
  useReplySupportMutation,
} = ruleApi;
