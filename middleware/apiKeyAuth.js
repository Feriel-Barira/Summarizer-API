const validApiKeys = ["123456789"];

module.exports = (req, res, next) => {
  const apiKey = req.header("x-api-key");
  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(403).json({ error: "Clé API invalide" });
  }
  next();
};
