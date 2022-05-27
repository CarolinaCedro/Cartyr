import { useState } from "react"
import Modal, { setAppElement } from 'react-modal';
import { Dashborad } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransistionTable } from "./components/TransistionTable";
import { GlobalStyles } from "./styles/global";
import {createServer} from 'miragejs'
import { NewTransictionModal } from "./components/NewTransictionModal";

createServer({
  routes(){
    this.namespace = "api";
    this.get('transaction',()=>{
      return [{
        id:1,
        title:'Transaction 1',
        amount:500,
        type:'deposit',
        category:'Food',
        createdAt:new Date()
      },{
        id:2,
        title:'Transaction 2',
        amount:500,
        type:'deposit',
        category:'Food',
        createdAt:new Date()
      },{
        id:3,
        title:'Transaction 3',
        amount:500,
        type:'deposit',
        category:'Food',
        createdAt:new Date()
      },{
        id:4,
        title:'Transaction 4',
        amount:500,
        type:'deposit',
        category:'Food',
        createdAt:new Date()
      },
    
    
    ]
    })
  }
})

Modal.setAppElement('#root')

export function App() {
  const [isNewTransictionModal,setIsNewTransictionModal] = useState(false);

  function handleOpenModal(){
  setIsNewTransictionModal(true);
  }

  function handleCloseModal(){
    setIsNewTransictionModal(false)
  }
  return (
    <>
      <Header/>
      <Dashborad onOpenNewTransaction={handleOpenModal}/>
      <Summary/>
      <NewTransictionModal isOpen={isNewTransictionModal} onRequesClose={handleCloseModal}/>
      <TransistionTable/>
      <GlobalStyles/>
    </>
  );
}

