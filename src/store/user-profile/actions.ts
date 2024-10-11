import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { IUsersResponse } from '../../api/public/users/IUsersApi';
import { AxiosError } from 'axios';

export const fetchUserById = createAsyncThunk<IUsersResponse, { id: string }>(
  'userInfo/fetchUser',
  async ({ id }, thunkApi) => {
    try {
      return await api.public.users.getUserById(id);
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
