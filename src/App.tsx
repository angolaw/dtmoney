import React, {useState} from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
function App() {
 const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    < >
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}  />
      <Dashboard/>
      <GlobalStyle/>
      <Modal  
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>


      </Modal>
    </>
  );
}

export default App;
