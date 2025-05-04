
# FURIA Chatbot com IA

Este projeto é um chatbot interativo que utiliza a API do Gemini AI para responder perguntas sobre a equipe de eSports FURIA. Ele combina um front-end simples em HTML/CSS/JS com um back-end em Python, proporcionando uma experiência de usuário fluida e informativa.

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

## 🛠️ Tecnologias Utilizadas

### Front-end
- HTML5
- CSS3
- JavaScript (Vanilla)

### Back-end
- Python 3.x
- Flask (ou outra biblioteca utilizada)
- API do Gemini AI

### Outras Ferramentas
- Ambiente virtual (`venv`)
- Variáveis de ambiente (`.env`)
- `http.server` (servidor local para frontend)

## 🚀 Acesse o Chatbot Online

Você pode testar a versão do chatbot online através do seguinte link: [FURIA Chatbot](https://furia-chatbot-ruby.vercel.app/).

## 🌐 Hospedagem

O projeto está dividido em duas partes, cada uma hospedada em uma plataforma diferente:

- **Front-end**: hospedado na [Vercel](https://vercel.com), acessível em: [https://furia-chatbot-ruby.vercel.app/](https://furia-chatbot-ruby.vercel.app/)
- **Back-end**: hospedado na [Render](https://render.com), responsável por intermediar as requisições à API do Gemini AI (sem interface pública direta)

## Como rodar o projeto localmente 

### 1. Clone o repositório
```bash
git clone https://github.com/joaovitorlouzada/furia-chatbot.git
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




