import { IUsersApi } from './users/IUsersApi';
import { UsersApi } from './users/UsersApi';

export interface IPublicApi {
  users: IUsersApi;
}

const usersApi: IUsersApi = new UsersApi();

const publicApi: IPublicApi = {
  users: usersApi,
};

export default publicApi;
