import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import BookContextProvider from './contexts/BookContextProvider';

ReactDOM.render(
  <React.StrictMode>
  <BookContextProvider>
    <App />
  </BookContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
