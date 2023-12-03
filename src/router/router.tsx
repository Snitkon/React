import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../components/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/first-form" element={} /> */}
      {/* <Route path="/second-form" element={} /> */}
    </>
  )
);

export default router;
