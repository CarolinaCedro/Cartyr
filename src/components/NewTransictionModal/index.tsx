import Modal from 'react-modal'
import { FormEvent, useState } from 'react';
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import {AiOutlineClose} from 'react-icons/ai'
import { Container, TransictionTypeContainer ,ButtonRadio} from './style';
import { api } from '../../services/api';


interface NewTransictionModalProps{
  isOpen:boolean;
  onRequesClose:()=>void;
}

export function NewTransictionModal({isOpen,onRequesClose}:NewTransictionModalProps){

  
  const [title,setTitle] = useState('');
  const [value,setValue] = useState(0);
  const [typeTransiction,setTypeTransiction] = useState('deposit');
  const [category,setCategory] =  useState('')



  function handleCreateNewTransiction(e:FormEvent){
     e.preventDefault(); 
     const data = {
       title,
       value,
       typeTransiction,
       category
     }
     api.post('transaction',data)
  }
  

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
        <Container onSubmit={handleCreateNewTransiction}>
            <h2>Cadastrar transação</h2>
            <input  placeholder='Titulo' value={title}
             onChange={(e)=> setTitle(e.target.value)} 
            />

            <input  type='number' placeholder='Valor'
            value={value}
            onChange={(e)=> setValue(Number(e.target.value))}
            />
            <TransictionTypeContainer>
              <ButtonRadio 
               type = 'button'
               onClick={()=> 
               {setTypeTransiction('deposit');
               }}
               isActive={typeTransiction === 'deposit'}
               activeColor='green'
               >
                <img src={entradas} alt="" />
              <span>
                  Entrada
              </span>
              </ButtonRadio>

              <ButtonRadio  
              type='button'
              onClick={()=>{
              setTypeTransiction('withdraw');
              }}
              isActive={typeTransiction === 'withdraw'}
              activeColor='red'
              >
                <img src={saidas} alt="" />
              <span>
                  Saidas
              </span>
              </ButtonRadio>
            </TransictionTypeContainer>

            <input  placeholder='Categoria'
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}