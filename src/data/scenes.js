export const scenes = [
  {
    drug: 'Alcohol',
    photo: '../../public/images/drogas/alcohol.jpg',
    intro: 'Una copa para celebrar. Risas, música, amigos. Te sientes libre, valiente, invencible. Todo fluye, todo brilla un poco más. Por un momento el mundo es perfecto.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en una fiesta, te invitan a una copa...',
        choices: [
          { text: 'Aceptar la copa', impact: +15, next: 1 },
          { text: 'Rechazar amablemente', impact: 0, next: 5 }
        ]
      },
      {
        id: 1,
        text: 'Sientes el efecto. Estás mas desinhibido y con ganas de seguir bebiendo.',
        choices: [
          { text: 'Tomas unas cuantas más', impact: +25, next: 2 },
          { text: 'Te detienes y tomas agua', impact: -5, next: 2}
        ]
      },
      {
        id: 2,
        text: 'Pasa el tiempo y ahora bebes diariamente, te gusta la sensación que te produce.',
        choices: [
          { text: 'Sigues bebiendo sin restricciones.', impact: +30, next: 3 },
          { text: 'Quieres intentar dejar el acohol.', impact: -5, next: 3 }
        ]
      },
      {
        id: 3,
        text: 'No puedes probarlo, con dar un solo trago ya no puedes parar. El acohol se vuelve algo normal en tu día a día.',
        choices: [
          { text: 'No pasa nada, estás a gusto así, sigues tomando.', impact: +40, next: 4 },
          { text: 'Decides limitar tu consumo', impact: -10, next: 4 }
        ]
      },
      {
        id: 4,
        text: 'Tu experiencia con el acohol tendrá consecuencias visibles.',
        isFinal: true
      },
      {
        id: 5, 
        text: 'Rechazaste la mayoría de las veces. Bebes ocasionalmente, pero siempre con control. Nada preocupante. Has sabido marcar tus límites.',
        isFinal: true
      }
    ],
  },
  { 
    drug: 'Cocaína',
    photo: '../../public/images/drogas/cocaina.jpg',
    intro: 'Una línea. Y de pronto... todo va más rápido. Energía al máximo. Confianza, poder, euforia. Te sientes imparable. Como si nada pudiera tocarte.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en la feria de tu ciudad con dos amigos. Uno se hace tres rayas. Los dos consumen, faltas tú.',
        choices: [
          { text: 'Decides probar', impact: +15, next: 1 },
          { text: 'Les dices que no quieres', impact: 0, next: 6 }
        ]
      },
      {
        id: 1,
        text: 'Han pasado tres meses. Desde entonces, la consumes en algunas fiestas. No la compras, pero la aceptas.',
        choices: [
          { text: 'Empiezas a comprar para tener en casa', impact: +25, next: 2 },
          { text: 'Solo la tomas en ocasiones especiales', impact: +10, next: 2 }
        ]
      },
      {
        id: 2,
        text: 'Ahora tu consumo es semanal. Empiezas a tener insomnio, ansiedad y a aislarte de tu familia.',
        choices: [
          { text: 'Sigues consumiendo porque crees que te ayuda a rendir.', impact: +30, next: 3 },
          { text: 'Intentas parar, pero no puedes del todo', impact: +10, next: 3 }
        ]
      },
      {
        id: 3,
        text: 'Ha pasado el tiempo. Pierdes dos trabajos por bajo rendimiento, llegabas tarde.',
        choices: [
          { text: 'Te aíslas aún más y evitas a tus amigos de siempre', impact: +25, next: 4 },
          { text: 'Buscas ayuda en un familiar de confianza', impact: -15, next: 4}
        ]
      },
      {
        id: 4,
        text: 'Después de lo pasado, esta droga sigue poniéndote a prueba. Te tiene atrapado hasta un punto que no imaginabas.',
        choices: [
          { text: 'Recaes tras un intento de rehabilitación', impact: +40, next: 5 },
          { text: 'Sigues en tratamiento, con recaídas pero con esperanzas', impact: -10, next: 5 }
        ]
      },
      {
        id: 5,
        text: 'Tu camino con la cocaína ha dejado huella, las decisiones que tomaste determinaron tu destino y deterioro. Una sola elección marca toda una vida.',
        isFinal: true
      },
      {
        id: 6,
        text: 'Tus amigos siguen consumiendo, tu decides mantenerte al margen. Con el tiempo ellos se alejan.',
        choices: [
          { text: 'Te alejas de ese grupo y haces nuevos amigos', impact: -10, next: 7 },
          { text: 'Sigues saliendo con ellos sin consumir', impact: 0, next: 7 }
        ]
      },
      {
        id: 7,
        text: 'Años después estás en una relación estable y tienes trabajo. Uno de tus viejos amigos murió por sobredosis. Aquel "no" cambió tu vida por completo.',
        isFinal: true
      }
    ]
  },
  {
    drug: 'Crack',
    photo: '../../public/images/drogas/crack.jpg',
    intro: 'Una calada... y estalla la mente. El placer es instantáneo, intenso, brutal. Por unos segundos no existe el dolor. Solo tu y esa sensación que lo eclipsa todo. Pura euforia.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en una plaza con colegas. Uno te ofrece una pipa de cristal. "Solo un toque", te dice. Te pica la curiosidad.',
        choices: [
          { text: 'Decides una calada', impact: +20, next: 1 },
          { text: 'Negarte y marcharte', impact: 0, next: 9 } 
        ]
      },
      {
        id: 1,
        text: 'El efecto es inmediato, una euforia brutal. Pero en minutos desaparece y sientes un vacío extraño.',
        choices: [
          { text: 'Pedir otra calada', impact: +15, next: 2 },
          { text: 'Decides parar', impact: +5, next: 9 }
        ]
      },
      {
        id: 2,
        text: 'Mañana vuelves a fumar, ya no es lo mismo. Se te acaba. Estás mas ansioso, mas tembloroso. No puedes dejar de pensar en la próxima calada.',
        choices: [
          { text: 'Buscas más por tu cuenta', impact: +15, next: 3 },
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
          { text: 'Consumes para calmarte', impact: +20, next: 6 },
          { text: 'Buscar refugio', impact: +10, next: 12 }
        ]
      },
      {
        id: 6,
        text: 'Lo has perdido todo. Robas para consumir. Te duelen los huesos. Te miras al espejo y no te reconoces.',
        choices: [
          { text: 'Fumar para calmar dolores', impact: +20, next: 7 },
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
    photo: '../../public/images/drogas/ghb.jpg',
    intro: 'Una dosis y todo se vuelve ligero. Ríes sin motivo, bailas sin miedo. El mundo vibra, el cuerpo se suelta. Sensaciones intensas, caricias más vivas. Todo es placer...sin frenos.',
    scenesArray: []
  },
  {
    drug: 'Heroína',
    photo: '../../public/images/drogas/heroina.webp',
    intro: 'La aguja entra... y todo desaparece. Calor, paz, silencio. Como volver al útero. Ningún problema importa. Solo una calma perfecta... que lo envuelve todo.',
    scenesArray: [
      {
        id: 0,
        text: 'Estás en un piso con "colegas". Les cuentas tus problemas. Uno de ellos saca una jeringuilla y te dice: "Esto te va a hacer olvidar todo".',
        choices: [
          { text: 'Probarla', impact: +20, next: 1 },
          { text: 'Negarte rotundamente', impact: 0, next: 9 }
        ]
      },
      {
        id: 1,
        text: 'Te inyectas por primera vez, sientes una paz profunda, no existen los problemas. El mundo se desvanece y todo parece estar bien por fin',
        choices: [
          { text: 'Volver a probarla al día siguiente', impact: +15, next: 2 },
          { text: 'Alejarte, sabes que es peligroso', impact: +5, next: 10}
        ]
      },
      {
        id: 2,
        text: 'Tu cuerpo ya empieza a necesitarla. Tienes náuseas, sudores fríos. Solo se calma cuando consumes.',
        choices: [
          { text: 'Buscar la próxima dosis', impact: +15, next: 3 },
          { text: 'Tratar de soportar el mono', impact: +10, next: 10}
        ]
      },
      {
        id: 3,
        text: 'Intentas parar, pero tu cuerpo no coopera. Dolor muscular, insomnio, ansiedad extrema. El síndrome de abstinencia es brutal.',
        choices: [
          { text: 'Consumir de nuevo para calmar el dolor', impact: +20, next: 4 },
          { text: 'Llamar a una clínica de desintoxicación', impact: +10, next: 10}
        ]
      },
      {
        id: 4,
        text: 'Compartes jeringuilla en un descampado. No sabes si los demás están enfermos, pero eso ahora mismo te da igual.',
        choices: [
          { text: 'Consumir sin pensar en nada', impact: +20, next: 5 },
          { text: 'Lo piensas mejor, no quieres seguir.', impact: +10, next: 10}
        ]
      },
      {
        id: 5,
        text: 'Te enteras que uno de tus "colegas" tiene hepatitis. Sientes miedo, pero la ansiedad por consumir lo tapa todo.',
        choices: [
          { text: 'Ignorar el miedo y pincharte otra vez', impact: +20, next: 6 },
          { text: 'Buscar una alternativa más "segura"', impact: +5, next: 11}
        ]
      },
      {
        id: 6,
        text: 'Empiezas a mentir y a robar. Tu familia te ha echado de casa. Vives en la calle. Cada día te ves peor que el anterior.',
        choices: [
          { text: 'Robar para conseguir más', impact: +20, next: 7 },
          { text: 'Intentar llamar a alguien por ayuda', impact: -5, next: 11}
        ]
      },
      {
        id: 7,
        text: 'Tu cuerpo está destrozado. Estás cubierto de marcas, tienes infecciones. Apenas puedes caminar.',
        choices: [
          { text: 'Seguir consumiendo, es tu medicina.', impact: +20, next: 8 },
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
    photo: '../../public/images/drogas/ketamina.webp',
    intro: 'Un viaje sin peso. La realidad se dobla, se estira, se disuelve. Flotas en otra dimensión. Lejos del dolor, lejos del cuerpo. Solo queda el asombro... y el vacío tranquilo.',
    scenesArray: []
  },
  {
    drug: 'Metanfetamina',
    photo: '../../public/images/drogas/metanfetamina.webp',
    intro: 'Una chispa... y todo se enciende. Energía desbordante, energía pura. Horas sin cansancio, sin hambre, sin miedo. La mente corre, el cuerpo responde. Te sientes afilado, invencible... brillante.',
    scenesArray: [
      {
        id: 0,
        text: 'Un conocido te ofrece un cristal. "Te vas a sentir como un superhéroe" te dice. Estás en una fiesta y todo el mundo parece feliz.',
        choices: [
          { text: 'Probar la metanfetamina', impact: +20, next: 1 },
          { text: 'Rechazarla', impact: 0, next: 8 }
        ]
      },
      {
        id: 1,
        text: 'Sientes una oleada de energía y confianza. Todo parece fácil. No tienes hambre, ni sueño, ni miedo.',
        choices: [
          { text: 'Tomar otra dosis para mantener el subidón', impact: +15, next: 2 },
          { text: 'Tratar de parar ahí', impact: +5, next: 9 }
        ]
      },
      {
        id: 2,
        text: 'Han pasado dos días y no has dormido, tu mente empieza a correr sin control. Te obsesionas con limpiar todo a fondo.',
        choices: [
          { text: 'Seguir consumiendo', impact: +20, next: 3 },
          { text: 'Intentar descansar', impact: +10, next: 9 }
        ]
      },
      {
        id: 3,
        text: 'Empiezas a ver sombras. Tienes la piel irritada, crees que hay insectos bajo ella. Te rascas hasta sangrar.',
        choices: [
          { text: 'Encerrarte a consumir solo', impact: +20, next: 4 },
          { text: 'Salir a la calle desorientado', impact: +10, next: 5 }
        ]
      },
      {
        id: 4,
        text: 'Han pasado días. No has comido. Tu rostro está pálido. Tus dientes empiezan a romperse, todo tu cuerpo te duele.',
        choices: [
          { text: 'Buscar más a cualquier precio', impact: +20, next: 5 },
          { text: 'Intentar recordar quién eras antes', impact: -5, next: 9}
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
    photo: '../../public/images/drogas/fentanilo.jpg',
    intro: 'Solo un pequeño toque... y todo se vuelve suave, cálido, lejano. El cuerpo flota, la mente se rinde. No hay dolor, no hay peso. Solo calma... profunda y total.',
    scenesArray: []
  },
  {
    drug: 'Krokodil',
    photo: '../../public/images/drogas/krokodil.jpg',
    intro: 'Al principio... es como la heroína. Un chute de paz absoluta. El cuerpo se relaja, la mente se apaga. Nada duele, nada importa. Solo queda una sensación intensa... y dulce.',
    scenesArray: []
  }
]