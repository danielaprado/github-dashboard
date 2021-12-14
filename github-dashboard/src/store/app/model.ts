import { ReposModel } from "../../models/ReposModel";
import { UsersModel } from "../../models/UsersModel";

export interface AppStateModel {
  topTrendingUsers: UsersModel;
  topActiveUsers: UsersModel;
  topRepos: ReposModel;
}
