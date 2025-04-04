import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import userIcon from '../assets/user-icon.png';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setSenha] = useState("");
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const response = await axios.post("http://localhost:8081/auth/login", {
                username,
                password
            });

            localStorage.setItem("token", response.data.token);
            alert("Login bem-sucedido!");
            navigate("/graficos"); // Redireciona para a tela de gráficos

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Usuário ou senha incorretos!");
        }
    }

    return (
        <div className="form">
            <img src={userIcon} className="img" alt="User Icon" />
            <h1 className="form-header"> Login </h1>
            <input 
                id="username" 
                className="form-input" 
                placeholder="Usuário"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                id="senha" 
                type="password" 
                className="form-input" 
                placeholder="Senha"
                value={password} 
                onChange={(e) => setSenha(e.target.value)}
            />
            <button className="button-submit" type="submit" onClick={handleLogin}> Log in </button>
        </div>
    );
}

export default Login;
