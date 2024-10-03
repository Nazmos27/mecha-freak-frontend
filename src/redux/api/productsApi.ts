import { baseApi } from "./baseApi";

export type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  ratings: number;
  description: string;
  isDeleted?: boolean;
};

export type TQueryParams = {
  search?: string;
  limit?: number;
  page?: number;
};

type TServerResponseForAllProduct = {
  success: boolean;
  message: string;
  data: TProduct[];
  // statusCode: number; //todo:have to remove it as per the backend response format
  totalProducts: number;
};

type TServerResponseForSingleProduct = {
  success: boolean;
  data: TProduct;
  // statusCode: number;
  message: string;
};

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (productInfo) => ({
        url: `/products/${productInfo._id}`,
        method: "PUT",
        body: productInfo.product,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getAllProducts: builder.query<TServerResponseForAllProduct, TQueryParams>({
      query: ({ limit, page, search }) => {
        const params = [];
        if (limit) params.push(`limit=${limit}`);
        if (page) params.push(`page=${page}`);
        if (search) params.push(`search=${encodeURIComponent(search)}`);

        const querySting = params.length ? `?${params.join("&")}` : "";
        return {
          url: `/products${querySting}`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),

    getSingleProduct: builder.query<TServerResponseForSingleProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductMutation,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
