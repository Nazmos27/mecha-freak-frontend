import { baseApi } from "./baseApi";

export type TOrderInfo = {
  product: string;
  price: number;
  quantity: number;
};

export type TOrder = {
  name: string;
  phone: string;
  email: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: string;
  orderInfo: TOrderInfo[];
};

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order: TOrder) => ({
        url: "/orders/create-order",
        method: "POST",
        body: order,
      }),
    }),

    getOrderByEmail: builder.query({
      query: (email: string) => ({
        url: `/orders?email=${email}`,
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = orderApi;
