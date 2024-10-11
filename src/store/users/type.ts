import { IUsersResponse } from '../../api/public/users/IUsersApi';

export interface IUsersInitalState {
  users: IUsersResponse[];
  totalCount: number;
  isLoading: boolean;
  error: string;
}
