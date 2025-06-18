// archivo: plantillas.js

export const plantillasLectura = {
  Amor: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es la lectura amorosa que he preparado para ti. Interpreta cada carta con un enfoque cálido y espiritual.

1. Situación actual
2. Primer aspecto importante
3. Segundo aspecto importante
4. Tercer aspecto importante
5. Consejo final

Ten presente que esta interpretación se basa en tu contexto actual, con una visión esperanzadora y respetuosa.`,

  Pareja: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es la lectura para tu relación de pareja. A continuación se interpretarán las cartas en el orden en que salieron:

1. Situación actual
2. Primera pregunta clave
3. Segunda pregunta clave
4. Tercera pregunta clave
5. Cuarta pregunta clave
6. Consejo final

Ten en cuenta que esta lectura está adaptada a tu contexto, con un tono realista y esperanzador, sin usar modismos regionales.`,

  Expareja: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es la lectura sobre tu vínculo con tu ex pareja. Cada carta será interpretada con base en tu situación actual, en el orden exacto en que apareció:

1. Situación actual
2. ¿Qué siente actualmente por ti?
3. ¿Qué desea o espera?
4. ¿Tiene intención de regresar?
5. ¿Cómo avanza su vida sin ti?
6. Consejo espiritual

✨ Al finalizar, brindarás una reflexión cálida y realista sobre si es conveniente hacer un ritual simbólico de cierre emocional o reconciliación, según la energía de las cartas.`,

  NuevoVinculo: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta lectura está destinada a explorar tu posible nuevo vínculo amoroso. Interpretaré cada carta respetando el orden exacto:

1. Situación actual
2. ¿Qué tipo de persona se acerca a tu vida?
3. ¿Qué aprendizaje traerá esta conexión?
4. ¿Cómo deberías prepararte emocionalmente?
5. ¿Qué energía deberías dejar atrás?
6. Consejo esperanzador

Todo el análisis se realizará con un enfoque espiritual, cálido y sin modismos, respondiendo de manera empática a tu contexto.`,

  General: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es la lectura general que percibo para ti. A continuación, se interpretarán las cartas en el orden dado, abordando los siguientes aspectos:

1. Amor
2. Trabajo
3. Dinero
4. Salud
5. Familia

Cada aspecto será interpretado de manera clara y respetuosa, teniendo en cuenta tu contexto actual. El tono será espiritual, esperanzador y neutro.`,

  Celta: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es tu lectura celta completa. A continuación se interpretarán las cartas según las siguientes posiciones:

1. Situación actual
2. Influencias inmediatas
3. Base de la situación
4. Pasado reciente
5. Influencias futuras
6. Conflictos o temores
7. Actitud del consultante
8. Entorno o influencias externas
9. Expectativas o deseos
10. Resultado final

Interpreta cada punto de forma espiritual, cálida y neutra, en relación con tu contexto actual.`,

  Abundancia: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es tu lectura sobre abundancia y prosperidad. Las cartas se interpretarán en el orden en que salieron, siguiendo esta estructura:

1. Situación actual
2. Bloqueos o desafíos
3. Influencias del pasado
4. Tendencias actuales
5. Oportunidades próximas
6. Recurso oculto o interno
7. Aspectos a transformar
8. Apoyo disponible
9. Futuro cercano
10. Futuro lejano

Esta guía espiritual está adaptada a tu contexto y se expresará de forma neutra y empática.`,

  Proteccion: ({ nombre, genero, contexto }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, aquí tienes tu lectura de protección y energía. Las cartas serán interpretadas respetando esta estructura:

1. Estado energético actual
2. Influencias negativas
3. Influencias positivas
4. Protección espiritual presente
5. Energías por liberar
6. Elementos que te fortalecen
7. Energías futuras
8. Consejo de protección
9. Resultado energético esperado

Todo será expresado con lenguaje neutro, espiritual y empático, en relación con tu situación actual.`,

  VidasPasadas: ({ nombre, genero, cartas }) => `Querid${genero === 'masculino' ? 'o' : genero === 'femenino' ? 'a' : 'e'} ${nombre}, esta es tu lectura de vidas pasadas. Las cartas seleccionadas se interpretarán en este orden:

1. Vida pasada predominante
2. Personalidad que tuviste
3. Lecciones aprendidas
4. Conflictos no resueltos
5. Conexión con personas actuales
6. Heridas o traumas que influyen hoy
7. Dones que traes de esa vida
8. Cómo sanar e integrar esas memorias
9. Consejo espiritual final

Esta lectura se presentará con un tono cálido, realista y sin modismos.`
};
