import { useEffect } from "react";
import Chart from "chart.js/auto";

const chartInstances = new Map();

function ChartWrapper({ identificador, type = "bar", data, titulo }) {
    useEffect(() => {
        if (data && data.datas?.length > 0) {
            createGraph(identificador, type, data, titulo);
        }
    }, [data, identificador, type, titulo]);

    return (
        <div className="graph-container">
            <h2 className="graph-title">{titulo}</h2>
            <canvas id={identificador} className="graph-canvas" />
        </div>
    );
}

function createGraph(identificador, type, data, titulo) {
    const ctx = document.getElementById(identificador);
    if (!ctx) return;

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
                    ticks: { color: "#fff" },
                    title: {
                        display: true,
                        text: type === "line" ? "Valor Total (R$)" : "Quantidade de Reservas",
                        color: "#fff",
                    },
                },
                x: {
                    ticks: { color: "#fff" },
                    title: {
                        display: true,
                        text: "Datas",
                        color: "#fff",
                    },
                },
            },
            plugins: {
                legend: {
                    labels: { color: "#fff" },
                },
                tooltip: {
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    backgroundColor: "#333",
                },
            },
        },
    });

    chartInstances.set(identificador, newChart);
}

export default ChartWrapper;
