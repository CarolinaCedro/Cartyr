import { type } from "os";
import { createContext } from "react";
import { useEffect,useState,ReactNode} from "react";


import { api } from "./services/api";

interface Transaction  {
  id:number,
  title:string,
  type:string,
  amount:number,
  createdAt:string,
  category:string
}
interface transactionContextData{
  data:Transaction[],
  createTransiction:(transaction:transactionInput) => Promise <void>;
}

type transactionInput = Omit<Transaction, 'id' | 'createdAt'>
interface transactionProviderProps{
  children:ReactNode
}

export const TransictionContext = createContext<transactionContextData>(
  {} as transactionContextData 
  );

export function TransactionProvider({children}:transactionProviderProps){
  const [data,setData] = useState <Transaction []>([]);

  useEffect(() => {
    
      api.get('/transaction')
      .then( res => setData(res.data.transactions))  
     
  }, [])

  async function createTransiction (transictionInput:transactionInput){  
    const response = await api.post('transaction',{
      ...transictionInput,
      createdAt: new Date()
    })

    const {transaction} = response.data;

    setData([
      ...data,
      transaction
    ])
    
  }
  return (
    <TransictionContext.Provider value={{data,createTransiction}}>
      {children}
    </TransictionContext.Provider>
  )
}