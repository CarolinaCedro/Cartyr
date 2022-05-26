import { Container, Content } from "./styles"
import setUp from '../../assets/setUp.svg'
import setdown from '../../assets/setdown.svg'
import moneyWhite from '../../assets/moneyWhite.svg'



export function Summary(){
  return (
    <Container>
      <Content>
      <div>
          <header>
          <p>Entradas</p>
          <img src={setUp} alt="" />
          </header>
          <strong>R$ 1.000.00</strong>
      </div>

      <div>
          <header>
          <p>- Saídas</p>
          <img src={setdown} alt="" />
          </header>
          <strong>R$ 500.00</strong>
      </div>
      <div className="backgroudHighLigth">
          <header>
          <p>Total</p>
          <img src={moneyWhite} alt="" />
          </header>
          <strong>R$ 500.00</strong>
      </div>
      </Content>
     
    </Container>
  )
}