// archivo: generarPrompt.js
import { plantillasLectura } from './utils/plantillas.js';

export function generarPrompt({
  nombre,
  genero,
  fecha,
  tipoLectura,
  contexto,
  cartas,
  nombreConsultado,
  fechaConsultado
}) {
  const nombresCartas = cartas.map((c) => c.nombre).join(', ');

  let prompt = `Actúa como una tarotista sabia, espiritual y empática. Vas a realizar una lectura de Tarot Rider-Waite para ${nombre}, nacido/a el ${fecha}`;

  if (nombreConsultado && fechaConsultado) {
    prompt += `, que consulta por ${nombreConsultado}, nacido/a el ${fechaConsultado}`;
  }

  prompt += `. Las cartas seleccionadas, en el orden exacto en que salieron, son: ${nombresCartas}.`;

  prompt += `\n\nResponde como si estuvieras en una sesión personalizada y amorosa. Usa un tono cálido, profesional, sin juicios, con lenguaje esperanzador y espiritual. Siempre habla en segunda persona ("tú", "te", "contigo") y en español neutro (sin modismos de ningún país). Interpreta de forma realista en base al contexto del cliente, pero con esperanza.`;
  prompt += `\n\n⚠️ IMPORTANTE: RESPONDE siguiendo el ORDEN EXACTO en que salieron las cartas. Cada interpretación debe respetar esa secuencia sin reordenarlas.`;

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

  const claveNormalizada = tipoLectura.trim().toLowerCase();
  const clave = clavesMapeadas[claveNormalizada];
  const plantilla = clave && plantillasLectura[clave];

  if (plantilla) {
    if (clave === 'VidasPasadas') {
      prompt += `\n\n${plantilla({ nombre, genero, cartas })}`;
    } else {
      prompt += `\n\n${plantilla({ nombre, genero, contexto })}`;
    }
  } else {
    prompt += `\n\nRealiza una lectura intuitiva basada en las cartas seleccionadas, manteniendo el orden exacto y usando un lenguaje espiritual y esperanzador.`;
  }

  if (clave === 'General') {
    prompt += `\n\nAgrega al final una breve reflexión personalizada para cada área (Amor, Trabajo, Dinero, Salud, Familia), en línea con la energía de la lectura.`;
  }

  return prompt;
}
