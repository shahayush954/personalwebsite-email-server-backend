const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'qazxswedcvfr954@outlook.com',
    pass: 'emailclient@954'
  }
});

// const options = {
//   from: 'qazxswedcvfr954@outlook.com',
//   to: 'ayushzz459@gmail.com',
//   subject: 'Attention: Test Email from Node Mailer',
//   text: 'Hello! from Nodemailer.'
// };

const sendEmail = (options) => {
  return new Promise(function(resolve, reject){
    if (!options.from) {
      reject("From Address not found in the Options Object");
    }

    if (!options.to) {
      reject("To Address not found in the Options Object");
    }

    if (!options.subject) {
      reject("Subject not found in the Options Object");
    }

    if (!options.text) {
      reject("Email Text not found in the Options Object");
    }

    transporter.sendMail(options, function(err, info) {
      if (err) {
        reject(err);
      }
    
      resolve("Sent: " + info.response);
    });
  });
}

module.exports.sendEmail = sendEmail;