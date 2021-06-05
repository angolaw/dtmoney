import styled, {css} from 'styled-components';
import {darken, transparentize} from 'polished'
interface TransactionButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}
const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}
export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size:1.5rem;
    margin-bottom: 2rem;
  }
  input{
    width: 100%;
    padding: 0 1.5rem;
    height:4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #d7d7d7;

    &::placeholder{
      color: var(--text-body);
    }
    & + input {
      margin-top:1rem;
    }

  }
  button[type="submit"]{
    width: 100%;
    padding:0 1.5rem;
    height:4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition:filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
export const RadioBox = styled.button<TransactionButtonProps>`
    height:4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    
    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
    justify-content: center;
    align-items: center;
    display: flex;
    transition: border-color 0.2s;
    &:hover{
      border-color: ${darken(0.1, '#d7d7d7')};
    }
    img{
      height: 1.25rem;
      width: 1.25rem;
    }
    span {
      display:inline-block;
      font-size: 1rem;
      margin-left: 1rem;
      color: var(--text-title);
    }
    .deposit-button{
      background: lighten(0.5, var(--green));
    }
    .withdraw-button{
      background: lighten(0.5, var(--red))
    }
`;