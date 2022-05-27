
import { Container, Content } from "./styles";

interface DashboardProps{
  onOpenNewTransaction : ()=>void;
}
export function Dashborad({onOpenNewTransaction}:DashboardProps){
  
  return (
    <Container>
      <Content>
      <button onClick={onOpenNewTransaction}>Transações</button>
      
      </Content>
    </Container>
   
  )
}