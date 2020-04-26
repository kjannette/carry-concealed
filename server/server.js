const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist'); //think this should be dist instead of public

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up!');
});
