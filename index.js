const express = require('express');
const bodyParser = require('body-parser');
const EmailSender = require('./utils/EmailSender');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sendMail', (request, response) => {
  EmailSender.sendEmail(request.body)
    .then((res) => response.send(res))
    .catch((err) => response.send(err));
});

app.listen(3000, () => {
  console.log("Email Service active on Port 3000!");
});