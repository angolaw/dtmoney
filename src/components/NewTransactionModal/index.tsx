import React from "react";
import Modal from 'react-modal';
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'
interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps){
  
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
      <input type="text" placeholder="Categoria" />
      <button type="submit">Cadastrar</button>
    

      </Container>

      </Modal>
  )
}