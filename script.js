@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Orbitron:wght@600&display=swap');

:root {
  --furia-gold: #d4af37;
  --furia-dark: #0a0a0a;
  --furia-gray: #1c1c1c;
  --white-soft: #eeeeee;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Barlow', sans-serif;
  background-color: var(--furia-dark);
  color: var(--white-soft);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.container {
  width: 95%;
  max-width: 500px;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 0 30px #d4af371a;
  padding: 20px;
  border: 1px solid #222;
  display: flex;
  flex-direction: column;
  height: 95vh;
}

.furia-header {
  background: linear-gradient(90deg, #d4af37, #b8860b);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.furia-logo {
  width: 70px;
  height: auto;
  background-color: white;
  padding: 8px;
  border-radius: 50%;
}

h1 {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: var(--furia-gold);
  font-size: 1.6rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.chat-box {
  flex: 1;
  overflow-y: auto;
  background-color: var(--furia-gray);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}

.message {
  margin: 8px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 85%;
  animation: fadeInUp 0.3s ease;
  word-wrap: break-word;
}

.user {
  background-color: var(--furia-gold);
  color: black;
  align-self: flex-end;
  text-align: right;
  box-shadow: 0 0 8px var(--furia-gold);
}

.bot {
  background-color: #1c1c1c;
  color: white;
  align-self: flex-start;
  text-align: left;
  box-shadow: 0 0 5px #ffffff22;
  border: 1px solid #333;
}

form {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #333;
  background-color: black;
  color: var(--furia-gold);
  font-family: monospace;
  font-size: 1rem;
  outline: none;
}

input::placeholder {
  color: #aaa;
}

button {
  background-color: var(--furia-gold);
  color: black;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

button:hover {
  background-color: #e6be57;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-height: 700px) {
  .container {
    height: 100vh;
  }
}
