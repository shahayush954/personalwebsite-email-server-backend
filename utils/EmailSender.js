const nodemailer = require('nodemailer');

const NODEMAILER_EMAIL_ID = "qazxswedcvfr954@outlook.com";

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: NODEMAILER_EMAIL_ID,
    pass: 'emailclient@954'
  }
});

// const options = {
//   from: NODEMAILER_EMAIL_ID,
//   to: 'ayushzz459@gmail.com',
//   subject: 'Attention: Test Email from Node Mailer',
//   text: 'Hello! from Nodemailer.'
// };

const sendEmail = (options) => {
  options.from = NODEMAILER_EMAIL_ID;
  return new Promise(function(resolve, reject){
    transporter.sendMail(options, function(err, info) {
      if (err) {
        reject(err);
      }
    
      resolve("Sent: " + info.response);
    });
  });
}

module.exports.sendEmail = sendEmail;