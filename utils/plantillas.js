// plantillasLectura.js (versión optimizada, neutra y empática)

export const plantillasLectura = {
  General: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura general:

Contexto sentimental: "${contexto}"

Lectura general de 25 cartas (respetar este orden):

Amor: situación actual, influencias, desafío, consejo, resultado.
Trabajo: situación actual, influencias, desafío, consejo, resultado.
Dinero: situación actual, influencias, desafío, consejo, resultado.
Salud: situación actual, influencias, desafío, consejo, resultado.
Familia: situación actual, influencias, desafío, consejo, resultado.

Utiliza un tono profesional, claro, realista y esperanzador, adaptando la interpretación a la situación actual del consultante. Usa exclusivamente el trato de "tú" y "ti".`;
  },

  Pareja: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura de pareja:

Contexto emocional: "${contexto}"

Lectura de 6 cartas:
1. Situación actual del vínculo
2. Pregunta 1
3. Pregunta 2
4. Pregunta 3
5. Pregunta 4
6. Consejo final

Responde de forma directa, emocional y con contención. No uses frases vagas ni modismos regionales. Usa un español neutro con "tú" y "ti".`;
  },

  Amor: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura de amor:

Contexto sentimental: "${contexto}"

Lectura de 5 cartas:
1. Situación actual
2. Pregunta 1
3. Pregunta 2
4. Pregunta 3
5. Consejo final

Responde en tono emocional, realista, profesional y respetuoso. Siempre usa "tú" y "ti".`;
  },

  Expareja: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura sobre tu expareja:

Texto del consultante: "${contexto}"

Lectura de 6 cartas. Orden:
1. Situación actual del vínculo
2. Pregunta 1
3. Pregunta 2
4. Pregunta 3
5. Pregunta 4
6. Consejo final

Responde con claridad, sin juzgar y adaptando la interpretación al contexto actual. Usa exclusivamente el trato "tú" y "ti". No uses frases como “las cartas que seleccionaste”.

Al final, incluye este mensaje:

Además, considerando lo vivido entre ustedes, podrías trabajar en un proceso energético conocido como endulzamiento. Este ritual muy sutil y respetuoso ayuda a disipar energías negativas, bloqueos emocionales y abrir nuevamente caminos de amor, deseo y reconciliación. Es un impulso dulce que no fuerza voluntades, sino que limpia y favorece la renovación sana del vínculo, permitiendo que todo pueda fluir desde el corazón.`;
  },

  NuevoVinculo: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura sobre un nuevo vínculo:

Contexto amoroso: "${contexto}"

Lectura de 6 cartas:
1. Situación actual
2. Qué siente la otra persona
3. Qué piensa
4. Qué intenciones tiene
5. Bloqueo u obstáculo
6. Consejo final

Tono emocional, realista, claro y esperanzador. Usa siempre español neutro y tratamiento con "tú".`;
  },

  VidasPasadas: ({ nombre, genero, cartas }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    const c = (i) => cartas[i]?.nombre || '[nombre de la carta]';
    return `
${saludo} ${nombre}, esto es lo que revelan las cartas sobre tus vidas pasadas:

1. ¿Quién fuiste en una vida pasada significativa? – ${c(0)}
2. ¿Qué experiencias marcantes viviste en esa vida? – ${c(1)}
3. ¿Qué heridas o karmas arrastras desde esa vida? – ${c(2)}
4. ¿Qué don o sabiduría traes desde esa vida? – ${c(3)}
5. ¿Qué patrón se repite en esta vida? – ${c(4)}
6. ¿Cuál es tu misión actual, en esta vida? – ${c(5)}
7. Consejo profundo del alma – ${c(6)}

Cierra con un resumen final que integre lo aprendido y lo que estás llamado a transformar. Usa un tono empático, espiritual, claro, neutro y esperanzador.`;
  },

  Abundancia: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que revelan las cartas sobre tu camino hacia la abundancia:

Contexto: "${contexto}"

Lectura de 10 cartas (interpretar en este orden):
1. Energía actual respecto a la abundancia
2. Bloqueo o creencia limitante
3. Origen del bloqueo
4. Recursos ocultos o talentos desaprovechados
5. Oportunidades en camino
6. Acción clave para atraer prosperidad
7. Cómo gestionar mejor sus finanzas
8. Consejo del universo
9. Posibles obstáculos futuros
10. Resultado final si se sigue el consejo

Cierra con un resumen claro de la lectura, integrando todo lo revelado en un mensaje esperanzador, práctico y alineado al contexto. Usa sólo "tú" y "ti".`;
  },

  Proteccion: ({ contexto, nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que percibo en tu lectura sobre protección energética:

Contexto: "${contexto}"

Lectura de 9 cartas:
1. Energía actual
2. Energía externa influyente
3. Origen del bloqueo
4. Punto vulnerable
5. Cómo protegerse
6. Aliado espiritual
7. Resultado si sigues el consejo
8. Resumen de la lectura
9. Consejos de protección energética

Tono claro, protector, profesional y esperanzador. Sólo usa lenguaje neutro y dirigido a "tú".`;
  },

  Celta: ({ nombre, genero }) => {
    const saludo = genero === 'masculino' ? 'Querido' : 'Querida';
    return `
${saludo} ${nombre}, esto es lo que revelan las cartas en tu lectura Cruz Celta:

Lectura de 10 cartas. Interprétalas en este orden:

1. Situación actual – ¿Dónde estás parado ahora mismo? ¿Qué está pasando?
2. Obstáculo o desafío – ¿Qué está bloqueando tu avance o complicando la situación?
3. Lo que hay en la base (subconsciente) – Lo que sentís en lo profundo aunque no lo veas claro. Motivaciones ocultas.
4. El pasado reciente – Qué experiencia o hecho reciente influyó en lo que estás viviendo.
5. Lo que está por venir (futuro inmediato) – Lo que se aproxima si todo sigue igual.
6. Lo que pensás o deseás (consciente) – Tu mentalidad actual, deseos o expectativas.
7. Cómo te ves a ti mismo – Tu actitud o posición en esta situación.
8. Cómo te ven los demás / el entorno – Lo que tu entorno piensa, espera o cómo te afecta.
9. Miedos o esperanzas – Lo que te preocupa o lo que deseás en el fondo, aunque no lo digas.
10. Resultado probable – La dirección general que va tomando todo esto si no hay cambios.

Usa exclusivamente español neutro, sin modismos. El tono debe ser profesional, realista, claro y con una mirada esperanzadora.`;
  }
};