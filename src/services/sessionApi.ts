import { budgetApi } from "./budgetApi";
// Config
import {
  ITokenResponse,
  ISessionResponse,
  IUserResponse,
  IUserRequest,
} from "../exports/types.exports";

/**
 * Session API which holds all endpoints relating to sessions -
 * Create (register) / Delete (logout) / Get All
 */
const sessionApi = budgetApi.injectEndpoints({
  endpoints: (build) => ({
    /**
     * GET fetch all sessions for the user
     */
    getAllSessions: build.query<ISessionResponse, null>({
      query: () => ({
        url: "/sessions",
        method: "GET",
        headers: {
          "x-refresh": "TODO",
          Authorization: "Bearer TODO",
        },
      }),
    }),

    /**
     * POST register a user
     */
    createANewUser: build.query<IUserResponse, IUserRequest>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
    }),

    /**
     * POST request to create a session (login) for a user
     */
    createASession: build.query<ITokenResponse, null>({
      query: (body) => ({
        url: "/sessions",
        method: "POST",
        headers: {
          "x-refresh": "TODO",
          Authorization: "Bearer TODO",
        },
        body,
      }),
    }),

    /**
     * DELETE the current session (logout)
     */
    deleteASession: build.query<null, null>({
      query: () => ({
        url: "/sessions",
        method: "DELETE",
        headers: {
          "x-refresh": "TODO",
          Authorization: "Bearer TODO",
        },
      }),
    }),
  }),
});

export const {
  useGetAllSessionsQuery,
  useCreateANewUserQuery,
  useCreateASessionQuery,
  useDeleteASessionQuery,
} = sessionApi;
