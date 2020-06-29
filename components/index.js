import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ThemeContextProvider } from './Providers/Theme';


// eslint-disable-next-line no-undef
ReactDOM.render((
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>), // eslint-disable-next-line no-undef
document.getElementById('app'));
