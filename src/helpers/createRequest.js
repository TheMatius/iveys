import twilio from 'twilio';

import { getAvialibleUsers } from "../models/user";

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_API_KEY;
const messagingServiceSid = process.env.TWILIO_MESSAGE_SID;
const client = new twilio(accountSid, authToken);

export const requestOffer = async (addressDestination) => {
  try {
    const users = await getAvialibleUsers();

    if (!users) {
      throw new Error('No hay usuarios disponibles');
    }

    const usersSMS = users.map(async (user) => {
      const to = user.user;
      const body = `${user.name} tienes una solicitud en ${addressDestination}.`;

      return await client.messages.create({ body, to, messagingServiceSid });
    });

    Promise.allSettled(usersSMS)
      .then((res) => console.log('Messages sended!'))
      .catch((err) => console.log(err));
  } catch (err) {
    throw err;    
  }
};

export default requestOffer;