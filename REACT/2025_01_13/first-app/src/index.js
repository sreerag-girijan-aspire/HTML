import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import AboutPage from './About';
import Profile from './Profile';
import List from './List';
import MyAppUseState from './UseState';
// import UseStateShared from './UseStateShared';
// import { Htmls } from './UseStateShared';
import * as mod from './UseStateShared';
import Board from './TiTaTo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    <AboutPage/>
    <Profile/>
    <List/>
    <MyAppUseState/>
    {/* <UseStateShared/>
    <Htmls/> */}
    <mod.default/>
    <mod.Htmls/>
    <Board/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
