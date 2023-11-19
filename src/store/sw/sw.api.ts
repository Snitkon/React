import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData, IPerson } from '../../models/interface';

export const swApi = createApi({
  reducerPath: 'people/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/',
  }),
  endpoints: (build) => ({
    people: build.query<IData<IPerson>, number>({
      query: (page: number) => ({
        url: 'api/people',
        params: {
          page: page,
        },
      }),
    }),
    person: build.query<IPerson, number>({
      query: (id: number) => `api/people/${id}`,
    }),
    search: build.query<IData<IPerson>, string>({
      query: (search: string) => ({
        url: 'api/people',
        params: {
          search: search,
        },
      }),
    }),
  }),
});

export const {
  usePeopleQuery,
  useLazyPeopleQuery,
  useLazyPersonQuery,
  useLazySearchQuery,
} = swApi;
