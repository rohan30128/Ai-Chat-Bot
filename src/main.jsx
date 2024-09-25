
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider.jsx';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Provider>
    <App />
    </Provider>
    </BrowserRouter>
  ,
)
