const axios = require('axios');

/**
 * Sends an SMS through UniSender.
 * Keep this utility isolated so the provider can be swapped later without touching routes.
 */
const sendSMS = async (phone, message) => {
  try {
    const response = await axios.post(
      process.env.UNI_SMS_SEND_URL || 'https://unismsapi.com/api/sms',
      {
        recipient: phone,
        content: message,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        auth: {
          // UniSender uses basic auth: username=API key, password=API secret.
          username: process.env.UNI_SMS_API_KEY,
          password: process.env.UNI_SMS_API_SECRET || ''
          // If you still get Unauthorized, verify UNI_SMS_API_KEY/UNI_SMS_API_SECRET in server/.env.
          // (No logging of secret values here.)
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('SMS sending failed:', error.response?.data || error.message);

    // During local dev / smoke tests we can allow OTP flow to succeed without
    // the external provider by returning a stubbed response.
    if (process.env.NODE_ENV !== 'production') {
      return { provider: 'stub', message: 'SMS not sent (stubbed).' };
    }

    throw new Error('SMS service unavailable');
  }
};


module.exports = sendSMS;

