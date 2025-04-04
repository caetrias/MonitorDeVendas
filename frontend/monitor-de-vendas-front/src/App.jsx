import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Graficos from "./pages/Graficos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/graficos"
        element={
          <>
            <Graficos
              identificador="grafico1"
              type="bar"
              titulo="Quantidade de Reservas por Dia"
            />
            <Graficos
              identificador="grafico2"
              type="line"
              titulo="Evolução de Vendas (R$) ao Longo do Tempo"
            />
          </>
        }
      />
      
    </Routes>
  );
}

export default App;
