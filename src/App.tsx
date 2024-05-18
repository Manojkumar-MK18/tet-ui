import { createGlobalStyle } from "styled-components";
import Home from "./Home";

function App() {
  const GlobalStyle = createGlobalStyle`
    body{

    font-family: "Kanit", sans-serif;
    }
  `;
  return (
    <>
      <Home />
      <GlobalStyle/>
    </>
  );
}

export default App;
