const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'dist'); //think this should be dist instead of public
const port = process.env.PORT || 3000;  //Will likely chnaqge absed on host specs

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
