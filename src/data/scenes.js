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
    scenes: []
  },
  {
    drug: 'GHB',
    photo: '../../public/images/drogas/ghb.jpg',
    intro: 'Una dosis y todo se vuelve ligero. Ríes sin motivo, bailas sin miedo. El mundo vibra, el cuerpo se suelta. Sensaciones intensas, caricias más vivas. Todo es placer...sin frenos.',
    scenes: []
  },
  {
    drug: 'Heroína',
    photo: '../../public/images/drogas/heroina.webp',
    intro: 'La aguja entra... y todo desaparece. Calor, paz, silencio. Como volver al útero. Ningún problema importa. Solo una calma perfecta... que lo envuelve todo.',
    scenes: []
  },
  {
    drug: 'Ketamina',
    photo: '../../public/images/drogas/ketamina.webp',
    intro: 'Un viaje sin peso. La realidad se dobla, se estira, se disuelve. Flotas en otra dimensión. Lejos del dolor, lejos del cuerpo. Solo queda el asombro... y el vacío tranquilo.',
    scenes: []
  },
  {
    drug: 'Metanfetamina',
    photo: '../../public/images/drogas/metanfetamina.webp',
    intro: 'Una chispa... y todo se enciende. Energía desbordante, energía pura. Horas sin cansancio, sin hambre, sin miedo. La mente corre, el cuerpo responde. Te sientes afilado, invencible... brillante.',
    scenes: []
  },
  {
    drug: 'Fentanilo',
    photo: '../../public/images/drogas/fentanilo.jpg',
    intro: 'Solo un pequeño toque... y todo se vuelve suave, cálido, lejano. El cuerpo flota, la mente se rinde. No hay dolor, no hay peso. Solo calma... profunda y total.',
    scenes: []
  },
  {
    drug: 'Krokodil',
    photo: '../../public/images/drogas/krokodil.jpg',
    intro: 'Al principio... es como la heroína. Un chute de paz absoluta. El cuerpo se relaja, la mente se apaga. Nada duele, nada importa. Solo queda una sensación intensa... y dulce.',
    scenes: []
  }
]