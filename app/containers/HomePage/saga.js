/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, GET_USERS } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  getUsersSuccess,
  getUsersFailure
} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

import { getUsersService } from '../../services/user.service';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getUsersSaga() {
  try {
    const users = yield call(getUsersService);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_USERS, getUsersSaga);
}
