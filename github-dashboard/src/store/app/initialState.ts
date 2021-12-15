import { AppStateModel } from "./model";

export const initialState: AppStateModel = {
  trendingUsers: {
    users: { total_count: -1, incomplete_results: true, items: [] },
    hasError: false,
  },
  activeUsers: {
    users: { total_count: -1, incomplete_results: true, items: [] },
    hasError: false,
  },
  repos: {
    repos: { total_count: -1, incomplete_results: true, items: [] },
    hasError: false,
  },
};
