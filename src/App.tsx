import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainLayout from './components/MainLayout';
import { setUpSwStore } from './store/swstore';

const store = setUpSwStore();

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
