import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StepperProvider} from "./Components/Steppers/Context";

ReactDOM.render(
  <React.StrictMode>
      <StepperProvider>
          <App />
      </StepperProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
