import { UsersModel } from "../models/TopUserModel";
import { UserDetailedInfo } from "../models/UserDetailedInfo";

export const fetchTopUsers = async (): Promise<UsersModel> => {
  const response = await fetch(
    "https://api.github.com/search/users?q=followers:>=0&page=1&per_page=3&order=desc"
  );

  const topUsers = await response.json();
  return topUsers;
};

export const fetchUser = async (login: string): Promise<UserDetailedInfo> => {
  const response = await fetch(`https://api.github.com/users/${login}`);

  const user = await response.json();
  return user;
};
