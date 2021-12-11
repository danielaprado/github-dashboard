import { UserInfoModel } from "./UserInfoModel";

export interface UsersModel {
  total_count: number;
  incomplete_results: boolean;
  items: UserInfoModel[];
}
