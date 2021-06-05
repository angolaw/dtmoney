import React, {useContext} from 'react'
import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionProps, TransactionsContext } from '../../TransactionsContext'

export function Summary(){

  const {transactions} = useContext(TransactionsContext);
  
  const totalDeposits = transactions.reduce((acc, current)=>{
    if(current.type === 'deposit'){
      return acc + current.amount;
    }
    return acc;
  },0)
  const totalWithdraws = transactions.reduce((acc, current)=>{
    if(current.type === 'withdraw'){
      return acc + current.amount;
    }
    return acc;
  },0)
 
 
  return (
    <Container>
       
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="income" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalDeposits)}</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="outcome" />
          </header>
          <strong> -{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalWithdraws)}</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Resumo</p>
            <img src={totalImg} alt="total" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalDeposits - totalWithdraws)}</strong>
        </div>
    </Container>
  )
}