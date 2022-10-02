import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * The base of the Budget API with the reducer, baseQuery, tagTypes for caching
 */
export const budgetApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BUDGET_URL,
  }),
  tagTypes: [
    "Unauthorized",
    "Unknown_Error",
    "Session",
    "Category",
    "Expense",
    "User",
  ],
  reducerPath: "budgetApi",
  endpoints: () => ({}),
});

/**
 * Creates list for providesTags for use in API configuration
 *
 * @param resultsWithIds The results from the API query
 * @param tagType The type of Tag the list provides
 *
 * @returns A list of Tags with uuids or a virtual LIST with Tag Type of tagType
 */
export function providesList<
  R extends { id: string | number }[],
  T extends string
>(resultsWithIds: R | undefined, tagType: T) {
  return resultsWithIds
    ? [
        { type: tagType, uuid: "LIST" },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: "LIST" }];
}
