import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData, IPerson } from '../../models/interface';

export const swApi = createApi({
  reducerPath: 'people/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/',
  }),
  tagTypes: ['People'],
  endpoints: (build) => ({
    people: build.query<IData<IPerson>, string>({
      query: (item: string) => ({
        url: `api/people/?${item}`,
      }),
      providesTags: ['People'],
    }),
    person: build.query<IPerson, number>({
      query: (id: number) => `api/people/${id}`,
    }),
    /* search: build.query<IData<IPerson>, string>({
      query: (search: string) => ({
        url: 'api/people',
        params: {
          search: search,
        },
      }),
    }), */
  }),
});

export const { useLazyPeopleQuery, useLazyPersonQuery, usePeopleQuery } = swApi;
