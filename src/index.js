import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import firebase from './firebase';

console.log(firebase)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
