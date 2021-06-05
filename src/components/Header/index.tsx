import React, { useState } from 'react'
import {Container, Content} from './styles'
import logo from '../../assets/logo.svg'


  interface HeaderProps {
    handleOpenNewTransactionModal: () => void;
  }

export function Header({handleOpenNewTransactionModal}:HeaderProps){

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <button onClick={handleOpenNewTransactionModal} >Nova transação </button>
      </Content>
      
    </Container>
  )
}