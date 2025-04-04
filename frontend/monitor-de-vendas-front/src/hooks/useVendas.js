import { useEffect, useState } from "react";
import axios from "axios";

function useVendas(startDate, endDate) {
    const [dados, setDados] = useState({ datas: [], reservas: [], valores: [] });

    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const response = await axios.get("http://localhost:8081/vendas", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                let data = response.data;

                // Filtro de datas
                if (startDate && endDate) {
                    const start = new Date(startDate);
                    const end = new Date(endDate);
                    data = data.filter(venda => {
                        const vendaData = new Date(venda.dataVenda);
                        return vendaData >= start && vendaData <= end;
                    });
                }

                const datas = data.map(venda => venda.dataVenda);
                const reservas = data.map(venda => venda.quantidadeVendida);
                const valores = data.map(venda => venda.valorTotal);

                setDados({ datas, reservas, valores });
            } catch (err) {
                console.error("Erro ao buscar dados:", err);
            }
        }

        fetchData();
    }, [startDate, endDate]);

    return dados;
}

export default useVendas;
