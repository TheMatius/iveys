const validateOffer = (req, res, next) => {
  const { 
    addressDestination,
    addressOrigin,
  } = req.body;
  
  if (!addressDestination || !addressOrigin) {
    return res.status(400).json({
      ok: false,
      error: "No has enviado los datos necesarios."
    });
  }

  next();
};

export default validateOffer;