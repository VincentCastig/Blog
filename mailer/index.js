
// const nodemailer = require('nodemailer');
// const config = require('./config/config');

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     type: 'OAuth2',
//     config: config
//   }
// });

//  const send = ({ email, name, text }) => {
//   const from = name && email ? `${name} <${email}>` : `${name || email}`
//   const message = {
//     from,
//     to: 'react.nodemailer@gmail.com',
//     subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
//     text,
//     replyTo: from
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     )
//   })
// }

