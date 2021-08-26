import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Rodape from "./components/Rodape";
import styled from "styled-components";

const Fundo = styled.div`
  height: 100vh;
  background-color: #363636;
`;

function App() {
  return (
    <Fundo>
      <Header />
      <Content />
      <Rodape/>
    </Fundo>
  );
}

export default App;
