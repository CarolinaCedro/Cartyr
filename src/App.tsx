import { useState } from "react"
import { TransactionProvider } from "./TransictionContext";
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
          title: 'Teste 01',
          type: 'deposit',
          amount: 100.00,
          category:'categoria 01',
          createdAt: new Date('2022-12-14 11:08:00')
        },

        {
          id:2,
          title: 'Teste 02',
          type: 'deposit',
          amount: 200.00,
          category:'categoria 02',
          createdAt: new Date('2022-12-14 11:08:00')
        },
        {
          id:3,
          title: 'Teste 03',
          type: 'deposit',
          amount: 300.00,
          category:'categoria 03',
          createdAt: new Date('2022-12-14 11:08:00')
        },
        {
          id:4,
          title: 'Teste 04',
          type: 'deposit',
          amount: 10000,
          category:'categoria 04',
          createdAt: new Date('2022-12-14 11:08:00')
        }
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

