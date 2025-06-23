// archivo: index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { generarPrompt } from './generarPrompt.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://senderodelaluna.com.ar'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/interpretar', async (req, res) => {
  const {
    nombre,
    fecha,
    tipoLectura,
    contexto,
    cartas,
    nombreConsultado,
    fechaConsultado,
  } = req.body;

  // Validación básica de datos
  if (!nombre || !fecha || !tipoLectura || !cartas || cartas.length === 0) {
    return res.status(400).json({
      error: 'Faltan datos necesarios para generar la interpretación.',
    });
  }

  const prompt = generarPrompt({
    nombre,
    fecha,
    tipoLectura,
    contexto,
    cartas,
    nombreConsultado,
    fechaConsultado,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `Actúa como una tarotista profesional, empática y sabia. Realizas lecturas con el mazo Rider-Waite. Responde de forma clara, esperanzadora y en español neutro, usando "tú" y "ti", evitando modismos regionales. Si se proporciona una estructura, síguela con precisión, interpretando las cartas en el orden exacto en que fueron dadas.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2400,
    });

    const respuesta = completion.choices[0]?.message?.content || 'No se pudo generar la interpretación.';
    res.json({ respuesta });
  } catch (error) {
    console.error('Error al interpretar:', error);
    res.status(500).json({
      error: 'Ocurrió un error al generar la interpretación.',
      detalles: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
