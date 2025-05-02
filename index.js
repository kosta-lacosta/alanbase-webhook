const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Обработка POST-запроса
app.post('/alanbase', (req, res) => {
  console.log('===== Входящий вебхук от Alanbase =====');
  console.log(JSON.stringify(req.body, null, 2));
  console.log('=======================================');

  res.json({ status: 'ok', message: 'Webhook получен' });
});

// Проверка, что сервер жив
app.get('/', (req, res) => {
  res.send('Alanbase webhook listener is running!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
