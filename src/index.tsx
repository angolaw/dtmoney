import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', ()=> {
      return [
        {
          id: 1,
          title: 'Transaction1',
          amount: 400,
          type: 'withdraw',
          category: 'Food',
          date: new Date()
        },
        {
          id: 2,
          title: 'Transaction2',
          amount: 6000,
          type: 'deposit',
          category: 'Freelas',
          date: new Date()
        },
        {
          id: 3,
          title: 'Transaction3',
          amount: 600,
          type: 'withdraw',
          category: 'Bills',
          date: new Date()
        },
      ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
