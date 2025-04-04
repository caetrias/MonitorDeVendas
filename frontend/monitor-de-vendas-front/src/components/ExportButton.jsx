function ExportButton({ data }) {
    const handleExport = () => {
        if (!data || !data.datas?.length) return;

        let csv = "Data;Reservas;Valor Total (R$)\n";
        for (let i = 0; i < data.datas.length; i++) {
            const dataFormatada = new Date(data.datas[i]).toLocaleDateString("pt-BR"); // <-- formatando a data
            const linha = `${dataFormatada};${data.reservas[i]};${data.valores[i]}`;
            csv += linha + "\n";
        }

        console.log("CSV gerado:\n", csv); 

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "dados_vendas.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleExport} style={{ marginTop: "1rem" }}>
            Exportar CSV
        </button>
    );
}

export default ExportButton;
