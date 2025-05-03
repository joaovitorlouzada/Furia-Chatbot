
# FURIA Chatbot com IA

Este projeto é um chatbot que usa IA para responder perguntas e interações, com uma interface web simples.

## Estrutura do Projeto

```
Furia Chatbot/
├── backend/
│   ├── app.py
│   ├── .env.example
│   ├── requirements.txt
│   └── venv/ (não incluído no repositório)
├── index.html
├── script.js
├── style.css
├── README.md
├── .gitignore
├── run.bat
└── run.sh
```

## Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot/backend
```

### 2. Crie e ative o ambiente virtual

#### Windows
```bash
python -m venv venv
venv\Scripts\activate
```

#### Linux/macOS
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Configure o ambiente
Crie um arquivo `.env` na pasta `backend/` baseado no `.env.example` e adicione sua chave da API.

### 5. Execute a aplicação
```bash
python app.py
```

Depois, abra o `index.html` no navegador para acessar a interface do chatbot.
