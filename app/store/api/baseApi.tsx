import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your base API URL
const baseUrl = "http://localhost:4000/api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Dashboard",
    "Notifications",
    "Rules",
    "Users",
    "Support",
    "Analyze",
  ],
});

export const { useQuery, useMutation } = baseApi as any;
