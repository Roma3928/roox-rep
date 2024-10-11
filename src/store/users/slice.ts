import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';
import { IUsersInitalState } from './type';

const initialState: IUsersInitalState = {
  users: [],
  totalCount: 0,
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    sortByCity: (state) => {
      state.users.sort((a, b) => a.address.city.localeCompare(b.address.city));
    },
    sortByCompany: (state) => {
      state.users.sort((a, b) => a.company.name.localeCompare(b.company.name));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.totalCount = payload.length;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === 'string') state.error = payload;
      });
  },
});
