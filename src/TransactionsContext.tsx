import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";
export interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}
export type TransactionInput = Omit<TransactionProps, 'id'| 'date' | 'createdAt'>

interface TransactionsContextData {
  
  transactions: TransactionProps[];
  createTransaction:(transaction: TransactionInput) => Promise<void>;
  
}

interface TransactionsProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)
export function TransactionsProvider({children}:TransactionsProviderProps){
   const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function getTransactions(){
      const response = await api.get('/transactions');
      const data = response ? response.data.transactions : [];
      setTransactions(data);
    }
    getTransactions();
   
  },[])
  async function createTransaction(transactionInput: TransactionInput){
     const response =  await api.post('/transactions',{...transactionInput, createdAt: new Date()});
    const {transaction} = response.data;
    setTransactions([
      ...transactions,
      transaction
    ])
  }


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}} >
      {children}
    </TransactionsContext.Provider>
  )
}