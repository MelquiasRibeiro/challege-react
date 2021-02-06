import React from 'react';
import { ToastContainer}from 'react-toastify'
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
