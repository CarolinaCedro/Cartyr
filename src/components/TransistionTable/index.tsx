
import { useContext } from "react";
import { TransictionContext } from "../../TransictionContext";
import { Container } from "./styles";
export function TransistionTable(){

  const data =  useContext(TransictionContext)

  return (

    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {data.map(transaction =>(
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                  style:'currency',
                  currency:'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
          </tr> 
          ))}
        </tbody>
      </table>
    </Container>
  )
}