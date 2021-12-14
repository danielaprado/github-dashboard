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
        topTrendingUsers: action.payload,
      };
    case AppActionTypes.FETCH_ACTIVE_USERS_SUCCESS:
      return {
        ...state,
        topActiveUsers: action.payload,
      };
    case AppActionTypes.FETCH_TOP_REPOS_SUCCESS:
      return {
        ...state,
        topRepos: action.payload,
      };
    case AppActionTypes.UPDATE_TRENDING_USERS_SUCCESS:
      return {
        ...state,
        topTrendingUsers: action.payload,
      };
    case AppActionTypes.UPDATE_ACTIVE_USERS_SUCCESS:
      return {
        ...state,
        topActiveUsers: action.payload,
      };
    case AppActionTypes.UPDATE_TOP_REPOS_SUCCESS:
      return {
        ...state,
        topRepos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
