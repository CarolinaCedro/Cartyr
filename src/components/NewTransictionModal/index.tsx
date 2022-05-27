import Modal from 'react-modal'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from './style';

interface NewTransictionModalProps{
  isOpen:boolean;
  onRequesClose:()=>void;
}

export function NewTransictionModal({isOpen,onRequesClose}:NewTransictionModalProps){
  return(
 
    <Modal
       isOpen={isOpen}
       onRequestClose={onRequesClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       >
         <button type='button' className='react-modal-button-close' onClick={onRequesClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
         </button>
        <Container>
            <h2>Cadastrar transação</h2>
            <input  placeholder='Titulo' />
            <input  type='number' placeholder='Valor' />
            <input  placeholder='Categoria' />
            <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}