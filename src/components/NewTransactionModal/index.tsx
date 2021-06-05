import React, { useState } from "react";
import Modal from 'react-modal';
import { Container,RadioBox,TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps){
  
  const [transactionType, setTransactionType] = useState('deposit')
  
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
      <Container>
      <h2>Cadastrar Transação</h2>
      
      <input type="text" placeholder="Nome" />
      <input type="number" placeholder="Preço" />
      <TransactionTypeContainer>
        <RadioBox type="button" isActive={transactionType === 'deposit'}  onClick={() => {setTransactionType('deposit')}} >
          <img src={incomeImg} alt="Entrada" />
         <span>Entrada</span>
        </RadioBox>
        <RadioBox type="button" isActive={transactionType === 'withdraw'} onClick={() =>{ setTransactionType('withdraw')}}>
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input type="text" placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    

      </Container>

      </Modal>
  )
}