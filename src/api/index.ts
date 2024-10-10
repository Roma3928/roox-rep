import publicApi, { IPublicApi } from './public';

export interface IApi {
  public: IPublicApi;
}

const api: IApi = {
  public: publicApi,
};

export default api;
