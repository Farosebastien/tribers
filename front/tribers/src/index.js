import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

root.render(app);