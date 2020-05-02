import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      zoom: 1;
    }
    
  html {
    height: 100%;
    font-size: 10px;
  }

  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    zoom: 1;
    background-color: #f8f8f8;
    color: #000000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    user-select: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }

  body::-webkit-scrollbar {
    display: none;
  }

`;