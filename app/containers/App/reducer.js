/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  users: {},
  usersLoading: false,
  usersError: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case GET_USERS:
        draft.usersLoading = true;
        draft.usersError = false;
        draft.users = {};
        break;

      case GET_USERS_SUCCESS:
        draft.users = action.users;
        draft.usersLoading = false;
        draft.usersError = false;
        break;

      case GET_USERS_FAILURE:
        draft.usersError = action.error;
        draft.usersLoading = false;
        break;
    }
  });

export default appReducer;
