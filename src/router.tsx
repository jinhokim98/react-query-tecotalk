import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Crews from './pages/crews/Crews';
import RequestBoundary from './components/common/RequestBoundary';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        path: '',
        element: (
          <RequestBoundary>
            <Crews />
          </RequestBoundary>
        ),
      },
    ],
  },
]);

export default router;
