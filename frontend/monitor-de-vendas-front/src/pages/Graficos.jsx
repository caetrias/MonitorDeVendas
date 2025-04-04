import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useVendas from "../hooks/useVendas";
import ChartWrapper from "../components/ChartWrapper";
import DateFilter from "../components/DateFilter";
import ExportButton from "../components/ExportButton";
import "./Graficos.css";

function Graficos() {
    const [filtro, setFiltro] = useState({ start: null, end: null });
    const dados = useVendas(filtro.start, filtro.end);


    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate("/");
    };


    const handleFiltro = (start, end) => {
        setFiltro({ start, end });
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#fff", marginBottom: "1rem" }}>Dashboard de Vendas</h1>

            <DateFilter onFilter={handleFiltro} />

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
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

            <ExportButton data={dados} /><br/><br/>
            <button onClick={handleVoltar} className="voltar-btn">
                ← Voltar ao Login
            </button>

        </div>
    );
}

export default Graficos;
