/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { IPerson } from '../models/interface';
import { useAppDispatch, useAppSelector } from './redux';
import { usePeopleQuery } from '../store/sw/sw.api';
import { loaderSlice } from '../store/reducers/loaderSlice';

function usePeople() {
  const dispatch = useAppDispatch();
  const { StoreLoader } = useAppSelector((state) => state.loaderReducer);
  const { changeStateLoader } = loaderSlice.actions;
  const maxResult = useRef<number>(0);
  const peopleData = useRef<IPerson[]>([]);
  const loader = useRef<boolean>(false);
  const error = useRef<boolean>(false);
  const { searchRequest } = useAppSelector((state) => state.searchReducer);
  const { page } = useAppSelector((state) => state.pageReducer);
  const { limit } = useAppSelector((state) => state.limitReducer);
  const urlParams = new URLSearchParams();
  if (page) urlParams.append('page', String(page));
  if (searchRequest) urlParams.append('search', searchRequest);
  if (limit) urlParams.append('limit', String(limit));
  const { data, isLoading, isError, isFetching } = usePeopleQuery(
    String(urlParams)
  );
  peopleData.current = data?.results as IPerson[];
  loader.current = isLoading;
  error.current = isError;
  maxResult.current = data?.count as number;

  useEffect(() => {
    dispatch(changeStateLoader(isFetching));
  }, [isFetching]);

  console.log('CHANGE STORE: ', StoreLoader);

  return [
    peopleData.current,
    loader.current,
    error.current,
    maxResult.current,
  ] as const;
}

export default usePeople;
