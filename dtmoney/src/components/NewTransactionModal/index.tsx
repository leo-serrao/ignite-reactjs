import Modal from 'react-modal'
import { useState } from 'react'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isModalOpen: boolean,
  onCloseNewTransactionModal: () => void
}

export function NewTransactionModal({isModalOpen, onCloseNewTransactionModal} : NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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

        <Container>
          <h2>Cadastrar Transação</h2>

          <input 
          placeholder="Título" 
          />

          <input
          type="number" 
          placeholder="Valor" 
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
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}

