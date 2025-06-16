import { plantillasLectura } from './utils/plantillas.js';

export function generarPrompt({
  nombre,
  fecha,
  tipoLectura,
  contexto,
  cartas,
  nombreConsultado,
  fechaConsultado
}) {
  const nombresCartas = cartas.map((c) => c.nombre).join(', ');

  // Normalizar tipo de lectura
  const clavesMapeadas = {
    'amor': 'Amor',
    'pareja': 'Pareja',
    'vinculo': 'Vinculo',
    'tradicional': 'Tradicional',
    'celta': 'Celta',
    'abundancia, prosperidad y protección': 'Abundancia',
    'protección y energía': 'Proteccion',
    'general': 'General',
    'expareja': 'Expareja',
    'nuevo vínculo amoroso': 'NuevoVinculo',
    'vidas pasadas': 'VidasPasadas'
  };

  const clave = clavesMapeadas[tipoLectura.trim().toLowerCase()];
  const plantilla = clave && plantillasLectura[clave];

  // Instrucciones iniciales para la IA
  let prompt = `Eres una tarotista profesional, empática y espiritual. Interpretarás una lectura del tarot Rider-Waite para ${nombre}, nacido/a el ${fecha}`;

  if (nombreConsultado && fechaConsultado) {
    prompt += `, en relación con ${nombreConsultado}, nacido/a el ${fechaConsultado}`;
  }

  prompt += `. Las cartas deben ser interpretadas en el orden exacto en que fueron generadas: ${nombresCartas}.`;

  prompt += ` Responde en español neutro, usando siempre segunda persona ("tú", "te", "contigo"), sin frases ambiguas, sin adornos innecesarios, sin repeticiones. No uses frases como “las cartas que seleccionaste”.`;

  // Agregar estructura específica
  if (plantilla) {
    if (clave === 'VidasPasadas') {
      prompt += `\n\n${plantilla({ nombre, cartas })}`;
    } else {
      prompt += `\n\n${plantilla({ contexto })}`;
    }
  } else {
    prompt += `\n\nRealiza una lectura completa y espiritual basada en el orden de las cartas, con interpretaciones precisas y claras.`;
  }

  // Instrucción adicional solo para lectura general
  if (clave === 'General') {
    prompt += ` Concluye cada aspecto con una reflexión breve, clara y alineada con la energía mostrada.`;
  }

  // Límite de tokens recordatorio (no se envía a IA pero sirve para control)
  prompt += ` La respuesta no debe superar los 1100 tokens.`;

  return prompt;
}
