"use strict";

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kukkui.guest@gmail.com',
    pass: 'Kukkui2537'
  }
});
var mailOptions = {
  from: 'kukkui.guest@gmail.com',
  to: 'algoindustry@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});