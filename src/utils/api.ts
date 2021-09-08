import { DEFAULT_PAGINATION_LIMIT } from 'config';
import { ApiList, PaginationConfig, UserPreview } from 'models/interfaces';
import httpService from 'services/http.service';
import { buildRequestParams } from './helpers';

export async function getUsers(config?: PaginationConfig) {
  const { page, limit = DEFAULT_PAGINATION_LIMIT } = config ?? {};

  const requestParams = buildRequestParams({ page, limit });

  return httpService.get<ApiList<UserPreview>>(`/user${requestParams}`);
}
