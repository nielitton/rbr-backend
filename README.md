# Teste para RBR Digital

Olá, aqui seguem instruções de instalação do backend para o teste técnico RBR Digital.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- npm (Node Package Manager)
- MongoDB (ou acesso a um serviço de banco de dados MongoDB, como o MongoDB Atlas)

## Inicialização do Projeto

Siga estas etapas para inicializar o projeto em sua máquina:

1. **Clone o Repositório**

   ```bash
   git clone git@github.com:nielitton/rbr-backend.git

2. **Instale as dependências**

   ```bash
   npm i ou npm install

3. **Você irá precisa de variáveis de ambiente**
   dentro da raiz do projeto, você deve criar um arquivo chamado **.env** e dentro dele, colar o seguinte.

   ```bash
   DB_STRING="mongodb+srv://nielitonsousa3040:8GDdrKcUOKuI5CY2@cluster0.xyrqk8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   APP_PORT=3000

   isso irá lhe fornecer variáveis de ambiente para poder rodar o projeto.

4. **Quando todos os passos estiverem concluídos, você podera rodar o projeto**
   
   ```bash
   npm start 

   O projeto irá rodar e lhe dirá em que porta está rodando e se ele se conectou com o banco ou não

5. **Para testar o projeto você pode usar os endpoints e dados que serão listados abaixo**
   Criação de funcionário: POST - api/employees
   Visualização de todos os funcionários: GET - api/employees ou api/employees?sort=false (Para organizar por data de criação decrescente)
   Visualização de apenas um funcionário: GET - api/employees/<idDoFuncionário>
   Edição de funcionário: PUT - api/employees/<idDoFuncionário>
   Deleção de funcionário: DELETE - api/employees/<idDoFuncionário>

   **Para criação e atualização de funcionário, deve ser passado o seguinte body**
   ```bash
   {
    "name": "Final test update",
    "actions": "updating",
    "charge": "full stack",
    "department": "teste2"
   }

   Todos os campos são obrigatórios nas requisições de **POST** e **PUT**