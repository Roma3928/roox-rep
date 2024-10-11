import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserById } from './actions';
import { IUserData, IUserProfileInitalState } from './type';

const initialState: IUserProfileInitalState = {
  user: null,
  isLoading: false,
  error: '',
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === 'string') state.error = payload;
      });
  },
});
