import React, { FormEvent, useState } from "react";
import Modal from 'react-modal';
import { Container,RadioBox,TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps){
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [transactionType, setTransactionType] = useState('deposit')
  const [category, setCategory] = useState('')


  async function handleCreateNewTransaction(event:FormEvent){
    const transaction = {
      id: new Date().getTime(),
      title: title,
      amount: amount,
      type: transactionType,
      category: category,
      date: new Date()
    }
    await api.post('/transactions', transaction)
   
    
    
  }

  return (
    <Modal  
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"


      >
        <button onClick={onRequestClose} className="react-modal-close" >
          <img src={closeImg} alt="" />
        </button>
      <Container onSubmit={handleCreateNewTransaction} >
      <h2>Cadastrar Transação</h2>
      
      <input type="text" value={title} onChange={event => setTitle(event.target.value)}  placeholder="Nome" />
      <input type="number" value={amount}  onChange={event => setAmount(event.target.valueAsNumber)} placeholder="Preço" />
      <TransactionTypeContainer>
        <RadioBox 
          type="button" 
          activeColor="green"
          isActive={transactionType === 'deposit'}  
          onClick={() => {setTransactionType('deposit')}} >
          <img src={incomeImg} alt="Entrada" />
         <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button" 
          activeColor="red"
          isActive={transactionType === 'withdraw'} onClick={() =>{ setTransactionType('withdraw')}}>
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input type="text" value={category} onChange={event=> setCategory(event.target.value)}placeholder="Categoria" />
      <button type="submit" >Cadastrar</button>
    
      </Container>

      </Modal>
  )
}