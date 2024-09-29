import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverUrl } from "../../App";

const baseQuery = fetchBaseQuery({
  baseUrl: `${serverUrl}/api/v1`,
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["products", "reviews", "orders"],
  endpoints: () => ({}),
});
