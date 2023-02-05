const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'qazxswedcvfr954@outlook.com',
    pass: 'emailclient@954'
  }
});

const options = {
  from: 'qazxswedcvfr954@outlook.com',
  to: 'ayushzz459@gmail.com',
  subject: 'Attention: Test Email from Node Mailer',
  text: 'Hello! from Nodemailer.'
};

transporter.sendMail(options, function(err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Sent: " + info.response);
});