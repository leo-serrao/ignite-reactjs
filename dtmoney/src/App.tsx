import { useState } from "react";
import { GlobalStyle } from "./styles/global";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransacionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransacionModalOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
      isModalOpen={isNewTransactionModalOpen} 
      onCloseNewTransactionModal={handleCloseNewTransactionModal}/>

      <GlobalStyle />
    </TransactionsProvider>
  );
}
