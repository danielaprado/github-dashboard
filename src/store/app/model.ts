import { ReposModel } from "../../models/ReposModel";
import { UsersModel } from "../../models/UsersModel";

export interface AppStateModel {
  trendingUsers: { users: UsersModel; hasError: boolean };
  activeUsers: { users: UsersModel; hasError: boolean };
  repos: { repos: ReposModel; hasError: boolean };
}
