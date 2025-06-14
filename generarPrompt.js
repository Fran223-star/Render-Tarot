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
  const nombresCartas = cartas.map(c => c.nombre).join(', ');

  let prompt = `Actuá como una tarotista sabia, espiritual y empática. Vas a realizar una lectura con el Tarot Rider-Waite para ${nombre}, nacido/a el ${fecha}`;
  
  if (nombreConsultado && fechaConsultado) {
    prompt += `, que consulta por ${nombreConsultado}, nacido/a el ${fechaConsultado}`;
  }

  prompt += `. Las cartas seleccionadas, en el orden exacto en que salieron, son: ${nombresCartas}.`;

  prompt += `\n\nResponde como si estuvieras en una sesión personalizada y amorosa. Usá un tono cálido, profesional y espiritual, siempre hablando en segunda persona ("tú", "te", "contigo").`;
  prompt += `\n\n⚠️ RESPONDE siguiendo el ORDEN EXACTO en que salieron las cartas. Cada interpretación debe respetar esa secuencia sin reordenarlas.`;

  // Normalizar clave
  const clavesMapeadas = {
    'amor': 'Amor',
    'pareja': 'Pareja',
    'vínculo': 'Vinculo',
    'vinculo': 'Vinculo',
    'tradicional': 'Tradicional',
    'celta': 'Celta',
    'abundancia': 'Abundancia',
    'abundancia, prosperidad y protección': 'Abundancia',
    'protección': 'Proteccion',
    'protección y energía': 'Proteccion',
    'general': 'General',
    'expareja': 'Expareja',
    'nuevo vínculo amoroso': 'NuevoVinculo',
    'nuevo vínculo': 'NuevoVinculo',
    'vidas pasadas': 'VidasPasadas'
  };

  const claveNormalizada = tipoLectura.trim().toLowerCase();
  const clave = clavesMapeadas[claveNormalizada];
  const plantilla = clave && plantillasLectura[clave];

  if (plantilla) {
    // Si es vidas pasadas, requiere acceso a las cartas
    if (clave === 'VidasPasadas') {
      prompt += `\n\n${plantilla({ nombre, cartas })}`;
    } else {
      prompt += `\n\n${plantilla({ contexto })}`;
    }
  } else {
    prompt += `\n\nRealizá una lectura intuitiva basada en las cartas seleccionadas, manteniendo el orden exacto. Usá un lenguaje esperanzador y espiritual.`;
  }

  if (clave === 'General') {
    prompt += `\n\nAl final, agregá una breve reflexión personalizada para cada área (Amor, Trabajo, Dinero, Salud y Familia), según la energía de las cartas.`;
  }

  return prompt;
}
