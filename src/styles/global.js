import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root{
    min-height:100%;
  }
  body {
    background:#F6F6F6;
    -webkit-font-smoothing: antialised !important;
  }
  body, input, button {
    color: #3a8970;
    font-Size: 14px;
  }
  button {
    cursor: pointer;
  }
`;
