import { encode, ParsedUrlQuery } from 'querystring';

export const getQueryParams = (query: ParsedUrlQuery) => {
  const queryParams = new URLSearchParams(encode(query));
  const page = Number(queryParams.get('page')) || 1;
  const limit = Number(queryParams.get('limit')) || 10;
  const search = queryParams.get('search') || '';

  return { limit, page, search };
};
