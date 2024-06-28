import axios from "axios";
import 'dotenv/config';

const prompt1 = async (req, res) => {
    const { prompt } = req.body;
  
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 5,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error generating response');
    }
  };

  export {prompt1}