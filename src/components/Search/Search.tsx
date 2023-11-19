import { useRef } from 'react';
import './styled.css';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { searchSlice } from '../../store/reducers/searchSlice';
import { useSearchParams } from 'react-router-dom';
import { setLocalStorage } from '../../api/localStorage';

function Search() {
  const dispatch = useAppDispatch();
  const { searchRequest } = useAppSelector((state) => state.searchReducer);
  const { changeStateSearch } = searchSlice.actions;
  const text = useRef<HTMLInputElement>(null);
  const [param, setParam] = useSearchParams();
  console.log(param.values);

  const clickButtonSearch = () => {
    const value = text.current?.value || '';
    dispatch(changeStateSearch(value.trim()));
    setLocalStorage(value);
    param.delete('page');
    setParam(param);
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
