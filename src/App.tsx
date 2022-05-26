import { Dashborad } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashborad/>
      <Summary/>
      <GlobalStyles/>
    </>
  );
}

