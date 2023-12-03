import FormsPage from './FormsPage';

import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <main>
        <button>
          <Link to="/first-form">First Form</Link>
        </button>
        <button>
          <Link to="/second-form">Second Form</Link>
        </button>
      </main>
      <div>
        <FormsPage />
      </div>
    </>
  );
}
