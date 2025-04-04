import { useState } from "react";

function DateFilter({ onFilter }) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(start, end);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem", textAlign: "center" }}>
            <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
            <span style={{ margin: "0 1rem" }}>até</span>
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
            <button type="submit" style={{ marginLeft: "1rem" }}>Filtrar</button>
        </form>
    );
}

export default DateFilter;
