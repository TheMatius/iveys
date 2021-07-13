// import axios from 'axios';
import Vonage from '@vonage/server-sdk';

import { getAvialibleUsers } from "../models/user";

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

export const requestOffer = async (addressDestination) => {
  try {
    const users = await getAvialibleUsers();

    if (!users) {
      throw new Error('No hay usuarios disponibles');
    }

    // vonage.message.sendSms('Iveys-Test', '573137247868', 'It Works!', (err, res) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log('here', res);
    //   if(res.messages[0]['status'] === "0") {
    //     console.log("Message sent successfully.");
    //   } else {
    //       console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
    //   }
    // });
    // console.log(users);

    users.forEach((user) => {
      const payload = {
        from: 'Iveys-Test',
        to: user.user,
        msg: `${user.name} tienes una solicitud en ${addressDestination} `,
      };

      vonage.message.sendSms(payload.from, payload.to, payload.msg, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        if(res.messages[0]['status'] === "0") {
          console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${res.messages[0]['error-text']}`);
        }
      });
      
    });
  } catch (err) {
    throw err;    
  }
};

export default requestOffer;