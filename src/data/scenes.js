import alcohol from '../../public/images/drogas/alcohol.jpg'
import cocaina from '../../public/images/drogas/cocaina.jpg'
import crack from '../../public/images/drogas/crack.jpg'
import heroina from '../../public/images/drogas/heroina.webp'
import GHB from '../../public/images/drogas/GHB.jpg'
import fentanilo from '../../public/images/drogas/fentanilo.jpg'
import ketamina from '../../public/images/drogas/ketamina.webp'
import metanfetamina from '../../public/images/drogas/metanfetamina.webp'
import krokodil from '../../public/images/drogas/krokodil.jpg'

export const scenes = [
  {
    drug: 'Alcohol',
    photo: alcohol,
    intro: 'Una copa para celebrar. Risas, música, amigos. Te sientes libre, valiente, invencible. Todo fluye, todo brilla un poco más. Por un momento el mundo es perfecto.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en una fiesta. Todo el mundo bebe. Alguien te ofrece una copa con una sonrisa.',
        choices: [
          { text: 'Aceptar la copa', impact: +10, next: 1 },
          { text: 'Rechazar, no necesitas beber para divertirte.', impact: 0, next: 10 }
        ]
      },
      {
        id: 1,
        text: 'Empiezas a notar el efecto. Te sientes más suelto, más valiente.',
        choices: [
          { text: 'Sigues tomando, te gusta la sensación', impact: +5, next: 2 },
          { text: 'Ya has tenido suficiente', impact: 0, next: 11 }
        ]
      },
      {
        id: 2,
        text: 'Pasas a la universidad. Conoces nuevos amigos, fiestas, litros, chupitos... El alcohol está en cada celebración.',
        choices: [
          { text: 'Sigues bebiendo más a menudo.', impact: +5, next: 3 },
          { text: 'Bebes solo en eventos', impact: 0, next: 11 }
        ]
      },
      {
        id: 3,
        text: 'Te has desmayado dos veces por beber demasiado. Una vez perdiste el móvil, otra acabaste en urgencias.',
        choices: [
          { text: 'Hacer bromas sobre eso', impact: +5, next: 4 },
          { text: 'Preocuparte, has aprendido la lección.', impact: 0, next: 12 }
        ]
      },
      {
        id: 4,
        text: 'Empiezas a beber también en casa, viendo partidos, solo. Te ayuda a “relajarte”. Empieza a ser una costumbre.',
        choices: [
          { text: 'Bebes cada noche', impact: +10, next: 5 },
          { text: 'El acohol te está trayendo problemas, lo dejas', impact: +5, next: 12}
        ]
      },
      {
        id: 5,
        text: 'Tu pareja se queja: “No eres el mismo cuando bebes”. Pero tú piensas que exagera. Discutís cada vez más.',
        choices: [
          { text: 'Bebes para no discutir', impact: +15, next: 6 },
          { text: 'Tiene razón, decides dejarlo', impact: +5, next: 12}
        ]
      },
      {
        id: 6,
        text: 'Han pasado años. Has perdido tu relación. Tus amigos ya no te llaman. Borras recuerdos en cada resaca. La resaca es tu mejor amiga.',
        choices: [
          { text: 'Aceptar que estás solo, bebes', impact: +10, next: 7 },
          { text: 'Decides buscar ayuda profesional', impact: +5, next: 13 }
        ]
      },
      {
        id: 7,
        text: 'Estás desempleado. Has llegado borracho a entrevistas. Tu aspecto físico ha cambiado, tienes la cara hinchada, los ojos apagados.',
        choices: [
          { text: 'Sigues bebiendo para evadirte', impact: +10, next: 8 },
          { text: 'Buscas cualquier ayuda, solo quieres dejarlo', impact: +5, next: 13 }
        ]
      },
      {
        id: 8,
        text: 'Tu salud empeora. Tienes problemas hepáticos. El médico te advierte: “Si sigues bebiendo, no llegarás a viejo.”',
        choices: [
          { text: 'Ignorarlo, ya estás roto', impact: +15, next: 9 },
          { text: 'Tiene razón, debo dejarlo y lo haré.', impact: -5, next: 13}
        ]
      },
      {
        id: 9,
        text: 'Has llegado hasta el límite. Tu aspecto es deplorable. Lo has perdido todo por el alcohol. Ya no te queda nada, solo un aspecto que da pena.',
        isFinal: true
      },
      {
        id: 10,
        text: 'No necesitas alcohol para divertirte y es una muy buena elección. Prefieres estar con tus 5 sentidos siempre activos. ¡Enhorabuena!',
        isFinal: true
      },
      {
        id: 11,
        text: 'Ya has tenido bastante, sabes que un par de copas son suficientes, no quieres pasarlo mal. Buena elección.',
        isFinal: true
      },
      {
        id: 12,
        text: 'Decides poner tu vida de nuevo en orden. No quieres ser un borracho, no quieres perderlo todo por la bebida.',
        isFinal: true
      },
      {
        id: 13,
        text: 'Te has refugiado de los problemas en el alcohol y eso es una mala elección. No pareces el mismo, estás destrozado.',
        isFinal: true
      }
    ],
  },
  { 
    drug: 'Cocaína',
    photo: cocaina,
    intro: 'Una línea. Y de pronto... todo va más rápido. Energía al máximo. Confianza, poder, euforia. Te sientes imparable. Como si nada pudiera tocarte.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en la feria de tu ciudad con dos amigos. Uno se hace tres rayas. Los dos consumen, faltas tú.',
        choices: [
          { text: 'Decides probar', impact: +15, next: 1 },
          { text: 'Les dices que no quieres', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'Han pasado tres meses. Desde entonces, la consumes en algunas fiestas. No la compras, pero la aceptas.',
        choices: [
          { text: 'Empiezas a comprar para tener en casa', impact: +15, next: 2 },
          { text: 'Solo la tomas en ocasiones especiales', impact: +10, next: 2 }
        ]
      },
      {
        id: 2,
        text: 'Ahora tu consumo es semanal. Empiezas a tener insomnio, ansiedad y a aislarte de tu familia.',
        choices: [
          { text: 'Sigues consumiendo porque crees que te ayuda a rendir.', impact: +10, next: 3 },
          { text: 'Intentas parar, pero no puedes del todo', impact: +10, next: 3 }
        ]
      },
      {
        id: 3,
        text: 'Ha pasado el tiempo. Pierdes dos trabajos por bajo rendimiento, llegabas tarde.',
        choices: [
          { text: 'Te aíslas aún más y evitas a tus amigos de siempre', impact: +10, next: 4 },
          { text: 'Buscas ayuda en un familiar de confianza', impact: -10, next: 10 }
        ]
      },
      {
        id: 4,
        text: 'Después de lo pasado, esta droga sigue poniéndote a prueba. Te tiene atrapado hasta un punto que no imaginabas.',
        choices: [
          { text: 'Recaes tras un intento de rehabilitación', impact: +15, next: 5 },
          { text: 'Sigues en tratamiento, con recaídas pero con esperanzas', impact: -5, next: 5 }
        ]
      },
      {
        id: 5,
        text: 'El consumo se vuelve costoso y empiezas a gastar más de lo que tienes. Vendes todo lo que tienes a mano, incluso a tu familia.',
        choices: [
          { text: 'No pasa nada, el no tener dinero es temporal', impact: +15, next: 6 },
          { text: 'Decides ir en serio a por ayuda profesional', impact: -5, next: 10 }
        ]
      },
      {
        id: 6,
        text: 'Pierdes peso, tu nariz sangra con frecuencia y la paranoia se apodera de ti.',
        choices: [
          { text: 'Nada que una raya no pueda arreglar', impact: +15, next: 7 },
          { text: 'Pides ayuda a tu pareja, familia, amigos.', impact: -10, next: 10 }
        ]
      },
      {
        id: 7,
        text: 'Lo has perdido todo, el trabajo, tu relación de pareja, tu coche, tu casa. Lo has perdido absolutamente TODO.',
        isFinal: true
      },
      {
        id: 8,
        text: 'Años después estás en una relación estable y tienes trabajo. Uno de tus viejos amigos murió por sobredosis. Aquel "no" cambió tu vida por completo.',
        isFinal: true
      },
      {
        id: 9,
        text: '¡Enhorabuena! Elegiste la opción más inteligente, el NO es la mejor opción, SIEMPRE.',
        isFinal: true
      },
      {
        id: 10,
        text: 'Buscar ayuda es muy importante, solo es muy dificil, bien hecho a medias, debiste decir NO desde el principio.',
        isFinal: true
      }
    ]
  },
  {
    drug: 'Crack',
    photo: crack,
    intro: 'Una calada... y estalla la mente. El placer es instantáneo, intenso, brutal. Por unos segundos no existe el dolor. Solo tu y esa sensación que lo eclipsa todo. Pura euforia.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en una plaza con colegas. Uno te ofrece una pipa de cristal. "Solo un toque", te dice. Te pica la curiosidad.',
        choices: [
          { text: 'Decides una calada', impact: +5, next: 1 },
          { text: 'Negarte y marcharte', impact: 0, next: 9 } 
        ]
      },
      {
        id: 1,
        text: 'El efecto es inmediato, una euforia brutal. Pero en minutos desaparece y sientes un vacío extraño.',
        choices: [
          { text: 'Pedir otra calada', impact: +10, next: 2 },
          { text: 'Decides parar', impact: +5, next: 9 }
        ]
      },
      {
        id: 2,
        text: 'Mañana vuelves a fumar, ya no es lo mismo. Se te acaba. Estás mas ansioso, mas tembloroso. No puedes dejar de pensar en la próxima calada.',
        choices: [
          { text: 'Buscas más por tu cuenta', impact: +10, next: 3 },
          { text: 'Llamar a un amigo que te ayude', impact: -5, next: 10 }
        ]
      },
      {
        id: 3,
        text: 'Intentas mantenerte alejado, pero el recuerdo del subidón te persigue. No puedes dormir, no puedes concentrarte.',
        choices: [
          { text: 'Volver a la calle a buscar', impact: +10, next: 4 },
          { text: 'Pedir ayuda profesional', impact: -10, next: 11}
        ]
      },
      {
        id: 4,
        text: 'Te encuentras en una casa abandonada con otros consumidores. El ambiente es tenso, hostil, sucio.',
        choices: [
          { text: 'No importa, fumas con ellos', impact: +20, next: 5 },
          { text: 'Sales corriendo de allí a por ayuda profesional', impact: +5, next: 11}
        ]
      },
      {
        id: 5,
        text: 'Ha pasado el tiempo. Tu nivel de dependecia es alto. Llevas días sin comer, tienes alucinaciones. Escuchas pasos que no existen.',
        choices: [
          { text: 'Consumes para calmarte', impact: +15, next: 6 },
          { text: 'Buscar refugio', impact: -5, next: 12 }
        ]
      },
      {
        id: 6,
        text: 'Lo has perdido todo. Robas para consumir. Te duelen los huesos. Te miras al espejo y no te reconoces.',
        choices: [
          { text: 'Fumar para calmar dolores', impact: +15, next: 7 },
          { text: 'Pedir ayuda urgentemente', impact: -10, next: 12 }
        ]
      },
      {
        id: 7,
        text: 'Tu cuerpo está agotado. Te cuesta respirar. No has dormido en días. Sientes que vas a morir.',
        choices: [
          { text: 'Decides seguir, fumar te alivia', impact: +20, next: 8},
          { text: 'Te refugias en tu familia', impact: -15, next: 12}
        ]
      },
      {
        id: 8,
        text: 'Tu relación con el crack ha dejado secuelas visibles. Tu vida ha cambiado por completo.',
        isFinal: true
      },
      {
        id: 9,
        text: 'Sabes que esta mierda no es para ti, eres listo, inteligente, sabes lo que te conviene.',
        isFinal: true
      },
      {
        id: 10,
        text: 'Tus amigos son buenos amigos, no te dejan solo. Te aconsejan bien, deciden ayudarte.',
        isFinal: true
      },
      {
        id: 11,
        text: 'La ayuda profesional es importantísima, por primera vez has tomado una buena decisión.',
        isFinal: true
      },
      {
        id: 12,
        text: 'Sabes que necesitas buscar ayuda, no va a ser nada fácil, va a ser una guerra pero estás dispuesto a ganarla.',
        isFinal: true
      }
    ]
  },
  {
    drug: 'GHB',
    photo: GHB,
    intro: 'Una dosis y todo se vuelve ligero. Ríes sin motivo, bailas sin miedo. El mundo vibra, el cuerpo se suelta. Sensaciones intensas, caricias más vivas. Todo es placer...sin frenos.',
    scenesArray: [
      {
        id: 0,
        text: 'Una noche cualquiera. Un amigo te ofrece GHB. “Te pone sociable, con buen rollo. Solo unas gotas.”',
        choices: [
          { text: 'Aceptar por curiosidad', impact: +5, next: 1 },
          { text: 'Decir que no por precaución', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'Te relajas. Todo parece más fácil. Ríes más. Te sientes conectado. La noche fluye. Lo llaman “el éxtasis líquido”.',
        choices: [
          { text: 'Volver a usarlo otro día de fiesta', impact: +5, next: 2 },
          { text: 'Usarlo también en casa para relajarte', impact: +10, next: 2 }
        ]
      },
      {
        id: 2,
        text: 'Te empieza a gustar tomarlo antes de quedar con gente. Sientes que sin él no fluyes igual. Que sin GHB no eres tú.',
        choices: [
          { text: 'Consumirlo antes de cada evento social', impact: +10, next: 3 },
          { text: 'Subir un poco la dosis para prolongar el efecto', impact: +15, next: 3 }
        ]
      },
      {
        id: 3,
        text: 'Empiezas a olvidarte de cosas. Te cuesta dormir sin sustancia. Tienes pequeños apagones de memoria que no puedes explicar.',
        choices: [
          { text: 'Investigar sobre efectos secundarios', impact: +10, next: 4 },
          { text: 'Restar importancia y seguir consumiendo', impact: +15, next: 4 }
        ]
      },
      {
        id: 4,
        text: 'Te despiertas una mañana desorientado, sin recordar cómo llegaste a casa. La gente te cuenta que estuviste raro, agresivo.',
        choices: [
          { text: 'Evitar hablar del tema', impact: +10, next: 5 },
          { text: 'Consumir menos durante un tiempo', impact: +10, next: 5 }
        ]
      },
      {
        id: 5, 
        text: 'Cada vez necesitas más para sentir algo. Ya no es solo de fiesta. Lo usas para dormir. Para calmar la ansiedad.',
        choices: [
          { text: 'Empezar a llevar el bote siempre contigo', impact: +10, next: 6 },
          { text: 'Tomarlo a escondidas durante el día', impact: +15, next: 6 }
        ]
      },
      {
      id: 6,
      text: 'Un día te pasas de dosis. Te desmayas. Tus amigos se asustan. Te salvan. Pero podría haber sido peor.',
      choices: [
        { text: 'Ignorarlo, fue un “accidente”', impact: +15, next: 7 },
        { text: 'Prometerte que será la última vez', impact: +5, next: 7 }
      ]
    },
    {
      id: 7,
      text: 'Empiezas a consumir a diario. Tu cuerpo tiembla si no tomas. Tienes ataques de ansiedad. Dolores musculares. Insomnio.',
      choices: [
        { text: 'Tomar más GHB para calmarte', impact: +20, next: 8 },
        { text: 'Mezclarlo con alcohol para reforzar el efecto', impact: +25, next: 8 }
      ]
    },
    {
      id: 8,
      text: 'Un día, simplemente no te despiertas a tiempo. Estás en el hospital. Sobredosis. Casi no lo cuentas.',
      choices: [
        { text: 'Recaer tras salir del hospital', impact: +25, next: 9 },
        { text: 'Intentar dejarlo por tu cuenta', impact: +10, next: 9 }
      ]
    },
    {
      id: 9,
      text: 'Hasta aquí llega tu historia con el GHB. Tienes daños neurológicos leves. Te cuesta concentrarte. Te cuesta vivir sin la sustancia. Tienes miedo, pero estás enganchado. Espero que tengas suerte y fuerza de voluntad para recuperar tu vida. Va a ser complicado.',
      isFinal: true
    }
    ]
  },
  {
    drug: 'Heroína',
    photo: heroina,
    intro: 'La aguja entra... y todo desaparece. Calor, paz, silencio. Como volver al útero. Ningún problema importa. Solo una calma perfecta... que lo envuelve todo.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en un piso con "colegas". Les cuentas tus problemas. Uno de ellos saca una jeringuilla y te dice: "Esto te va a hacer olvidar todo".',
        choices: [
          { text: 'Probarla', impact: +10, next: 1 },
          { text: 'Negarte rotundamente', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'Te inyectas por primera vez, sientes una paz profunda, no existen los problemas. El mundo se desvanece y todo parece estar bien por fin.',
        choices: [
          { text: 'Volver a probarla al día siguiente', impact: +5, next: 2 },
          { text: 'Alejarte, sabes que es peligroso', impact: 0, next: 10}
        ]
      },
      {
        id: 2,
        text: 'Ha pasado un tiempo, tu cuerpo ya empieza a necesitarla. Tienes náuseas, sudores fríos. Solo se calma cuando consumes.',
        choices: [
          { text: 'Buscar la próxima dosis', impact: +10, next: 3 },
          { text: 'Tratar de soportar el mono', impact: +15, next: 10}
        ]
      },
      {
        id: 3,
        text: 'Intentas parar, pero tu cuerpo no coopera. Dolor muscular, insomnio, ansiedad extrema. El síndrome de abstinencia es brutal.',
        choices: [
          { text: 'Consumir de nuevo para calmar el dolor', impact: +15, next: 4 },
          { text: 'Llamar a una clínica de desintoxicación', impact: +5, next: 10}
        ]
      },
      {
        id: 4,
        text: 'Compartes jeringuilla en un descampado. No sabes si los demás están enfermos, pero eso ahora mismo te da igual.',
        choices: [
          { text: 'Consumir sin pensar en nada', impact: +5, next: 5 },
          { text: 'Lo piensas mejor, no quieres seguir.', impact: +10, next: 10}
        ]
      },
      {
        id: 5,
        text: 'Te enteras que uno de tus "colegas" tiene hepatitis. Sientes miedo, pero la ansiedad por consumir lo tapa todo.',
        choices: [
          { text: 'Ignorar el miedo y pincharte otra vez', impact: +10, next: 6 },
          { text: 'Buscar una alternativa más "segura"', impact: +5, next: 11}
        ]
      },
      {
        id: 6,
        text: 'Empiezas a mentir y a robar. Tu familia te ha echado de casa. Vives en la calle. Cada día te ves peor que el anterior.',
        choices: [
          { text: 'Robar para conseguir más', impact: +15, next: 7 },
          { text: 'Intentar llamar a alguien por ayuda', impact: 0, next: 11}
        ]
      },
      {
        id: 7,
        text: 'Tu cuerpo está destrozado. Estás cubierto de marcas, tienes infecciones. Apenas puedes caminar.',
        choices: [
          { text: 'Seguir consumiendo, es tu medicina.', impact: +15, next: 8 },
          { text: 'Pedir ayuda médica urgente', impact: -10, next: 11}
        ]
      },
      {
        id: 8,
        text: 'Tu camino con la heroína ha llegado al límite. Este es el final. ¿Te has hundido del todo, o hay algo de esperanza?',
        isFinal: true
      },
      {
        id: 9,
        text: 'Bien hecho, te has salvado a ti mismo. Lo más inteligente es un "no" a tiempo.',
        isFinal: true
      },
      {
        id: 10,
        text: 'Decides buscar ayuda y es una buena decisión, crees que ya has tenido un idilio mas que suficiente con la heroína, no quieres más.',
        isFinal: true
      },
      {
        id: 11,
        text: 'Notas que estás ya más que jodido, no quieres morir. Decides recuperar tu vida, aunque las consecuencias son visibles.',
        isFinal: true
      }
    ]
  },
  {
    drug: 'Ketamina',
    photo: ketamina,
    intro: 'Un viaje sin peso. La realidad se dobla, se estira, se disuelve. Flotas en otra dimensión. Lejos del dolor, lejos del cuerpo. Solo queda el asombro... y el vacío tranquilo.',
    scenesArray: [
      {
        id: 0,
        text: 'Es tu primer festival. Música electrónica, luces, amigos. Un amigo te ofrece "Keta". "Solo te desconecta un rato, tio".',
        choices: [
          { text: 'Aceptar con curiosidad', impact: +5, next: 1 },
          { text: 'Decir que no, por precación', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'Te sientes raro, como si tu cuerpo no fuere tuyo. Todo va lento. Te ríes, luego, blackout. No recuerdas nada.',
        choices: [
          { text: 'Reírte con los demás', impact: +5, next: 2 }, 
          { text: 'No pasa nada, ya preguntaré que pasó', impact: +5, next: 2 }
        ]
      },
      {
        id: 2,
        text: 'Pasa un mes, otro festival. Otro chute. Ya sabes como va. Lo mezclas con alcohol. Te gusta el viaje.',
        choices: [
          { text: 'Subir la dosis para ver "el agujero"', impact: +10, next: 3 },
          { text: 'Con esto me basta, no quiero más', impact: 0, next: 9}
        ]
      },
      {
        id: 3,
        text: 'Has empezado a consumir también en casa, con música. Te aísla, te evades. Sientes que lo controlas.',
        choices: [
          { text: 'Sigues usándola para desconectar', impact: +5, next: 4 },
          { text: 'Probarla antes de dormir', impact: +10, next: 4 }
        ]
      },
      {
        id: 4,
        text: 'Tus amigos dicen que te quedas colgado, que "te vas" demasiado. Tu te molestas. "No entiendo tu mundo".',
        choices: [
          { text: 'Crees que exageran, sigues con lo tuyo.', impact: +10, next: 5 },
          { text: 'Te evades para colocarte.', impact: -5, next: 5 }
        ]
      },
      {
        id: 5,
        text: 'Has perdido el apetito. Tienes episodios de despersonalización. A veces no sientes las piernas, vómitos, mareos.',
        choices: [
          { text: 'Ignorarlo, es parte del viaje', impact: +10, next: 6 },
          { text: 'Busca más para compensar', impact: +5, next: 6 }
        ]
      },
      {
        id: 6,
        text: 'Te han echado del trabajo. Dijeron que llegaste como ido, con la mirada vacía. Ni te acuerdas de lo que pasó.',
        choices: [
          { text: 'Buscar otro trabajo sin dejar de consumir', impact: +15, next: 7 },
          { text: 'Consumir para evadirte del despido', impact: +15, next: 7 }
        ]
      },
      {
        id: 7,
        text: 'Tu vejiga está dañada. Tienes cistitis crónica. El médico te pregunta si consumes Ketamina. Te asustas, pero no lo dices.',
        choices: [
          { text: 'Mentir y seguir consumiendo', impact: +15, next: 8 },
          { text: 'Decir que solo fué "alguna vez"', impact: +10, next: 8}
        ]
      },
      {
        id: 8,
        text: 'Empiezas a mezclar Ketamina con otras sustancias. Pastillas, alcohol. No te importa. Ya no vives, sobrevives.',
        choices: [
          { text: 'Buscar un colocón más fuerte', impact: +15, next: 9 },
          { text: 'Consumir solo para dormir', impact: +10, next: 9 }
        ]
      },
      {
        id: 9,
        text: 'Tu viaje con la Ketamina llega hasta aquí. Despiertas en una camilla. Has estado inconsciente horas. Tienes daño cerebral leve, te dicen que fué por sobredosis.',
        isFinal: true
      }
    ]
  },
  {
    drug: 'Metanfetamina',
    photo: metanfetamina,
    intro: 'Una chispa... y todo se enciende. Energía desbordante, energía pura. Horas sin cansancio, sin hambre, sin miedo. La mente corre, el cuerpo responde. Te sientes afilado, invencible... brillante.',
    scenesArray: [
      {
        id: 0,
        text: 'Un conocido te ofrece un cristal. "Te vas a sentir como un superhéroe" te dice. Estás en una fiesta y todo el mundo parece feliz.',
        choices: [
          { text: 'Probar la metanfetamina', impact: +10, next: 1 },
          { text: 'Rechazarla', impact: 0, next: 8 }
        ]
      },
      {
        id: 1,
        text: 'Sientes una oleada de energía y confianza. Todo parece fácil. No tienes hambre, ni sueño, ni miedo.',
        choices: [
          { text: 'Tomar otra dosis para mantener el subidón', impact: +5, next: 2 },
          { text: 'Tratar de parar ahí', impact: +5, next: 9 }
        ]
      },
      {
        id: 2,
        text: 'Han pasado dos días y no has dormido, tu mente empieza a correr sin control. Te obsesionas con limpiar todo a fondo.',
        choices: [
          { text: 'Seguir consumiendo', impact: +10, next: 3 },
          { text: 'Renegar de la sustancia', impact: +10, next: 9 }
        ]
      },
      {
        id: 3,
        text: 'Ha llovido mucho. Empiezas a ver sombras. Tienes la piel irritada, crees que hay insectos bajo ella. Te rascas hasta sangrar.',
        choices: [
          { text: 'Encerrarte a consumir solo', impact: +15, next: 4 },
          { text: 'Salir a la calle desorientado', impact: +15, next: 5 }
        ]
      },
      {
        id: 4,
        text: 'Han pasado días. No has comido. Tu rostro está pálido. Tus dientes empiezan a romperse, todo tu cuerpo te duele.',
        choices: [
          { text: 'Buscar más a cualquier precio', impact: +20, next: 5 },
          { text: 'Intentar recordar quién eras antes', impact: 0, next: 9}
        ]
      },
      {
        id: 5,
        text: 'Atacas a alguien por paranoia. Estás fuera de control. La policía te detiene, pero no recuerdas nada.',
        choices: [
          { text: 'Resistirte violentamente', impact: +20, next: 6 },
          { text: 'Aceptar la situación', impact: -10, next: 7 }
        ]
      },
      {
        id: 6,
        text: 'Sales de la comisaría con una denuncia, nadie responde tus llamadas. Estás completamente solo',
        choices: [
          { text: 'Volver a consumir por desesperación', impact: +30, next: 7 },
          { text: 'Ir a un centro de desintoxicación', impact: -10, next: 7 }
        ]
      },
      {
        id: 7,
        text: 'Ésta es tu historia con la metanfetamina. Tus decisiones marcan tu destino, no tienes buen aspecto.',
        isFinal: true
      },
      {
        id: 8,
        text: 'Como siempre, ésta es la mejor decisión. La más inteligente y la mas acertada, no hay duda.',
        isFinal: true
      },
      {
        id: 9,
        text: 'Te estás dando cuenta que este camino es muy peligroso. Quieres parar antes de que la cosa vaya a peor.',
        isFinal: true
      },
    ]
  },
  {
    drug: 'Fentanilo',
    photo: fentanilo,
    intro: 'Solo un pequeño toque... y todo se vuelve suave, cálido, lejano. El cuerpo flota, la mente se rinde. No hay dolor, no hay peso. Solo calma... profunda y total.',
    scenesArray: [
      {
        id: 0,
        text: 'Te ofrecen una pastilla en una fiesta. Te dicen que es "algo suave para relajarte, rollo oxy". Pero lleva fentanilo.',
        choices: [
          { text: 'Tomarla sin pensarlo', impact: +10, next: 1 },
          { text: 'Rechazarla con desconfianza', impact: 0, next: 9}
        ]
      },
      {
        id: 1,
        text: 'En pocos minutos te sientes flotando. Tu cuerpo se hunde en el sofá. Todo parece lejano. Pero tu respiración empieza a volverse lenta.',
        choices: [
          { text: 'Tomar otra más para mantener el efecto', impact: +10, next: 2 },
          { text: 'Dormir un poco, pasas de esto', impact: +5, next: 9}
        ]
      },
      {
        id: 2,
        text: 'Te despiertas en el suelo, alguien te reanimó con naloxona (medicamento contra sobredosis). Estuviste a punto de morir, te cuesta pensar con claridad.',
        choices: [
          { text: 'Ignorar lo ocurrido y seguir consumiendo', impact: +10, next: 3 },
          { text: 'Intentar dejarlo por miedo', impact: +5, next: 10 }
        ]
      },
      {
        id: 3,
        text: 'Intentas dejarlo pero el dolor físico es insoportable. Tu cuerpo lo pide a gritos. Sientes calambres y fríos.',
        choices: [
          { text: 'Consumir para aliviar síntomas', impact: +15, next: 4 },
          { text: 'Ir a urgencias', impact: 0, next: 10 }
        ]
      },
      {
        id: 4,
        text: 'Ahora lo necesitas cada pocas horas. Ya no es placer, es necesidad. Todo tu día gira en torno a conseguir más.',
        choices: [
          { text: 'Buscar nuevos proveedores', impact: +5, next: 5 },
          { text: 'Pedir ayuda a un familiar', impact: -5, next: 11}
        ]
      },
      {
        id: 5,
        text: 'Te venden una bolsita en mal estado. Te la inyectas. Tu visión se nubla, tu cuerpo cae al suelo. Silencio.',
        choices: [
          { text: 'Seguir consumiendo a pesar del riesgo', impact: +5, next: 6 },
          { text: 'Tirar todo y huir', impact: 0, next: 11 }
        ]
      },
      {
        id: 6,
        text: 'Vuelves a despertar en un hospital. Has tenido una segunda sobredosis. Esta vez, estuviste muerto durante varios minutos.',
        choices: [
          { text: 'Escapar del hospital para consumir', impact: +10, next: 7 },
          { text: 'Aceptar tratamineto intensivo', impact: -5, next: 12}
        ]
      },
      {
        id: 7,
        text: 'Estás solo, tu piel está gris, tus pupilas diminutas. Te cuesta hablar. El dolor no para. Tu vida depende de un hilo.',
        choices: [
          { text: 'No piensas en ello, solo en otra dosis.', impact: +10, next: 8 },
          { text: 'Pedir socorro desesperadamente', impact: -5, next: 12 }
        ]
      },
      {
        id: 8,
        text: 'Esta es tu historia con el fentanilo. Estás al borde del abismo, has entrado en un agujero muy negro. Los demonios te tienen bien agarrado.',
        isFinal: true
      },
      {
        id: 9,
        text: '¡Muy bien! Así es como conservas tu vida y tus proyectos.',
        isFinal: true
      },
      {
        id: 10,
        text: 'Has conseguido dejarlo pronto, todo el mundo no tiene la misma suerte.',
        isFinal: true
      },
      {
        id: 11,
        text: 'Las cosas se han complicado bastante. Esta mierda te ha dejado mal aspecto.',
        isFinal: true
      },
      {
        id: 12,
        text: 'Decides parar al borde de la muerte. ¿Te ha merecido la pena el sacrificio?',
        isFinal: true
      }
    ]
  },
  {
    drug: 'Krokodil',
    photo: krokodil,
    intro: 'Al principio... es como la heroína. Un chute de paz absoluta. El cuerpo se relaja, la mente se apaga. Nada duele, nada importa. Solo queda una sensación intensa... y dulce.',
    scenesArray: [
      {
        id: 0,
        text: 'Un amigo te ofrece algo "barato y potente". Es una mezcla casera, líquida, de aspecto sucio. Te dice que es lo único que le calma. Que es la leche.',
        choices: [
          { text: 'Inyectar', impact: +10, next: 1 },
          { text: 'Negarte', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'El subidón es fuerte y rápido. Pero dura poco. A los pocos minutos ya estás inquieto. Tu piel empieza a picar.',
        choices: [
          { text: 'Pedir otra dosis', impact: +5, next: 2 },
          { text: 'No quieres más', impact: +5, next: 10}
        ]
      },
      {
        id: 2,
        text: '¿Que tal te encuentras después de un tiempo? Tu brazo empieza a cambiar de color. La zona donde inyectaste se ve grisácea. Sientes ardor por dentro.',
        choices: [
          { text: 'Ignora el dolor, la sensación de la dosis te gusta.', impact: +10, next: 3 },
          { text: 'Tratar de desinfectarte', impact: +10, next: 10 }
        ]
      },
      {
        id: 3,
        text: 'Intentas resistir, pero los temblores son intensos. Te arrancas costras con las uñas. No paras de sudar.',
        choices: [
          { text: 'Volver a inyectarte para calmarte', impact: +15, next: 4 },
          { text: 'Pedir ayuda médica', impact: +5, next: 10 }
        ]
      },
      {
        id: 4,
        text: 'Tus dedos se han ennegrecido. En la calle, nadie te quiere cerca. Tus heridas supuran. No puedes ocultarlo.',
        choices: [
          { text: 'Seguir consumiendo a pesar del daño', impact: +15, next: 5 },
          { text: 'Buscar un sitio donde esconderte', impact: +10, next: 6 }
        ]
      },
      {
        id: 5,
        text: 'Un médico de urgencias te dice que tiene que amputarte el brazo. Te da igual, solo piensas en la próxima dosis.',
        choices: [
          { text: 'Escapar del hospital', impact: +10, next: 6 },
          { text: 'Aceptar el tratamiento', impact: -5, next: 11}
        ]
      },
      {
        id: 6,
        text: 'Duermes en un callejón, ya no sientes el brazo. Apenas puedes caminar. Eres como la peste negra, nadie te quiere cerca.',
        choices: [
          { text: 'Inyectarte en la pierna', impact: +10, next: 7 },
          { text: 'No quieres seguir con esta pesadilla', impact: -5, next: 11}
        ]
      },
      {
        id: 7,
        text: 'Tu cuerpo está en estado crítico. Te han rechazado ya en dos hospitales. Las moscas rondan tus heridas, esta mierda te está comiendo literalmente la piel.',
        choices: [
          { text: 'Consumir, consumir, consumir', impact: +15, next: 8 },
          { text: 'No quieres morir, quieres internarte', impact: -10, next: 11}
        ]
      },
      {
        id: 8,
        text: 'Tu relación con el Krokodil te ha dejado muerto en vida. Eres como un zombi, estás acabado.',
        isFinal: true
      },
      {
        id: 9,
        text: 'La mejor decisión que puedes tomar. Siempre di NO a las drogas.',
        isFinal: true
      },
      {
        id: 10,
        text: 'Con esto tienes más que suficiente, aunque debiste decir no desde el principio.',
        isFinal: true
      },
      {
        id: 11,
        text: 'Tu aspecto es horrible, tu cuerpo está muy maltratado. ¿Porqué te has hecho esto?',
        isFinal: true
      }
    ]
  }
]