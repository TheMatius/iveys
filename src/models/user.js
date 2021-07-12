import db from '../firebase/config';

import getData from '../helpers/getData';

const userModel = db.collection('users');

export const getAvialibleUsers = () => {
  return userModel
    .where('availability', '==', true)
    .get()
    .then((users) =>
      users.docs.map((user) => getData(user)));
}

export const add = (payload) => {
  return userModel
    .get()
    .then((data) => {
      const userExist = data.docs.some((user) => user.data().user === payload.user);
      if (userExist) {
        throw new Error('El usuario ya existe');
      }
      return userModel
        .add(payload)
        .then(async (userDB) => {
          const user = await userDB.get();
          return getData(user);
        });
    });
}

export const update = (id, payload) => {
  return userModel.doc(id).set(payload);
};

export const modify = (id, payload) => {
  return userModel.doc(id).update(payload);
};

export const remove = (id) => {
  return userModel.doc(id).delete();
};