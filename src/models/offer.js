import db from '../firebase/config';

import getData from '../helpers/getData';

const offerModel = db.collection('offers');

const getAll = () => {
  return offerModel
    .get()
    .then((offers) =>
      offers.docs.map((offer) => getData(offer)));
};

const getById = (id) => offerModel.doc(id).get();

const add = (payload) => {
  return offerModel
    .add(payload)
    .then(async (offerDB) => {
      const offer = await offerDB.get();
      return getData(offer);
    });
}

const update = (id, payload) => offerModel.doc(id).set(payload);

const modify = (id, payload) => offerModel.doc(id).update(payload);

const remove = (id) => offerModel.doc(id).delete();

export { getAll, getById, add, update, modify, remove };