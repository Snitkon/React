import { useRef } from 'react';
import './styled.css';
import { useRouter } from 'next/router';
import { getQueryParams } from '../queryParams';
// import { useSearchParams } from 'next/navigation';

function Search() {
  const router = useRouter();
  const text = useRef<HTMLInputElement>(null);
  // const [param, setParam] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { search } = getQueryParams(router.query);

  const clickButtonSearch = () => {
    const value = text.current?.value.trim() || '';
    // param.delete('page');
    router.push({
      pathname: '/',
      query: { search: value },
    });
  };

  return (
    <div className="search_container">
      <form>
        <input
          ref={text}
          className="input form-control me-sm-2"
          placeholder="Search"
          type="text"
          defaultValue={search}
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
