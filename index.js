const express = require('express');
const app = express();
app.use(express.json());

app.post('/alanbase', (req, res) => {
  const { event, click_id } = req.body;
  if (!click_id) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required parameter: click_id',
      error_code: 'INVALID_PARAMETER'
    });
  }

  console.log(`Event received: ${event}, Click ID: ${click_id}`);
  // Здесь можно вставить вызовы к Zoho API и обработку событий

  res.json({
    status: 'success',
    message: 'Event received',
    data: req.body
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
