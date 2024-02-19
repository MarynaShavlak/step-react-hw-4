import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './utils/scrolToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router basename="/step-react-hw-4/">
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
);
