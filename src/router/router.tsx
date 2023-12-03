import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={} />
      <Route path="/first-form" element={} />
      <Route path="/second-form" element={} />
    </>
  )
);

export default router;
