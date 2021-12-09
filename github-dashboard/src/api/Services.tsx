import { UsersModel } from "../models/TopUserModel";

export const fetchTopUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=followers:>=0&page=1&per_page=3&order=desc"
  );

  const topUsers = await response.json();
  return topUsers;
};
