import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod'
import App from './app';
import { FirebaseContext } from './context/firebase'
render(
  <>
    <FirebaseContext.Provider values={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

