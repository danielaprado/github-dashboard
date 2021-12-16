import { initialState } from "./initialState";
import { AppStateModel } from "./model";
import { AppActions, AppActionTypes } from "./actions";
import { ActionType } from "typesafe-actions";

export const AppReducer = (
  state: AppStateModel = initialState,
  action: ActionType<typeof AppActions>
): AppStateModel => {
  switch (action.type) {
    case AppActionTypes.FETCH_TRENDING_USERS_SUCCESS:
      return {
        ...state,
        trendingUsers: {
          ...state.trendingUsers,
          users: action.payload,
        },
      };
    case AppActionTypes.FETCH_TRENDING_USERS_FAILURE:
      console.log(action.payload.hasError);
      return {
        ...state,
        trendingUsers: {
          ...state.trendingUsers,
          hasError: action.payload.hasError,
        },
      };
    case AppActionTypes.FETCH_ACTIVE_USERS_SUCCESS:
      return {
        ...state,
        activeUsers: {
          ...state.activeUsers,
          users: action.payload,
        },
      };
    case AppActionTypes.FETCH_ACTIVE_USERS_FAILURE:
      console.log(action.payload.hasError);

      return {
        ...state,
        activeUsers: {
          ...state.activeUsers,
          hasError: action.payload.hasError,
        },
      };
    case AppActionTypes.FETCH_TOP_REPOS_SUCCESS:
      return {
        ...state,
        repos: {
          ...state.repos,
          repos: action.payload,
        },
      };
    case AppActionTypes.FETCH_TOP_REPOS_FAILURE:
      console.log(action.payload.hasError);

      return {
        ...state,
        repos: {
          ...state.repos,
          hasError: action.payload.hasError,
        },
      };
    case AppActionTypes.UPDATE_TRENDING_USERS_SUCCESS:
      return {
        ...state,
        trendingUsers: {
          ...state.trendingUsers,
          users: action.payload,
        },
      };
    case AppActionTypes.UPDATE_TRENDING_USERS_FAILURE:
      console.log(action.payload.hasError);
      return {
        ...state,
        trendingUsers: {
          ...state.trendingUsers,
          hasError: action.payload.hasError,
        },
      };
    case AppActionTypes.UPDATE_ACTIVE_USERS_SUCCESS:
      return {
        ...state,
        activeUsers: {
          ...state.activeUsers,
          users: action.payload,
        },
      };
    case AppActionTypes.UPDATE_ACTIVE_USERS_FAILURE:
      console.log(action.payload.hasError);
      return {
        ...state,
        activeUsers: {
          ...state.activeUsers,
          hasError: action.payload.hasError,
        },
      };
    case AppActionTypes.UPDATE_TOP_REPOS_SUCCESS:
      return {
        ...state,
        repos: {
          ...state.repos,
          repos: action.payload,
        },
      };
    case AppActionTypes.UPDATE_TOP_REPOS_FAILURE:
      console.log(action.payload.hasError);
      return {
        ...state,
        repos: {
          ...state.repos,
          hasError: action.payload.hasError,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
