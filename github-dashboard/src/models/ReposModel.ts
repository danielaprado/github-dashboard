import { RepoInfoModel } from "./RepoInfoModel";

export interface ReposModel {
  total_count: number;
  incomplete_results: boolean;
  items: RepoInfoModel[];
}
