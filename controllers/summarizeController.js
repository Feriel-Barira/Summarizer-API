const { summarizeWithOpenAI } = require("../services/huggingfaceService");

const summarizeTextHandler = async (req, res) => {
  const { text } = req.body;

  if (!text || text.length < 20) {
    return res.status(400).json({ error: "Texte trop court ou manquant." });
  }

  try {
    const summary = await summarizeWithOpenAI(text);
    res.json({ summary });
  } catch (error) {
    console.error("Erreur de résumé :", error);
    res.status(500).json({ error: error.message || "Erreur lors de la génération du résumé." });
  }
};

module.exports = { summarizeTextHandler };
