import { useEffect, useRef, useState } from 'react';
import { IPerson, IResponse, Params } from '../models/interface';
import { useLazyPeopleQuery, useLazySearchQuery } from '../store/sw/sw.api';
import { setLocalStorage } from '../api/localStorage';

function usePeople(params: Params) {
  const [getPeople, { isFetching: peopleFetch }] = useLazyPeopleQuery();
  const [searchPeople, { isFetching: searchFetch }] = useLazySearchQuery();
  const [data, setData] = useState<IPerson[]>([]);
  const loader = peopleFetch || searchFetch;
  const error = useRef<boolean>(false);
  const maxResult = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof params === 'number') {
        try {
          setLocalStorage(params.toString());
          const results = await getPeople(params);
          const { data, isError } = results as IResponse<IPerson>;
          setData(data.results);
          error.current = isError;
          maxResult.current = data.count;
        } catch (e) {
          console.error('Not valid: ', (e as Error).message);
        }
      }
      if (typeof params === 'string') {
        try {
          setLocalStorage(params);
          const results = await searchPeople(params);
          const { data, isError } = results as IResponse<IPerson>;
          setData(data.results);
          error.current = isError;
          maxResult.current = data.count;
        } catch (e) {
          console.error('Not valid: ', (e as Error).message);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return [data, loader, maxResult.current] as const;
}

export default usePeople;
