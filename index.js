const nodemailer = require('nodemailer')
const { user, pass, name, to, subject } = require('./config')
const getContent = require('./content')

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: '465',
    secure: true,
    auth: {
      user,
      pass,
    }
  })
  data.from = `"${data.from}" ${user}`
  await transporter.sendMail(data);
}

sendMail({
  from: name,
  to,
  subject,
  html: getContent()
})
