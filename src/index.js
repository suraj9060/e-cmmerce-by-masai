import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import { BrowserRouter } from "react-router-dom"
import { ChakraProvider  } from "@chakra-ui/react";
import axios from "axios"


axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] = "application/json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
       </Provider> 
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
   
);


