import { baseApi } from "./baseApi";

interface AnalyzeRequest {
    files: File[];
    ruleIds: string[];
}

export const analyzeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        analyze: builder.mutation<{ success: boolean; message: string }, FormData>({
            query: (data) => ({
                url: "/analyzer-interface/analyze",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useAnalyzeMutation } = analyzeApi;
