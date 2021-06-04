import React from 'react'
import {Container, Content} from './styles'
import logo from '../../assets/logo.svg'
export function Header(){
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <button>Nova transação </button>
      </Content>
    </Container>
  )
}