import { ReposModel } from "../models/ReposModel";
import { UsersModel } from "../models/UsersModel";
import { UserDetailedInfo } from "../models/UserDetailedInfo";

export const fetchTopTrendingUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=followers:>=0&page=1&per_page=3&order=desc"
  );

  const topTrendingUsers = await response.json();
  console.log(topTrendingUsers);
  return topTrendingUsers;
};

export const fetchTopActiveUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=repos:<=10&page=1&per_page=3"
  );

  const topActiveUsers = await response.json();
  console.log("active");
  console.log(topActiveUsers);

  return topActiveUsers;
};

export const fetchTopRepos = async (): Promise<ReposModel> => {
  const response = await fetch(
    "https://api.github.com/search/repositories?q=stars:>=1&sort=stars&page=1&per_page=4&order=desc"
  );

  const topRepos = await response.json();
  console.log(topRepos);

  return topRepos;
};

export const fetchSearchedTrendingUsers = async (
  searchValue: string
): Promise<UsersModel> => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=1&per_page=3&order=desc`
  );

  const searchedTopUsers = await response.json();
  return searchedTopUsers;
};

export const fetchSearchedActiveUsers = async (
  searchValue: string
): Promise<UsersModel> => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=1&per_page=3&order=desc`
  );

  const searchedActiveUsers = await response.json();
  return searchedActiveUsers;
};

export const fetchSearchedTopRepos = async (
  searchValue: string
): Promise<UsersModel> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&page=1&per_page=4&order=desc`
  );

  const searchedTopRepos = await response.json();
  return searchedTopRepos;
};

export const fetchUser = async (login: string): Promise<UserDetailedInfo> => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  const user = await response.json();
  return user;
};
