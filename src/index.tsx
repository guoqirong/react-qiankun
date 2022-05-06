import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';
import { qiankunApp } from './constants';
import useEventBus from './utils/eventBus';

// eslint-disable-next-line react-hooks/rules-of-hooks
const [event] = useEventBus();

registerMicroApps(qiankunApp.map((item: any) => {
  item.props = {
    userPro: 'react-qiankun',
    entry: item.entry,
  };
  return item;
}), {
  beforeLoad: (app) => {
    console.log('before load', app.name);
    return new Promise<void>((resolve) => {
      resolve();
    });
  },
  afterMount: (app) => {
    console.log('after mount', app.name);
    event.emit('qiankun-child-loading', false);
    return new Promise<void>((resolve) => {
      resolve();
    });
  },
});
// 启动 qiankun
start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
