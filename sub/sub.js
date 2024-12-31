const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

app.use(express.static('sub'));
app.use(express.static('css'));

app.get('/', (req, res) => {
  res.cookie('sub', '---', {
    maxAge: 86400000, 
    sameSite: 'None', 
    httpOnly: true,
    secure: true, 
    path: '/', 
    partitioned: true 
  });

  res.sendFile('sub.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`running on port ${port}...`);
});