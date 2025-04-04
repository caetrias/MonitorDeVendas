import useVendas from "../hooks/useVendas";
import ChartWrapper from "../components/ChartWrapper";
import "./Graficos.css";

function Graficos() {
    const dados = useVendas();

    return (
        <div>
            <ChartWrapper
                identificador="grafico-barras"
                type="bar"
                titulo="Reservas por Dia"
                data={dados}
            />
            <ChartWrapper
                identificador="grafico-linhas"
                type="line"
                titulo="Vendas ao Longo do Tempo"
                data={dados}
            />
        </div>
    );
}

export default Graficos;
