import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react';
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import {AiOutlineClose} from 'react-icons/ai'
import { Container, TransictionTypeContainer ,ButtonRadio} from './style';
import { TransictionContext } from '../../TransictionContext';



interface NewTransictionModalProps{
  isOpen:boolean;
  onRequesClose:()=>void;
}

export function NewTransictionModal({isOpen,onRequesClose}:NewTransictionModalProps){

  const { createTransiction} = useContext(TransictionContext)  
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState(0);
  const [type,setType] = useState('deposit');
  const [category,setCategory] =  useState('')


  async function handleCreateNewTransiction(e:FormEvent){
    e.preventDefault();    

    await createTransiction({
          title,
          amount,
          type,
          category
        })

     setTitle('')
     setAmount(0)
     setType('deposit')
     setCategory('')
     onRequesClose();
    
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
            value={amount}
            onChange={(e)=> setAmount(Number(e.target.value))}
            />
            <TransictionTypeContainer>
              <ButtonRadio 
               type = 'button'
               onClick={()=> 
               {setType('deposit');
               }}
               isActive={type === 'deposit'}
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
              setType('withdraw');
              }}
              isActive={type === 'withdraw'}
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