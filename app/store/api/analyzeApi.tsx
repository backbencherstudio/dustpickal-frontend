import { baseApi } from "./baseApi";

interface AnalyzeRequest {
    files: File[];
    ruleIds: string[];
}

interface AnalysisResponse {
    success: boolean;
    message: string;
    data: {
        results: {
            documentId: string;
            fileName: string;
            analyses: {
                ruleId: string;
                ruleTitle: string;
                matched: boolean;
                analysis: string;
            }[];
            tokensUsed: number;
        }[];
        tokenUsage: {
            totalUsed: number;
            remaining: number;
            subscription: {
                type: string;
                totalTokens: number;
                description: string;
            };
        };
    };
}

interface AnalysisDocumentDownloadResponse {
    success: boolean;
    message: string;
    data: {
        fileName: string;
        mimeType: string;
        base64: string;
    };
    }

interface AnalysisHistoryResponse {
    success: boolean;
    message: string;
    data: {};
}

export const analyzeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        analyze: builder.mutation<AnalysisResponse, FormData>({
            query: (data) => ({
                url: "/analyzer-interface/analyze",
                method: "POST",
                body: data,
            }),
        }),
        analyzeDocumentDownload: builder.mutation<AnalysisDocumentDownloadResponse, string>({
            query: (documentId) => ({
                url: `/analyzer-interface/document/${documentId}/download`,
                method: "GET",
            }),
        }),
        analyzeHistory: builder.query<AnalysisHistoryResponse, string>({
            query: (searchQuery) => ({
                url: `/analyzer-interface/analysis-history?search=${searchQuery}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useAnalyzeMutation, useAnalyzeDocumentDownloadMutation, useAnalyzeHistoryQuery } = analyzeApi;
