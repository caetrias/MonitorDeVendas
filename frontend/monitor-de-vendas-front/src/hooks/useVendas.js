import { useEffect, useState } from "react";
import axios from "axios";

function useVendas() {
    const [dados, setDados] = useState({ datas: [], valores: [], reservas: [] });

    useEffect(() => {
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

        fetchData();
    }, []);

    return dados;
}

export default useVendas;
