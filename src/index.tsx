import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ScrollToTop } from './utils/scrolToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createHashRouter([
  {
    path: '/*',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
]);

root.render(
  <React.StrictMode>
    {/* <Router>
      <ScrollToTop />
      <App />
      
    </Router> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
