import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { UserProvider } from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MemoryGame from './pages/Playroom/MemoryGame/MemoryGame';
import { MemoryGameProvider } from './context/MemoryGameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <MemoryGameProvider>
            <App />
          </MemoryGameProvider>
        </ShopProvider>
     </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


