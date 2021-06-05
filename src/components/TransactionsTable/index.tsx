import React, { useContext, useEffect, useState } from 'react'
import { TransactionProps, useTransactions } from '../../hooks/useTransactions'

import {Container} from './styles'


export function TransactionsTable(){
 
  const data = useTransactions();
  const {transactions}= data

  
  
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
            {transactions.length > 0 && transactions.map((t: TransactionProps) => (
            <tr key={t.id} >
              <td >{t.title}</td>
              <td className={t.type} >{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency:"BRL"
              }).format(t.amount)}</td>
              <td>{t.category}</td>
              <td>{ t.createdAt &&  new Intl.DateTimeFormat('pt-BR').format(new Date(t.createdAt!!))}</td>
            </tr>
            ))}
            
            
          </tbody>
        </table>
    </Container>
  )
}