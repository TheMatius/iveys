const validateUser = (req, res, next) => {
  const { 
    user,
    name,
  } = req.body;
  
  if (!user || !name) {
    return res.status(400).json({
      ok: false,
      error: "No has enviado los datos necesarios."
    });
  }

  next();
};

export default validateUser;