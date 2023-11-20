import { useRef } from 'react';
import './styled.css';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { useSearchParams } from 'react-router-dom';
import { setLocalStorage } from '../../api/localStorage';
import { pageSlice } from '../../store/reducers/pageSlice';

function Search() {
  const dispatch = useAppDispatch();
  const { searchRequest } = useAppSelector((state) => state.searchReducer);
  const { changeStateSearch } = searchSlice.actions;
  const { changeStatePage } = pageSlice.actions;
  const text = useRef<HTMLInputElement>(null);
  const [param, setParam] = useSearchParams();

  const clickButtonSearch = () => {
    const value = text.current?.value || '';
    setLocalStorage(value);
    changeStatePage(1);
    dispatch(changeStateSearch(value.trim()));
    param.delete('page');
    setParam({ search: value });
  };

  return (
    <div className="search_container">
      <form>
        <input
          ref={text}
          className="input form-control me-sm-2"
          placeholder="Search"
          type="text"
          defaultValue={searchRequest}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={clickButtonSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
