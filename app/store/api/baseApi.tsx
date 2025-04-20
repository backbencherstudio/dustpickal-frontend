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
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbnZpcmJkY2FsbGluZ25vZGUuanNAZ21haWwuY29tIiwic3ViIjoiY205YXZrOHRvMDAwMHR6MzhnajRpemVudiIsImlhdCI6MTc0NTAzNjk2NiwiZXhwIjoxNzQ1MTIzMzY2fQ.OaRtO9ew-onDy2Q2D63jE_MdU-fescNplBbW_uzM0rY`
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Dashboard", "Notifications", "Rules", "Users", "Support"],
});

export const { useQuery, useMutation } = baseApi as any;
