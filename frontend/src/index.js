import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//  import provider
import { FavouritesProvider } from "./context/FavouritesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* ✅ wrap here */}
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </React.StrictMode>
);

reportWebVitals();