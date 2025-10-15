const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`👋 Hello from ConfigMap: ${process.env.APP_MSG || "Default Message"}`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
