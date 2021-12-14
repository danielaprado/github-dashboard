import { createAsyncAction } from "typesafe-actions";
import { ReposModel } from "../../models/ReposModel";
import { UsersModel } from "../../models/UsersModel";

export enum AppActionTypes {
  FETCH_TRENDING_USERS_REQUEST = "@users/FETCH_TRENDING_USERS_REQUEST",
  FETCH_TRENDING_USERS_SUCCESS = "@users/FETCH_TRENDING_USERS_SUCCESS",
  FETCH_TRENDING_USERS_FAILURE = "@users/FETCH_TRENDING_USERS_FAILURE",

  FETCH_ACTIVE_USERS_REQUEST = "@users/FETCH_ACTIVE_USERS_REQUEST",
  FETCH_ACTIVE_USERS_SUCCESS = "@users/FETCH_ACTIVE_USERS_SUCCESS",
  FETCH_ACTIVE_USERS_FAILURE = "@users/FETCH_ACTIVE_USERS_FAILURE",

  FETCH_TOP_REPOS_REQUEST = "@users/FETCH_TOP_REPOS_REQUEST",
  FETCH_TOP_REPOS_SUCCESS = "@users/FETCH_TOP_REPOS_SUCCESS",
  FETCH_TOP_REPOS_FAILURE = "@users/FETCH_TOP_REPOS_FAILURE",

  UPDATE_TRENDING_USERS_REQUEST = "@users/UPDATE_TRENDING_USERS_REQUEST",
  UPDATE_TRENDING_USERS_SUCCESS = "@users/UPDATE_TRENDING_USERS_SUCCESS",
  UPDATE_TRENDING_USERS_FAILURE = "@users/UPDATE_TRENDING_USERS_FAILURE",

  UPDATE_ACTIVE_USERS_REQUEST = "@users/UPDATE_ACTIVE_USERS_REQUEST",
  UPDATE_ACTIVE_USERS_SUCCESS = "@users/UPDATE_ACTIVE_USERS_SUCCESS",
  UPDATE_ACTIVE_USERS_FAILURE = "@users/UPDATE_ACTIVE_USERS_FAILURE",

  UPDATE_TOP_REPOS_REQUEST = "@users/UPDATE_TOP_REPOS_REQUEST",
  UPDATE_TOP_REPOS_SUCCESS = "@users/UPDATE_TOP_REPOS_SUCCESS",
  UPDATE_TOP_REPOS_FAILURE = "@users/UPDATE_TOP_REPOS_FAILURE",
}

const fetchTrendingUsers = createAsyncAction(
  AppActionTypes.FETCH_TRENDING_USERS_REQUEST,
  AppActionTypes.FETCH_TRENDING_USERS_SUCCESS,
  AppActionTypes.FETCH_TRENDING_USERS_FAILURE
)<undefined, UsersModel, undefined>();

const fetchActiveUsers = createAsyncAction(
  AppActionTypes.FETCH_ACTIVE_USERS_REQUEST,
  AppActionTypes.FETCH_ACTIVE_USERS_SUCCESS,
  AppActionTypes.FETCH_ACTIVE_USERS_FAILURE
)<undefined, UsersModel, undefined>();

const fetchTopRepos = createAsyncAction(
  AppActionTypes.FETCH_TOP_REPOS_REQUEST,
  AppActionTypes.FETCH_TOP_REPOS_SUCCESS,
  AppActionTypes.FETCH_TOP_REPOS_FAILURE
)<undefined, ReposModel, undefined>();

const updateTrendingUsers = createAsyncAction(
  AppActionTypes.UPDATE_TRENDING_USERS_REQUEST,
  AppActionTypes.UPDATE_TRENDING_USERS_SUCCESS,
  AppActionTypes.UPDATE_TRENDING_USERS_FAILURE
)<{ search: string }, UsersModel, undefined>();

const updateActiveUsers = createAsyncAction(
  AppActionTypes.UPDATE_ACTIVE_USERS_REQUEST,
  AppActionTypes.UPDATE_ACTIVE_USERS_SUCCESS,
  AppActionTypes.UPDATE_ACTIVE_USERS_FAILURE
)<{ search: string }, UsersModel, undefined>();

const updateTopRepos = createAsyncAction(
  AppActionTypes.UPDATE_TOP_REPOS_REQUEST,
  AppActionTypes.UPDATE_TOP_REPOS_SUCCESS,
  AppActionTypes.UPDATE_TOP_REPOS_FAILURE
)<{ search: string }, ReposModel, undefined>();

export const AppActions = {
  fetchTrendingUsers,
  fetchActiveUsers,
  fetchTopRepos,
  updateTrendingUsers,
  updateActiveUsers,
  updateTopRepos,
};
