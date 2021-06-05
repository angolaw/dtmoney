import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction: Model
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento App',
          amount: 4500,
          type: 'deposit',
          category: 'Renda Extra',
          date: new Date()
        },
        {
          id: 2,
          title: 'Desenvolvimento Website',
          amount: 2000,
          type: 'deposit',
          category: 'Renda Extra',
          date: new Date()
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 2000,
          type: 'withdraw',
          category: 'Pagamentos',
          date: new Date()
        },
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', ()=> {
      return this.schema.all('transaction')
    })
    this.post('/transactions',(schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
