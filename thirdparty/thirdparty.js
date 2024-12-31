const express = require('express');
const path = require('path');
const app = express();
const port = 4001;

app.use(express.static('thirdparty'));

app.get('/', (req, res) => {
  res.cookie('__Host-third', '---', { 
    secure: true, 
    maxAge: 84600 * 1000, 
    path: '/', 
    sameSite: 'None', 
    partitioned: true 
  });

  res.cookie('domain+third', '---', { 
    secure: true, 
    maxAge: 84600 * 1000, 
    path: '/', 
    sameSite: 'None', 
    partitioned: true 
  });

  res.cookie('third', '---', { 
    secure: true, 
    maxAge: 84600 * 1000, 
    path: '/', 
    sameSite: 'None'
  });

  res.cookie('domain+third', '---', { 
    secure: true, 
    maxAge: 84600 * 1000, 
    path: '/', 
    sameSite: 'None' 
  });

  res.sendFile('thirdparty.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Third party service is running on http://localhost:${port}`);
});

