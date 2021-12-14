import { AppStateModel } from "./model";

export const initialState: AppStateModel = {
  topTrendingUsers: { total_count: -1, incomplete_results: true, items: [] },
  topActiveUsers: { total_count: -1, incomplete_results: true, items: [] },
  topRepos: { total_count: -1, incomplete_results: true, items: [] },
};
