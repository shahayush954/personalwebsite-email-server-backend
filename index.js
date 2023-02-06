const express = require('express');
const bodyParser = require('body-parser');
const EmailSender = require('./utils/EmailSender');

const AUTH_TOKEN_KEY = 'AUTH-TOKEN';
const TOKEN_VALUE = 'nk4DYfZEBRME8CkMkXqNEf5ZM';


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sendMail', (request, response) => {
  const headerValue = request.header(AUTH_TOKEN_KEY);

  if (headerValue != TOKEN_VALUE) {
    response.send("Invalid Access Token Value");
    return;
  }
  EmailSender.sendEmail(request.body)
    .then((res) => response.send(res))
    .catch((err) => response.send(err));
});

app.listen(3000, () => {
  console.log("Email Service active on Port 3000!");
});