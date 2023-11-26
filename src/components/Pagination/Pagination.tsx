import { ChangeEvent } from 'react';
import LimitSwitcher from '../LimitSwitcher/LimitSwitcher';
import Buttons from './Buttons/Buttons';
import { useRouter } from 'next/router';
import { getQueryParams } from '../queryParams';

type Props = {
  totalPage: number;
};

function Pagination({ totalPage }: Props) {
  const router = useRouter();
  const { page, limit } = getQueryParams(router.query);
  const countPage = Math.ceil(totalPage / limit);

  const changeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(event.target.value);
    router.push({
      pathname: '/',
      query: { limit: limit },
    });
  };

  const switchedPage = (value: number) => {
    router.push({
      pathname: '/',
      query: { page: value },
    });
  };

  return (
    <div className="pagination_container">
      <LimitSwitcher limit={limit} switcher={changeLimit} />
      <Buttons
        currentPage={page}
        prevClick={switchedPage}
        nextClick={switchedPage}
        countPage={countPage}
      />
    </div>
  );
}

export default Pagination;
