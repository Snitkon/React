import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../components/MainPage';
import FirstForm from '../components/FirstForm/FirstForm';
import SecondFrom from '../components/SecondForm/SecondForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/first-form" element={<FirstForm />} />
      <Route path="/second-form" element={<SecondFrom />} />
    </>
  )
);

export default router;
