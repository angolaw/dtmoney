import React, { useState} from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import {  TransactionsProvider } from './TransactionsContext';

//fix warning
Modal.setAppElement('#root')


function App() {
 const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider  >
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}  />
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    </TransactionsProvider>
  );
}

export default App;
