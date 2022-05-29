import { useState } from "react"
import { TransactionProvider } from "./hooks/useTransaction";
import Modal from 'react-modal';
import { Dashborad } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { TransistionTable } from "./components/TransistionTable";
import { GlobalStyles } from "./styles/global";
import {createServer, Model} from 'miragejs'
import { NewTransictionModal } from "./components/NewTransictionModal";


createServer({
  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions :[
        {
          id:1,
          title: 'Criação de site',
          type: 'deposit',
          amount: 10000,
          category:'Freelancer',
          createdAt: new Date('2022-05-01 11:08:00')
        },
        {
          id:2,
          title: 'Aluguel Apartamento',
          type: 'withdraw',
          amount: 1500,
          category:'Despesas Gerais',
          createdAt: new Date('2022-05-15 11:08:00')
        },
      ] 
    })
  },

  routes(){
    this.namespace = "api";
    this.get('transaction',()=>{
      return this.schema.all('transaction')
    })

    this.post('transaction', (Schema,req) =>{
      const data = JSON.parse(req.requestBody)
      return Schema.create('transaction',data);
      
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
    <TransactionProvider>
      <Header/>
      <Dashborad onOpenNewTransaction={handleOpenModal}/>
      <Summary/>
      <NewTransictionModal isOpen={isNewTransictionModal} onRequesClose={handleCloseModal}/>
      <TransistionTable/>
      <GlobalStyles/>
    </TransactionProvider>
  );
}

