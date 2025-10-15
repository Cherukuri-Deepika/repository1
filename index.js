const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const secret = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send(`👋 Hello from ConfigMap: ${process.env.APP_MSG || "Default Message"}`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

console.log('Secret:', secret);

