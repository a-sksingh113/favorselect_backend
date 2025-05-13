const twilio = require('twilio');

const accountSid = process.env.FS_TWILIO_ACCOUNT_SID;
const authToken = process.env.FS_TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

module.exports = client;