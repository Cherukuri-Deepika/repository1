const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('✅ Hello from OpenShift with no DB!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
