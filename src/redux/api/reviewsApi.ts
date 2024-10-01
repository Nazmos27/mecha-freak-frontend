import { baseApi } from "./baseApi";

export type TReview = {
  _id: string;
  name: string;
  email: string;
  location: string;
  review: string;
  image: string;
  rating: number;
  isDeleted: boolean;
};

export type TQueryParams = {
  search?: string;
  limit?: number;
  page?: number;
};

type TServerResponseForAllReview = {
  success: boolean;
  data: TReview[];
  statusCode: number;
  message: string;
};

type TServerResponseForSingleReview = {
  success: boolean;
  data: TReview;
  statusCode: number;
  message: string;
};

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // create review
    createReview: builder.mutation({
      query: (review) => ({
        url: "/reviews/create-review",
        method: "POST",
        body: review,
      }),
    }),
    // get all review
    getAllReview: builder.query<TServerResponseForAllReview, void>({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
    }),

    // get single Review
    getSingleReview: builder.query<
      TServerResponseForSingleReview,
      { id: string }
    >({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewQuery,
  useGetSingleReviewQuery,
} = reviewsApi;
