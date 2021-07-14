import axios from 'axios';

import { getAvialibleUsers } from "../models/user";

const API_URL = 'https://api.production.twnel.com/messages';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.TWNEL_API_KEY}`
  }
};

export const requestOffer = async (addressDestination) => {
  try {
    const users = await getAvialibleUsers();

    if (!users) {
      throw new Error('No hay usuarios disponibles');
    }

    const usersSMS = users.map(async (user) => {
      const to = user.user;
      const body = `${user.name} tienes una solicitud en ${addressDestination}.`;
      return await axios.post(API_URL, { to, body }, config);
    });

    const usersSended = await Promise.allSettled(usersSMS)
      .then((res) => res.map((user) => {
        return { status: user.value.status, data: JSON.parse(user.value.config.data) };
      }))
      .catch((err) => console.log(err));
    return usersSended;
  } catch (err) {
    throw err;    
  }
};

export default requestOffer;