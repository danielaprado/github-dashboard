import { ReposModel } from "../models/ReposModel";
import { UsersModel } from "../models/TopUserModel";
import { UserDetailedInfo } from "../models/UserDetailedInfo";

export const fetchTopTrendingUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=followers:>=0&page=1&per_page=3&order=desc"
  );

  const topTrendingUsers = await response.json();
  return topTrendingUsers;
};

export const fetchTopActiveUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=repos:<=10&page=1&per_page=3"
  );

  const topActiveUsers = await response.json();
  return topActiveUsers;
};

export const fetchUser = async (login: string): Promise<UserDetailedInfo> => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  const user = await response.json();
  return user;
};

export const fetchSearchedTopUsers = async (
  searchValue: string
): Promise<UsersModel> => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=1&per_page=3&order=desc`
  );

  const searchedTopUsers = await response.json();
  return searchedTopUsers;
};

export const fetchTopRepos = async (): Promise<ReposModel> => {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars:>=1&sort=stars&page=1&per_page=4&order=desc"
  );

  const topUsers = await response.json();
  return topUsers;
};
