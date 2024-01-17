import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../../utils/constants";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
    }),
  }),
});

// Add "use" to the front of the builder endpoint that is being exported.
// Along with whether it is a query or mutation, at the end of it.
export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
