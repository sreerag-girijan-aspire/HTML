import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import AboutPage from './About';
import Profile from './Profile';
import List from './List';
import MyAppUseState from './UseState';
import UseStateShared from './UseStateShared';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    <AboutPage/>
    <Profile/>
    <List/>
    <MyAppUseState/>
    <UseStateShared/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();