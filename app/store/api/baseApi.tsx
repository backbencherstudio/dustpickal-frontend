import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your base API URL
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbnZpcmJkY2FsbGluZ25vZGUuanNAZ21haWwuY29tIiwic3ViIjoiY205MTVoZXNoMDAwMHR6NTRzdHg1Y3d2ZCIsImlhdCI6MTc0MzY3MjM1MiwiZXhwIjoxNzQzNzU4NzUyfQ.9jl03Kv-aLKzYUb3MKvYMU_7KyD9IpIhIoXC8Bw3rjE`
      );

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Dashboard"],
});

export const { useQuery, useMutation } = baseApi as any;
