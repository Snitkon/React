import ErrorButton from './ErrorButton/ErrorButton';
// import Pagination from './Pagination/Pagination';
// import Cards from './Cards/Cards';
import Search from './Search/Search';
// import Details from './Cards/Details/Details';

function MainLayout() {
  return (
    <div className="container">
      <Search />
      <ErrorButton />
      {/* <Cards data={result} /> */}
      {/* <Pagination totalPage={maxResult} /> */}
    </div>
  );
}

export default MainLayout;
