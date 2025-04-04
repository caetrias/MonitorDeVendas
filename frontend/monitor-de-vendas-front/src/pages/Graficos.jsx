import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import "./Graficos.css";

const chartInstances = new Map();

function Graficos({ identificador, type }) {
    const [dados, setDados] = useState({ datas: [], reservas: [] });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (dados.datas.length > 0) {
            createGraph(identificador, type, dados);
        }
    }, [dados, identificador, type]);

    async function fetchData() {
        try {
            const token = localStorage.getItem("token"); // Pega o token armazenado
            if (!token) {
                console.error("Token JWT não encontrado. Faça login primeiro.");
                return;
            }

            const response = await axios.get("http://localhost:8081/vendas", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Mapeia os dados para os gráficos
            const datas = response.data.map((venda) => venda.dataVenda);
            const reservas = response.data.map((venda) => venda.quantidadeVendida);

            setDados({ datas, reservas });
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    return (
        <div className="graph-container">
            <h2 className="graph-title">Reservas por Dia</h2>
            <canvas id={identificador} className="graph-canvas" />
        </div>
    );
}

function createGraph(identificador, type, data) {
    const ctx = document.getElementById(identificador);
    if (!ctx) {
        console.error(`Canvas com id "${identificador}" não encontrado.`);
        return;
    }

    if (chartInstances.has(identificador)) {
        chartInstances.get(identificador).destroy();
    }

    const newChart = new Chart(ctx, {
        type,
        data: {
            labels: data.datas,
            datasets: [
                {
                    label: "Reservas por Dia",
                    data: data.reservas,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
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
                        text: "Quantidade de Reservas",
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
