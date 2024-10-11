import { IUsersResponse } from '../../api/public/users/IUsersApi';

export interface IUserData extends IUsersResponse {
  comment: string;
}

export interface IUserProfileInitalState {
  user: IUsersResponse | IUserData | null;
  isLoading: boolean;
  error: string;
}
