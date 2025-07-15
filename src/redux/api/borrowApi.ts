import type { IBorrowData, IBorrowSummaryResponse } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://books-finder-server.vercel.app/api' }),
  tagTypes: ['Borrow'],
  endpoints: (builder) => ({
    borrowBook: builder.mutation<void, IBorrowData>({
      query: (body) => ({
        url: '/borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Borrow'],
    }),
  getBorrowSummary: builder.query<IBorrowSummaryResponse, void>({
  query: () => "/borrow",
  providesTags: ["Borrow"],
}),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
