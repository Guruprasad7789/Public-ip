const express = require('express');
const app = express();
const cors = require('cors');

app.set('trust proxy', true)
app.use(cors());
app.get('/', (req, res) => {
  res.send(req.ip);
});

app.listen((process.env.PORT || 3000, () => {
  console.log('App listening on port (process.env.PORT || 3000');
});
