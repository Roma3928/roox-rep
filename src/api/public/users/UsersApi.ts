import { apiBase } from '../apiBase';
import { IUsersApi, IUsersResponse } from './IUsersApi';

export class UsersApi implements IUsersApi {
  async getUsers(): Promise<IUsersResponse[]> {
    const response = await apiBase.get<IUsersResponse[]>('/users');

    return response.data;
  }

  async getUserById(id: string): Promise<IUsersResponse> {
    const response = await apiBase.get<IUsersResponse>(`/users/${id}`);

    return response.data;
  }
}
