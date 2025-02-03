/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get Logged in user Order
    getAllLogedInUserOrder: builder.query({
      query: () => ({
        url: "/order/all",
        method: "GET",
      }),
    }),
    // Get All user Order For Admin
    getAllOrderForAdmin: builder.query({
      query: () => ({
        url: "/order//all-orders",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllLogedInUserOrderQuery, useGetAllOrderForAdminQuery } =
  orderApi;
