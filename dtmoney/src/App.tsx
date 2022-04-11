import { useState } from "react";
import { GlobalStyle } from "./styles/global";


import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransacionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransacionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransacionModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
      isModalOpen={isNewTransactionModalOpen} 
      onCloseNewTransactionModal={handleCloseNewTransactionModal}/>

      <GlobalStyle />
    </>
  );
}
