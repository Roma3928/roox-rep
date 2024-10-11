import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './users/slice';
import * as usersActions from './users/actions';
import * as userProfileActions from './user-profile/actions';
import { userProfileSlice } from './user-profile/slice';

export const rootAction = {
  ...usersActions,
  ...usersSlice.actions,
  ...userProfileActions,
  ...userProfileSlice.actions,
};

export const rootReducer = combineReducers({
  users: usersSlice.reducer,
  userInfo: userProfileSlice.reducer,
});
