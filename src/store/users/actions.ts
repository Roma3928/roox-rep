import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { IUsersResponse } from '../../api/public/users/IUsersApi';
import { AxiosError } from 'axios';

export const fetchUsers = createAsyncThunk<IUsersResponse[], void>(
  'users/fetchUsers',
  async (_, thunkApi) => {
    try {
      return await api.public.users.getUsers();
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return thunkApi.rejectWithValue(error.response?.data?.message || error.message);
      } else {
        return thunkApi.rejectWithValue('Unknown error occurred');
      }
    }
  },
);
