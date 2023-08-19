import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { MyProvider } from 'components/MyContecst';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <MyProvider>
        <App />
      </MyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
