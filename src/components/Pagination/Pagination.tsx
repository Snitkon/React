import { ChangeEvent } from 'react';
import './styled.css';
import LimitSwitcher from '../LimitSwitcher/LimitSwitcher';
import Buttons from './Buttons/Buttons';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { limitSlice } from '../../store/reducers/limitSlice';
import { pageSlice } from '../../store/reducers/pageSlice';
import { useSearchParams } from 'react-router-dom';

type Props = {
  totalPage: number;
};

function Pagination({ totalPage }: Props) {
  const dispatch = useAppDispatch();

  const { limit } = useAppSelector((state) => state.limitReducer);
  const { changeStateLimit } = limitSlice.actions;

  const { page } = useAppSelector((state) => state.pageReducer);
  const { changeStatePage } = pageSlice.actions;

  const countPage = Math.ceil(totalPage / limit);
  const [param, setParam] = useSearchParams();

  const changeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(event.target.value);
    dispatch(changeStateLimit(limit));
    dispatch(changeStatePage(1));
    param.delete('page');
    setParam(param);
  };

  const switchedPage = (value: number) => {
    param.delete('search');
    dispatch(changeStatePage(value));
    setParam({ page: String(value) });
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
