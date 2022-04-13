import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";

const container=document.getElementById('root');
const root=ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
      <AuthContextProvider>
  
        <App />
      </AuthContextProvider>
     </React.StrictMode>,
)
// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>

//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

