import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

// after react 18 - find a root Element
const rootElement = document.getElementById('root');

// create a root
const root = createRoot(rootElement);

// render root
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
