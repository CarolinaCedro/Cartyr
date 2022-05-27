import { useEffect } from "react";
import { Container } from "./styles";
export function TransistionTable(){

  useEffect(() => {
   fetch('http://localhost:3000/api/transaction')
   .then(response=>response.json()).then(data=>console.log(data));
  }, [])
  
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
          <tr>
            <td>Academia</td>
            <td className="deposit">R$100</td>
            <td>Esporte</td>
            <td>26/05/2022</td>
          </tr>
          <tr>
            <td>Jogos</td>
            <td className="withdraw">-R$300</td>
            <td>Lazer</td>
            <td>12/05/2022</td>
          </tr>

          <tr>
            <td>Desenvolvimento site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>05/05/2022</td>
          </tr>

          <tr>
            <td>Petshop</td>
            <td className="withdraw">-R$80</td>
            <td>etc</td>
            <td>10/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}