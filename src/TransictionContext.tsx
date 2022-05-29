import { createContext } from "react";
import { useEffect,useState,ReactNode} from "react";


import { api } from "./services/api";

export const TransictionContext = createContext<Transaction[]>([]);

interface Transaction  {
  id:number,
  title:string,
  type:string,
  amount:number,
  createdAt:string,
  category:string
}

interface transactionProviderProps{
  children:ReactNode
}

export function TransactionProvider({children}:transactionProviderProps){
  const [data,setData] = useState <Transaction []>([]);

  useEffect(() => {
    try {
      api.get('/transaction').then((res)=>{
        setData(res.data.transactions)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <TransictionContext.Provider value={data}>
      {children}
    </TransictionContext.Provider>
  )
}