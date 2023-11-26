import { encode } from 'querystring';
import { container } from '../src/store/swstore';
import { getRunningQueriesThunk, people } from '../src/store/sw/sw.api';
import { IData, IPerson } from '../src/models/interface';
import Search from '../src/components/Search/Search';
import Cards from '../src/components/Cards/Cards';
import Pagination from '../src/components/Pagination/Pagination';
import ErrorButton from '../src/components/ErrorButton/ErrorButton';
import React from 'react';

export const getServerSideProps = container.getServerSideProps(
  (store) => async (context) => {
    const searchParams = new URLSearchParams(encode(context.query));

    store.dispatch(people.initiate(searchParams.toString()));

    const [result] = await Promise.all(
      store.dispatch(getRunningQueriesThunk())
    );

    return {
      props: {
        people: result.data || null,
      },
    };
  }
);

type Props = {
  people: IData<IPerson>;
};

function Main({ people }: Props) {
  return (
    <main>
      <Search />
      <ErrorButton />
      <Cards data={people?.results} key="1" />
      <Pagination totalPage={people.count} />
    </main>
  );
}

export default Main;
