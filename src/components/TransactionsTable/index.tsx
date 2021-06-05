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
      const data = response ? response.data.transactions : [];
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
            {transactions.length > 0 && transactions.map((t) => (
            <tr key={t.id} >
              <td >{t.title}</td>
              <td className={t.type} >{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency:"BRL"
              }).format(t.amount)}</td>
              <td>{t.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(t.date))}</td>
            </tr>
            ))}
            
            
          </tbody>
        </table>
    </Container>
  )
}