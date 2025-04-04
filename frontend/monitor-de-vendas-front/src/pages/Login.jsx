import "./Login.css";
import userIcon from '../assets/user-icon.png'

function Login(){
    return(<>
    <div className="form">
    <img src={userIcon} className="img"/>
    <h1 className="form-header"> Login </h1>
    <input id="username" className="form-input"></input>
    <input id="senha" type="password" className="form-input"></input>
    <button className="button-submit" type="submit" onClick={()=> {imprime()}}> Log in </button>
    </div>
    </>)
}

function imprime(){
    console.log("Nome: ", document.getElementById("username").value)
    console.log("Senha: ", document.getElementById("senha").value)
}

export default Login;