import twilio from 'twilio';

import { getAvialibleUsers } from "../models/user";

const accountSid = 'ACe4bd00f4356988ead9cce06af745c1d6'; 
const authToken = '7ea93559200a3f8089b18bce3bcf1104';
const messagingServiceSid = 'MG5856cb490f824316b18e6a9f2fbd960c';
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