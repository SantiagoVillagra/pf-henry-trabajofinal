import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../src/Redux/Store"
import App from './App';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

// Importar estilos de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';  // Puedes cambiar 'saga-blue' por el tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './custom-theme.css';  // Archivo CSS personalizado para ajustes adicionales

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
reportWebVitals(sendToVercelAnalytics);