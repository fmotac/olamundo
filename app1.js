// Importa o módulo express
const express = require('express');

// Cria uma instância da aplicação express
const app = express();

// Define a porta em que o servidor irá escutar
// Usa a porta do ambiente (se disponível) ou 3000 por padrão
const PORT = process.env.PORT || 3000;

// Define uma rota para o caminho raiz '/'
// Quando uma requisição GET é feita para '/', a função é executada
app.get('/', (req, res) => {
  // Envia a string 'Olá Mundo!' como resposta
  res.send('Olá Mundo!');
});

// Inicia o servidor e o faz escutar na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});