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
    requestOffer(addressDestination);

    res.json({ addedOffer });
  } catch (err) {
    next(err);
  }
};