import { FormEvent, useState } from 'react'
import Modal from 'react-modal'



import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from '../../hooks/useTransactions'

import { Container, RadioBox, TransactionTypeContainer } from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isModalOpen: boolean,
  onCloseNewTransactionModal: () => void
}

export function NewTransactionModal({isModalOpen, onCloseNewTransactionModal} : NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title, 
      amount, 
      category, 
      type,  
    })
    
    setTitle('')
    setType('')
    setAmount(0)
    setCategory('')
    onCloseNewTransactionModal()
  }

  return (
  <Modal 
      isOpen={isModalOpen} 
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
        type="button" 
        onClick={onCloseNewTransactionModal}  
        className="react-modal-close">
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          />

          <input
          type="number" 
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox >

            <RadioBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value)}
          />

          <button type="submit" onClick={handleCreateNewTransaction}>
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}
