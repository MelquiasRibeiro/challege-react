import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { ToastContainer}from 'react-toastify'
import Routes from './routes';
import GlobalStyle from './styles/global';
import  {GlobalProvider} from "./providers/globalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
          <GlobalStyle />
          <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          />
          <Routes />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
