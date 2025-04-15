import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your base API URL
const baseUrl = "http://localhost:4000/api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      headers.set(
        "authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbnZpcmJkY2FsbGluZ25vZGUxLmpzQGdtYWlsLmNvbSIsInN1YiI6ImNtOWY3eDhjNDAwMDJ0enV3bGFuZ2tneGUiLCJpYXQiOjE3NDQ3MDYyMTEsImV4cCI6MTc0NDc5MjYxMX0.BrauHIbw_f4Gi419eFTFxKW2nMk2c36i4qxG9TrfKMA`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Dashboard", "Notifications", "Rules", "Users"],
});

export const { useQuery, useMutation } = baseApi as any;
