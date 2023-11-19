// import Search from './Search/Search';
// import ErrorButton from './ErrorButton/ErrorButton';
// import Pagination from './Pagination/Pagination';
// /* import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import usePeople from '../hook/usePeople';
// import Cards from './Cards/Cards';
// import { getLocalStorage } from '../api/localStorage'; */
// // import { SearchSetContext } from '../Context/searchContext';
// /* function useSetRequest() {
//   const setRequest = useContext(SearchSetContext);
//   if (!setRequest) {
//     throw new Error();
//   } else {
//     return setRequest;
//   }
// } */

// // const REQ_PARAM = 'page';
// // const LIMIT = 10;

// function MainLayout() {
//   // const [currentParams, setCurrentParams] = useState(getLocalStorage());
//   // const [limit, setLimit] = useState(LIMIT);
//   // const [params, setParams] = useSearchParams();
//   // const [result, loader, maxResult] = usePeople(currentParams);

//   /* const firstPage = () => {
//     setCurrentParams(1);
//     params.delete(REQ_PARAM);
//     setParams(params);
//   }; */

//   /*   const changePage = (value: number) => {
//     setCurrentParams(value);
//     setParams({ Page: String(value) });
//   }; */

//   /*   const changeLimit = (value: number) => {
//     setLimit(value);
//     firstPage();
//   }; */

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const clickSearch = (value: string) => {
//     setCurrentParams(value);
//     // firstPage();
//   };

//   return (
//     <div className="container">
//       <Search click={clickSearch} />
//       <ErrorButton />
//       <Cards data={result} limit={limit} loader={loader} />
//       <Pagination totalPage={maxResult} />
//     </div>
//   );
// }

// export default MainLayout;
