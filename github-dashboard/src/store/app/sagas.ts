import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSearchedActiveUsers,
  fetchSearchedTrendingUsers,
  fetchTopActiveUsers,
  fetchTopRepos,
  fetchTopTrendingUsers,
} from "../../api/Services";
import { ReposModel } from "../../models/ReposModel";
import { UsersModel } from "../../models/UsersModel";
import { AppActions } from "./actions";

export function* handleFetchTrendingUsers(
  _: ReturnType<typeof AppActions.fetchTrendingUsers.request>
): SagaIterator {
  try {
    const response: UsersModel = yield call(fetchTopTrendingUsers);
    yield put(AppActions.fetchTrendingUsers.success(response));
  } catch (error) {
    yield put(AppActions.fetchTrendingUsers.failure());
  }
}

export function* handleFetchActiveUsers(
  _: ReturnType<typeof AppActions.fetchActiveUsers.request>
): SagaIterator {
  try {
    const response: UsersModel = yield call(fetchTopActiveUsers);
    yield put(AppActions.fetchActiveUsers.success(response));
  } catch (error) {
    yield put(AppActions.fetchActiveUsers.failure());
  }
}

export function* handleFetchTopRepos(
  _: ReturnType<typeof AppActions.fetchTopRepos.request>
): SagaIterator {
  try {
    const response: ReposModel = yield call(fetchTopRepos);
    yield put(AppActions.fetchTopRepos.success(response));
  } catch (error) {
    yield put(AppActions.fetchTopRepos.failure());
  }
}

export function* handleUpdateTrendingUsers({
  payload,
}: ReturnType<typeof AppActions.updateTrendingUsers.request>): SagaIterator {
  try {
    const response: UsersModel = yield call(
      fetchSearchedTrendingUsers,
      payload.search
    );
    yield put(AppActions.updateTrendingUsers.success(response));
  } catch (error) {
    yield put(AppActions.updateTrendingUsers.failure());
  }
}

export function* handleUpdateActiveUsers({
  payload,
}: ReturnType<typeof AppActions.updateActiveUsers.request>): SagaIterator {
  try {
    const response: UsersModel = yield call(
      fetchSearchedActiveUsers,
      payload.search
    );
    yield put(AppActions.updateActiveUsers.success(response));
  } catch (error) {
    yield put(AppActions.updateActiveUsers.failure());
  }
}

export function* handleUpdateTopRepos({
  payload,
}: ReturnType<typeof AppActions.updateTopRepos.request>): SagaIterator {
  try {
    const response: ReposModel = yield call(
      fetchSearchedActiveUsers,
      payload.search
    );
    yield put(AppActions.updateTopRepos.success(response));
  } catch (error) {
    yield put(AppActions.updateTopRepos.failure());
  }
}

export function* AppSagas(): SagaIterator {
  yield takeLatest(
    AppActions.fetchTrendingUsers.request,
    handleFetchTrendingUsers
  );
  yield takeLatest(AppActions.fetchActiveUsers.request, handleFetchActiveUsers);
  yield takeLatest(AppActions.fetchTopRepos.request, handleFetchTopRepos);
  yield takeLatest(
    AppActions.updateTrendingUsers.request,
    handleUpdateTrendingUsers
  );
  yield takeLatest(
    AppActions.updateActiveUsers.request,
    handleUpdateActiveUsers
  );
  yield takeLatest(AppActions.updateTopRepos.request, handleUpdateTopRepos);
}

export default AppSagas;
