'use strict';

// configure environment variables (use .env)

require('dotenv').config();

const express = require('express');
const app = express();

//Cross Origin Resource Sharing
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT();

//test route

app.get('/testing', (request, response) => {
  console.log('As above...');
  let text = {asAbove: '...So below'};
  response.json(text);
});

//turn the server on

app.lisiten(PORT, () => console.log(`I hear you on PORT ${PORT}`));



