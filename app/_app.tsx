import '../styles/global.css';

import { Provider } from 'react-redux';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import MainLayout from '../src/components/MainLayout';
import { setUpSwStore } from '../src/store/swstore';

const store = setUpSwStore();

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
