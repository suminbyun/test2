const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('www'));
app.use(express.static('css'));

app.get('/', (req, res) => {
  res.cookie('www', '---', {
    maxAge: 86400000, 
    sameSite: 'None', 
    httpOnly: true,
    secure: true, 
    path: '/', 
    partitioned: true 
  });

  res.sendFile('www.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`running on port ${port}...`);
});

