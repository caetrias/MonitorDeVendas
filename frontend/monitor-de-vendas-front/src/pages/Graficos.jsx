import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import "./Graficos.css";

const chartInstances = new Map();

function Graficos({ identificador, type = "bar", titulo = "Reservas por Dia" }) {
    const [dados, setDados] = useState({ datas: [], valores: [], reservas: [] });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (dados.datas.length > 0) {
            createGraph(identificador, type, dados, titulo);
        }
    }, [dados, identificador, type, titulo]);

    async function fetchData() {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token JWT não encontrado. Faça login primeiro.");
                return;
            }

            const response = await axios.get("http://localhost:8081/vendas", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const datas = response.data.map((venda) => venda.dataVenda);
            const reservas = response.data.map((venda) => venda.quantidadeVendida);
            const valores = response.data.map((venda) => venda.valorTotal);

            setDados({ datas, reservas, valores });
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    return (
        <div className="graph-container">
            <h2 className="graph-title">{titulo}</h2>
            <canvas id={identificador} className="graph-canvas" />
        </div>
    );
}

function createGraph(identificador, type, data, titulo) {
    const ctx = document.getElementById(identificador);
    if (!ctx) {
        console.error(`Canvas com id "${identificador}" não encontrado.`);
        return;
    }

    if (chartInstances.has(identificador)) {
        chartInstances.get(identificador).destroy();
    }

    const chartData = {
        labels: data.datas,
        datasets: [
            {
                label: titulo,
                data: type === "line" ? data.valores : data.reservas,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
            },
        ],
    };

    const newChart = new Chart(ctx, {
        type,
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff",
                    },
                    title: {
                        display: true,
                        text: type === "line" ? "Valor Total (R$)" : "Quantidade de Reservas",
                        color: "#ffffff",
                    },
                },
                x: {
                    ticks: {
                        color: "#ffffff",
                    },
                    title: {
                        display: true,
                        text: "Datas",
                        color: "#ffffff",
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#ffffff",
                    },
                },
                tooltip: {
                    titleColor: "#ffffff",
                    bodyColor: "#ffffff",
                    backgroundColor: "#333333",
                },
            },
        },
    });

    chartInstances.set(identificador, newChart);
}

export default Graficos;
