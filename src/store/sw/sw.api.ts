import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData, IPerson } from '../../models/interface';
import { HYDRATE } from 'next-redux-wrapper';

export const swApi = createApi({
  reducerPath: 'people/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['SWPeople'],
  endpoints: (build) => ({
    people: build.query<IData<IPerson>, string>({
      query: (item: string) => ({
        url: `api/people/?${item}`,
      }),
      providesTags: ['SWPeople'],
    }),
    person: build.query<IPerson, number>({
      query: (id: number) => `api/people/${id}`,
    }),
  }),
});

export const { people, person } = swApi.endpoints;

export const {
  util: { getRunningQueriesThunk },
} = swApi;
