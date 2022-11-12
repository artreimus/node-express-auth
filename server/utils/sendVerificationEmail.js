const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p>Please confirm your email by clicking on the following link: </p><a href=${verifyEmail}>Verify Email</a>`;
  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h2>Hello ${name}!</h2>
    ${message}`,
  });
};

module.exports = sendVerificationEmail;
