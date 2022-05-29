
import { useTransaction } from "../../hooks/useTransaction"
import { Container, Content } from "./styles"
import setUp from '../../assets/setUp.svg'
import setdown from '../../assets/setdown.svg'
import moneyWhite from '../../assets/moneyWhite.svg'


export function Summary(){
  const {data} = useTransaction();
  const summary = data.reduce((acc,transaction) => {
  if(transaction.type === 'deposit'){
    acc.deposits += transaction.amount;
    acc.total += transaction.amount;
  }else{
    acc.withdraw += transaction.amount;
    acc.total -= transaction.amount;
  }
  return acc;

 },{
    deposits:0,
    total:0,
    withdraw:0
 });

  return (
    <Container>
      <Content>
      <div>
          <header>
          <p>Entradas</p>
          <img src={setUp} alt="" />
          </header>
          <strong>
          {new Intl.NumberFormat('pt-BR',{
                  style:'currency',
                  currency:'BRL'
          }).format(summary.deposits)}
          </strong>
      </div>

      <div>
          <header>
          <p>- Saídas</p>
          <img src={setdown} alt="" />
          </header>
          <strong>
          {new Intl.NumberFormat('pt-BR',{
                  style:'currency',
                  currency:'BRL'
          }).format(summary.withdraw)}
          </strong>
      </div>
      <div className="backgroudHighLigth">
          <header>
          <p>Total</p>
          <img src={moneyWhite} alt="" />
          </header>
          <strong>
          {new Intl.NumberFormat('pt-BR',{
                  style:'currency',
                  currency:'BRL'
          }).format(summary.total)}
          </strong>
      </div>
      </Content>
     
    </Container>
  )
}