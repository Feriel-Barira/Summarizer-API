const axios = require('axios');

const HF_API_KEY = process.env.HF_API_KEY;

async function summarizeWithOpenAI(text) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    // La réponse est un tableau avec un objet contenant summary_text
    return response.data[0].summary_text;
  } catch (error) {
    console.error('Erreur dans summarizeWithOpenAI :', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { summarizeWithOpenAI };
