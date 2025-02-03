import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
    credentials: "include",
    prepareHeaders: (headers) => {
      // Get Token From Redux State
      const token = localStorage.getItem("token");
      // Set Header Token
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["bicycle"],
  endpoints: () => ({}),
});
