# 📊 Dashboard de Vendas - Projeto Full Stack

Este é um projeto Full Stack desenvolvido com foco na construção de uma aplicação interativa para visualização de dados de vendas. A aplicação exibe gráficos dinâmicos gerados a partir de uma API REST, permitindo análises visuais de desempenho ao longo do tempo.


---

## 🚀 Tecnologias Utilizadas

### 🛠️ Back-End (Spring Boot)

- **Spring Boot**: Framework Java que facilita o desenvolvimento de APIs RESTful com uma estrutura robusta e de fácil manutenção.
- **Spring Security + JWT**: Implementação de autenticação segura utilizando tokens JWT.
- **Banco de dados H2**: Banco em memória para testes rápidos e simples.
- **Lombok**: Reduz a verbosidade do código com anotações práticas.

### 💻 Front-End (React)

- **React.js**: Biblioteca JavaScript para construção de interfaces declarativas e reativas.
- **Axios**: Cliente HTTP para comunicação com a API.
- **Chart.js** (via `react-chartjs-2`): Criação de gráficos interativos e dinâmicos.
- **React Router Dom**: Controle de rotas entre páginas da aplicação.

---

## 📦 Como Executar Localmente

### Pré-requisitos

- Java 17+
- Node.js 18+
- NPM ou Yarn
- Git

### 🔙 Back-End

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do back-end
cd backend/MonitorDeVendasAPI

# Execute a aplicação Spring Boot
./mvnw spring-boot:run
```
A API ficará disponível por padrão em: http://localhost:8081


### 🔝 Front-End

```bash
# Em outra aba do terminal, vá até a pasta do front-end
cd frontend/monitor-de-vendas-front

# Instale as dependências
npm install

# Inicie a aplicação React
npm run dev
```
A interface estará disponível em: http://localhost:5173


### 🔐 Autenticação
A aplicação requer login para acessar os gráficos

```bash
Usuário: admin
Senha: senha123
```

### 📌 Observações
- O banco H2 já vem populado com dados de exemplo para facilitar a visualização.
- O projeto segue boas práticas de organização MVC, componentização e autenticação via JWT.
- O front-end utiliza filtros dinâmicos e apresenta gráficos interativos.