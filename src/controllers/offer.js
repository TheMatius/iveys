import { add } from "../models/offer";

import requestOffer from "../helpers/createRequest";

export const create = async (req, res, next) => {
  try {
    const {
      uuid,
      addressDestination,
      addressOrigin,
      cityCode,
      latitudeOrigin,
      longitudeOrigin,
      pointReferenceDestination,
      pointReferenceOrigin,
      serviceType,
      observations,
      guardian
    } = req.body;
    const today = new Date();

    const offer = {
      uuid: uuid || "",
      addressDestination,
      addressOrigin,
      cityCode: cityCode || "",
      latitudeOrigin: latitudeOrigin || "",
      longitudeOrigin: longitudeOrigin || "",
      pointReferenceDestination: pointReferenceDestination || "",
      pointReferenceOrigin: pointReferenceOrigin || "",
      serviceType: serviceType || "service",
      appointmentDate: today.toLocaleDateString(),
      appointmentHour: today.toLocaleTimeString(),
      observations: observations || "",
      guardian: guardian || ""
    }
    const addedOffer = await add(offer);
    const usersSended = await requestOffer(addressDestination);
    const errorUsers = usersSended
      .filter((user) => user.status !== 200)
      .map((user) => ({ ...user.data }));

    if (errorUsers.length > 0) {
      return res.status(401).json({
        ok: false,
        error: 'No puedo enviar el mensaje a los usuarios',
        errorUsers
      });
    }

    res.json({ addedOffer });
  } catch (err) {
    next(err);
  }
};