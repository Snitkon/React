import ErrorButton from './ErrorButton/ErrorButton';
import Pagination from './Pagination/Pagination';
import usePeople from '../hook/usePeople';
import Cards from './Cards/Cards';
import Search from './Search/Search';

function MainLayout() {
  const [result, loader, error, maxResult] = usePeople();

  return (
    <div className="container">
      <Search />
      <ErrorButton />
      <Cards error={error} data={result} loader={loader} />
      <Pagination totalPage={maxResult} />
    </div>
  );
}

export default MainLayout;
