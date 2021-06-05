import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import {Container} from './styles'
interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: 'withdraw' | 'deposit';
  category: string;
  date: Date;
  dateFormatted: string;
}

export function TransactionsTable(){
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function getTransactions(){
      const response = await api.get('/transactions');
      const data = response ? response.data : [];
      
      setTransactions(data);

    }
    getTransactions();
   
  },[])

  return (
    <Container>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
            <tr>
              <td >{t.title}</td>
              <td className={t.type} >{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.date}</td>
            </tr>
            ))}
            
            
          </tbody>
        </table>
    </Container>
  )
}