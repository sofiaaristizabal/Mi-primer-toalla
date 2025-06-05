
import { SectionData, QuizData, IdentificationGameData } from './types';

const comprehensionQuizData: QuizData = {
  id: 'periodoBasicsQuiz',
  title: '✏️ ¿Cuánto Sabes sobre tu Periodo?',
  questions: [
    {
      id: 'q1',
      questionText: "¿Qué es la menstruación o 'regla'?",
      options: [
        { id: 'q1o1', text: 'Una enfermedad común en las niñas.' },
        { id: 'q1o2', text: 'La limpieza natural que hace el útero cada mes.' },
        { id: 'q1o3', text: 'Cuando te lavas mucho las manos.' },
      ],
      correctOptionId: 'q1o2',
      feedbackCorrect: '¡Exacto! Es una limpieza natural y saludable. ¡Muy bien!',
      feedbackIncorrect: '¡Estuviste cerca! La respuesta correcta es "La limpieza natural que hace el útero cada mes". ¡Es algo natural y saludable en tu cuerpo!',
    },
    {
      id: 'q2',
      questionText: '¿Cada cuánto tiempo es bueno cambiar tu toalla femenina?',
      options: [
        { id: 'q2o1', text: 'Una vez al día.' },
        { id: 'q2o2', text: 'Cada 4 a 6 horas, o cuando la sientas llena.' },
        { id: 'q2o3', text: 'Solo cuando te vas a dormir.' },
      ],
      correctOptionId: 'q2o2',
      feedbackCorrect: '¡Muy bien! Así te mantienes cómoda y limpia. ¡Excelente!',
      feedbackIncorrect: '¡Casi! Lo ideal es "Cada 4 a 6 horas, o cuando la sientas llena". Así te mantienes fresca.',
    },
    {
      id: 'q3',
      questionText: '¿Dónde debes tirar la toalla usada?',
      options: [
        { id: 'q3o1', text: 'En el inodoro.' },
        { id: 'q3o2', text: 'En cualquier lugar escondido.' },
        { id: 'q3o3', text: 'Enrollada en su envoltorio o papel, y luego al bote de basura.' },
      ],
      correctOptionId: 'q3o3',
      feedbackCorrect: '¡Correctísimo! Siempre a la basura, nunca al inodoro. ¡Así cuidamos el planeta y las tuberías!',
      feedbackIncorrect: '¡Atenta! La respuesta es "Enrollada en su envoltorio o papel, y luego al bote de basura". ¡Nunca al inodoro!',
    },
     {
      id: 'q4',
      questionText: 'Si te llega la regla fuera de casa y no tienes toalla, ¿qué puedes hacer?',
      options: [
        { id: 'q4o1', text: 'No decirle a nadie y aguantarte.' },
        { id: 'q4o2', text: 'Pedir ayuda a tus papas, amigas o cuidador.' },
        { id: 'q4o3', text: 'Salir corriendo a casa sin avisar.' },
      ],
      correctOptionId: 'q4o2',
      feedbackCorrect: '¡Excelente! Pedir ayuda es lo mejor que puedes hacer. ¡Siempre hay alguien dispuesto a ayudarte!',
      feedbackIncorrect: '¡No te preocupes! Lo mejor es "Pedir ayuda a una profesora, amiga o en la enfermería". Siempre hay alguien para apoyarte.',
    },
  ],
};

const padIdentificationGameData: IdentificationGameData = {
  id: 'findThePadGame',
  title: '🎯 ¡Encuentra la Toalla!',
  rounds: [
    {
      id: 'r1',
      prompt: 'Entre estas cosas, ¿cuál es la toalla femenina?',
      items: [
        { id: 'r1i1', name: 'Una curita (tirita)', imageUrl: '/curita.png', altText: 'Curita', isCorrect: false },
        { id: 'r1i2', name: 'Una toallita femenina', imageUrl: '/cmo se ve la toalla.png', altText: 'Toalla femenina', isCorrect: true },
        { id: 'r1i3', name: 'Una esponja para lavar platos', imageUrl: '/esponja.png', altText: 'Esponja de cocina', isCorrect: false },
      ],
    },
    {
      id: 'r2',
      prompt: '¡Otra vez! ¿Cuál de estos es para tu periodo?',
      items: [
        { id: 'r2i1', name: 'Un pañal de bebé', imageUrl: '/pamper.png', altText: 'Pañal de bebé', isCorrect: false },
        { id: 'r2i2', name: 'Un pañuelo de papel', imageUrl: '/pañuelo.png', altText: 'Pañuelo de papel', isCorrect: false },
        { id: 'r2i3', name: 'Una toallita femenina con alas', imageUrl: '/toalla con alas.png', altText: 'Toalla femenina con alas', isCorrect: true },
      ],
    },
     {
      id: 'r3',
      prompt: '¡Última ronda! Identifica la toalla.',
      items: [
        { id: 'r3i1', name: 'Una toallita femenina nocturna', imageUrl: '/toalla nocturna.png', altText: 'Toalla femenina nocturna', isCorrect: true },
        { id: 'r3i2', name: 'Un algodón desmaquillante', imageUrl: '/algodon.png', altText: 'Algodón desmaquillante', isCorrect: false },
        { id: 'r3i3', name: 'Un jabón en barra', imageUrl: '/jabon.png', altText: 'Jabón en barra', isCorrect: false },
      ],
    },
  ],
};


export const SECTIONS_DATA: SectionData[] = [
  {
    id: 'hero-inicio',
    navTitle: 'Inicio',
    title: 'Mi primera toalla',
    icon: '👋',
    bgColor: 'bg-gradient-to-br from-pink-200 via-white to-pink-100',
    textColor: 'text-pink-700',
    titleColor: 'text-pink-600',
    content: [
      { type: 'paragraph', text: "La guia secreta de las chicas" }
    ],
  },
  {
    id: 'que-es-la-menstruacion',
    navTitle: '¿Qué es?',
    title: '¿Qué es la Menstruación?',
    icon: '🩸',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-100',
    textColor: 'text-rose-700',
    titleColor: 'text-pink-600',
    content: [
      { type: 'paragraph', text: "¡Hola! Vamos a charlar sobre algo súper normal que nos pasa a las chicas cuando crecemos: ¡la menstruación! A veces también la llamamos 'la regla' o 'el periodo'." },
      { type: 'image', imageUrl: '/etapas.png', altText: 'Etapas de crecimiento de la mujer' },
      { type: 'paragraph', text: "¿Sabes por qué ocurre? Imagina que tu útero (es como una cama blanda dentro de ti) se prepara cada mes por si un bebé quisiera crecer ahí. Si no hay bebé, esa cama suelta una parte de su colchón. ¡Eso es la menstruación! Es como una limpieza natural que hace tu cuerpo." },
      { type: 'paragraph', text: "Suele empezar cuando tienes entre 9 y 13 años, ¡pero cada cuerpo es un mundo y tiene su propio ritmo! Así que no te preocupes si a tus amigas les llega antes o después que a ti." },
      { type: 'image', imageUrl: '/cuanto dura el periodo.png', altText: 'Toallita y calendario simbolizando el ciclo menstrual' },
      { type: 'paragraph', text: "Es algo completamente natural y una señal de que tu cuerpo está sano y se está desarrollando. ¡No hay nada de qué avergonzarse, al contrario, es parte de ser una chica increíble!" },
    ],
  },
  {
    id: 'que-es-una-toalla',
    navTitle: 'Toalla',
    title: '¿Qué es una Toalla Femenina?',
    icon: '🩹',
    bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-100',
    textColor: 'text-fuchsia-700',
    titleColor: 'text-purple-600',
    content: [
      { type: 'paragraph', text: "Una toalla femenina, también llamada compresa, es como una almohada suave y absorbente que se pone en tu ropa interior (tus panti o calzones) para recoger el flujo menstrual." },
      { type: 'image', imageUrl: '/cmo se ve la toalla.png', altText: 'Ilustración de una toallita femenina' },
      { type: 'paragraph', text: "¡Así te sientes limpia, cómoda y segura durante tu periodo, para que puedas seguir haciendo todas tus cosas!" },
      { type: 'subheading', text: "Hay diferentes tipos, ¡como superhéroes con distintos poderes!:" },
      { type: 'list', items: [
          "🌞 **Para el día:** Son más comunes y vienen en varios tamaños.",
          "🌜 **Para la noche:** Suelen ser más largas y anchas para protegerte mejor mientras duermes.",
          "🦋 **Con alas:** Tienen unas extensiones a los lados que se doblan y pegan debajo de tu ropa interior para que la toalla no se mueva. ¡Como si tuviera alas para quedarse en su sitio!",
          "🚫 **Sin alas:** Son más sencillas y se pegan directamente."
        ]
      },
    ],
  },
  {
    id: 'como-usar-toallita',
    navTitle: 'Cómo Usarla',
    title: 'Paso a Paso: Cómo Usar una Toalla',
    icon: '✨',
    bgColor: 'bg-gradient-to-br from-pink-100 to-rose-200', 
    textColor: 'text-pink-800',
    titleColor: 'text-pink-700',
    content: [
      { type: 'paragraph', text: "¡Usar una toalla es muy fácil! Aquí te explicamos cómo, paso a paso:" },
      {
        type: 'orderedList',
        orderedItems: [
          { id: 'step1', text: "**Lava tus manos:** ¡Súper importante! Usa agua y jabón antes y después de cambiar tu toalla.", imageUrl: '/1 lavarse las manos.png', altText: 'Paso 1: Lavarse las manos' },
          { id: 'step2', text: "**Abre la toalla:** Con cuidado, quita el envoltorio. Algunas toallas usan el mismo envoltorio para desecharla después, ¡qué práctico!", imageUrl: '/2 abrir la toalla.png', altText: 'Paso 2: Abrir el empaque de la toallita' },
          { id: 'step3', text: "**Despega el papel:** Verás una tira de papel (o a veces dos) que cubre el pegamento en la parte de atrás de la toalla y en las alas (si tiene). ¡Quítala con cuidado!", imageUrl: '/3 despegar el ppelito.png', altText: 'Paso 3: Quitar el papel protector del adhesivo' },
          { id: 'step4', text: "**Pégala en tu ropa interior:** Coloca la parte con pegamento en el centro de tu panti o calzón. La parte más ancha suele ir hacia atrás. Si tiene alas, dóblalas hacia abajo y pégalas por fuera del calzón.", imageUrl: '/4 pegarla a la ropa.png', altText: 'Paso 4: Colocar la toallita en la ropa interior' },
          { id: 'step5', text: "**Súbete la ropa:** ¡Ajusta tu ropa interior y listo! Ya estás protegida y cómoda." , imageUrl: '/5 subirse la ropa interior.png', altText: 'Paso 3: Quitar el papel protector del adhesivo' },
          { id: 'step6', text: "**Para quitarla y tirarla:** Cuando esté llena o pasen unas horas, despégala de tu ropa interior. Enróllala como un tubito (puedes usar el envoltorio de la nueva toallita o un poco de papel higiénico para envolverla) y ¡al bote de basura! **Muy importante: ¡Nunca la tires al inodoro!** Podría tapar las tuberías. Lo explicaremos mas a detalle en la siguiente sección." },
          { id: 'step7', text: "**Lava tus manos otra vez:** ¡Perfecto! Mantener tus manos limpias es clave.",  imageUrl: '/1 lavarse las manos.png', altText: 'Paso 7: Lavarse las manos nuevamente' },
        ],
      },
      { type: 'subheading', text: "¡Pequeños Trucos de Magia!" },
      { type: 'list', items: [
          "✨ **Ropa Interior Amiga:** Los calzones de algodón que te queden bien ajustados (pero cómodos) son geniales para que la toalla se quede en su sitio.",
          "✨ **Mira y Aprende:** No te preocupes si al principio te parece un poco raro, ¡con la práctica serás una experta!"
        ]
      },
      { type: 'subheading', text: "👍 Cosas que SÍ deberías Hacer:" },
      { type: 'list', items: [
          "Cambiar tu toalla cada pocas horas (unas 4-6 horas, o antes si lo necesitas).",
          "Sentirte cómoda y preguntar si tienes dudas.",
          "Llevar una toalla extra en tu mochila, ¡por si acaso!"
        ]
      },
      { type: 'subheading', text: "👎 Cosas que NO deberías Hacer:" },
      { type: 'list', items: [
          "Tirar la toalla al inodoro. ¡Recuerda siempre tirarla a la basura!",
          "Aguantarte si te sientes incómoda o la toalla está muy llena.",
          "Sentir vergüenza. ¡Es lo más normal del mundo!"
        ]
      }
    ],
  },
  {
    id: 'como-cambiar-toallita',
    navTitle: 'Cambiar Toalla',
    title: 'Paso a Paso: Cómo Cambiar la Toalla',
    icon: '🔄',
    bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-100',
    textColor: 'text-teal-700',
    titleColor: 'text-cyan-600',
    content: [
      { type: 'paragraph', text: "¡Cambiar tu toalla es muy importante para sentirte fresca y cómoda! Aquí te enseñamos cómo hacerlo, ¡es muy fácil y te sentirás genial!" },
      {
        type: 'orderedList',
        orderedItems: [
          { id: 'cambiar-step1', text: "**Pide Permiso con Confianza:** Si estás en el colegio o en casa de alguien y necesitas ir al baño, ¡no dudes en pedirlo! Con una sonrisa, puedes decir: _'¿Me das permiso para ir al baño, por favor?'_. ¡Es muy valiente pedir lo que necesitas!", imageUrl: '/paso 1.png', altText: 'Niña levantando la mano amablemente para pedir permiso' },
          { id: 'cambiar-step2', text: "**Dirígete al Baño Tranquilamente:** Una vez que te den permiso, camina con calma hacia el baño. Si no estás segura de dónde está, pregunta con amabilidad: _'¿Podrías decirme dónde está el baño?'_. ¡Siempre habrá alguien dispuesto a ayudarte!", imageUrl: '/paso 2.png', altText: 'Niña caminando con seguridad hacia la puerta del baño' },
          { id: 'cambiar-step3', text: "**¡Manos Limpias Primero!:** Antes de tocar nada más, ¡es hora de lavar esas manos! Usa agua tibia y jabón, y frótalas bien, como una experta. ¡Así nos aseguramos de que todo esté súper limpio!", imageUrl: '/1 lavarse las manos.png', altText: 'Lavándose las manos con agua y jabón' },
          { id: 'cambiar-step4', text: "**Prepara tu Ropa:** Con cuidado, baja tus pantalones y tu ropa interior (panti o calzón) hasta las rodillas. Así tendrás espacio para cambiar tu toalla cómodamente y sin prisas.", imageUrl: '/paso 10.png', altText: 'Ilustración mostrando cómo bajar la ropa interior para cambiar la toallita' },
          { id: 'cambiar-step5', text: "**Retira la Toalla Usada:** Con suavidad, toma la toalla usada por los bordes o el centro y despégala de tu ropita interior. Si tiene alas primero despega estas y luego el resto de la toalla. ¡Con cuidado para no ensuciarte!", imageUrl: '/paso 6.png', altText: 'Mano retirando con cuidado la toallita usada de la ropa interior' },
          { id: 'cambiar-step6', text: "**Enrólla la toalla:** ¡Vamos a ser muy listas y limpias! Enrolla la toalla usada sobre sí misma, como si hicieras un pequeño tubito o un taquito. Puedes usar un trozo de papel higiénico o el mismo envoltorio de la toalla nueva para envolverla bien.", imageUrl: '/paso 7.png', altText: 'Toallita usada siendo enrollada cuidadosamente en papel higiénico' },
          { id: 'cambiar-step7', text: "**Al Bote de Basura:** Busca el bote de basura (¡la caneca de los desechos!) y deposita ahí tu toalla enrollada. **Súper importante:** ¡nunca, nunca, nunca la tires dentro del inodoro! Podría hacer que el baño no funcione bien.", imageUrl: '/paso 8.png', altText: 'Mano depositando la toallita enrollada en el bote de basura' },
          { id: 'cambiar-step8', text: "**¡Hora de la Toalla Nueva!:** ¡Genial! Ahora toma una toalla limpia. ¿Recuerdas cómo la pusimos antes? (en la sección anterior). Ábrela con cuidado, quita el papel que protege el pegamento y pégala en el centro de tu ropita interior. Si tiene alas, dóblalas hacia abajo y pégalas por fuera. ¡Perfecto!", imageUrl: '/paso 5.png', altText: 'Colocando una nueva toallita limpia en la ropa interior' },
          { id: 'cambiar-step9', text: "**¡Arriba la Ropa y Manos Limpias de Nuevo!:** Súbete con cuidado tu ropa interior y tus pantalones. Para terminar, vuelve a lavar tus manos con agua y jabón. ¡Ahora sí, estás fresca, limpia y lista para seguir con tu día!", imageUrl: '/5 subirse la ropa interior.png', altText: 'Niña sonriendo y mostrando sus manos limpias después de cambiar su toallita' },
        ],
      },
      { type: 'paragraph', text: "¡Lo has hecho de maravilla! Cambiar tu toalla es una forma de cuidarte y quererte. ¡Sigue así de genial!" }
    ],
  },
  {
    id: 'cada-cuanto-cambiar',
    navTitle: 'Cambio',
    title: '¿Cada Cuánto Cambiar la Toalla?',
    icon: '⏰',
    bgColor: 'bg-gradient-to-br from-rose-50 to-fuchsia-50',
    textColor: 'text-rose-700',
    titleColor: 'text-rose-500',
    content: [
      { type: 'paragraph', text: "Es una buena idea cambiar tu toalla cada 4 a 6 horas. ¡Pero esto es como una guía, no una regla fija!" },
      { type: 'image', imageUrl: '/cambios diarios (2).png', altText: 'Momentos del día para cambiar la compresa' },
      { type: 'paragraph', text: "Si sientes que está llena antes, o si vas a hacer deporte o nadar (aunque para nadar hay otras opciones como los tampones o la copa menstrual, de eso podemos hablar más adelante cuando seas un poco más mayor), ¡cámbiala!" },
      { type: 'paragraph', text: "Lo más importante es que te sientas limpia, seca y cómoda. Escucha a tu cuerpo, ¡él te dirá cuándo es el momento!" },
    ],
  },
  {
    id: 'consejos-higiene',
    navTitle: 'Higiene',
    title: 'Consejos de Higiene Íntima',
    icon: '🧼',
    bgColor: 'bg-gradient-to-br from-fuchsia-50 to-violet-100',
    textColor: 'text-purple-700',
    titleColor: 'text-purple-500',
    content: [
      { type: 'paragraph', text: "Mantener una buena higiene durante tu periodo te ayudará a sentirte fresca y prevenir posibles irritaciones. ¡Es muy fácil!" },
      { type: 'list', items: [
          "🌸 **De Adelante hacia Atrás:** Cuando te limpies después de ir al baño (tanto pipí como popó), hazlo siempre desde la vulva (tu parte íntima de adelante) hacia la nalga (por donde haces popó). Esto ayuda a que las bacterias no viajen a donde no deben.",
          "🚿 **Limpieza Suave:** Lava tu zona genital externa (la vulva) una o dos veces al día con agua tibia. Puedes usar un jabón íntimo suave si quieres, pero solo por fuera, ¡nunca por dentro!",
          "👚 **Ropa Interior Transpirable:** Usa calzones de algodón. ¡Dejan respirar tu piel y son más cómodos!",
          "👜 **Kit de Emergencia:** Lleva siempre contigo un par de toallas de repuesto y quizás unos pañitos húmedos íntimos (sin alcohol ni perfume) en una bolsa discreta. ¡Te sentirás más segura!"
        ]
      },
    ],
  },
  {
    id: 'kit-periodo',
    navTitle: 'Mi Kit',
    title: '¿Qué Llevar en tu Kit de Periodo?',
    icon: '🎒',
    bgColor: 'bg-gradient-to-br from-pink-50 to-purple-100',
    textColor: 'text-purple-700',
    titleColor: 'text-pink-600',
    content: [
      { type: 'paragraph', text: "¡Tener un pequeño kit preparado te hará sentir como una superheroína lista para todo! Puedes guardarlo en tu mochila o en una cosmetiquera bonita." },
      { type: 'subheading', text: "Cosas geniales para tu kit:" },
      { type: 'list', items: [
          "✨ Un par de toallas (¡las que más te gusten!).",
          "✨ Un panti o calzón limpio de repuesto (por si hay alguna fuga inesperada, ¡a todas nos puede pasar!).",
          "✨ Una bolsa de plástico pequeña (opaca si prefieres) para guardar la toallita usada si no hay un bote de basura cerca.",
          "✨ Pañitos húmedos íntimos (opcional, pero vienen bien para refrescarte).",
          "✨ ¡Una chocolatina pequeña o tu snack favorito! A veces algo rico ayuda."
        ]
      },
      { type: 'image', imageUrl: '/kit.png', altText: 'Un kit de periodo con toallitas y otros elementos esenciales' },
    ],
  },
  {
    id: 'sentimientos-tranquilidad',
    navTitle: 'Ánimo',
    title: 'Sentimientos y Mucha Tranquilidad',
    icon: '😊',
    bgColor: 'bg-gradient-to-br from-violet-50 to-pink-100',
    textColor: 'text-violet-700',
    titleColor: 'text-violet-500',
    content: [
      { type: 'paragraph', text: "Es súper normal sentir un montón de cosas diferentes cuando te llega el periodo por primera vez, o incluso después. Puedes sentirte emocionada, un poco nerviosa, curiosa, ¡o hasta un poco avergonzada! Todas esas emociones son válidas." },
      { type: 'image', imageUrl: '/estados de animo.png', altText: 'Iconos de diferentes estados de ánimo' },
      { type: 'paragraph', text: "Recuerda que el periodo es una señal de que estás creciendo y tu cuerpo está haciendo cosas increíbles. ¡Es parte de ser tú!" },
      { type: 'paragraph', text: "Cada chica y cada cuerpo es diferente. Algunas amigas tendrán periodos más ligeros, otras más abundantes, a algunas les dolerá un poco el estómago y a otras no. ¡Y todo está bien!" },
      { type: 'paragraph', text: "Lo más importante es que sepas que **no estás sola**. Millones de chicas y mujeres en todo el mundo tienen el periodo cada mes. Habla con tu mamá, una hermana mayor, una tía, tu cuidadora o cualquier adulto de confianza. ¡Estamos aquí para ayudarte!" },
    ],
  },
  {
    id: 'preguntas-comunes',
    navTitle: 'Dudas',
    title: 'Preguntas Comunes (¡Resolvemos tus Dudas!)',
    icon: '❓',
    bgColor: 'bg-gradient-to-br from-rose-100 to-purple-50',
    textColor: 'text-rose-700',
    titleColor: 'text-rose-600',
    content: [
      { type: 'subheading', text: "¿Me va a doler?" },
      { type: 'paragraph', text: "Algunas chicas sienten unos pequeños calambres o dolores en el estómago, parecidos a un pellizquito. Se llaman cólicos. Si te molestan mucho, díselo a un adulto. A veces un poco de calor en el estómago o un analgésico suave (con permiso de tus padres o cuidador) ayuda." },
      { type: 'subheading', text: "¿Y si me mancho la ropa?" },
      { type: 'paragraph', text: "¡Tranquila, le puede pasar a cualquiera, sobre todo al principio mientras aprendes! Por eso es bueno llevar un calzón de repuesto en tu kit. Si te pasa por fuera de casa, puedes atarte una chaqueta a la cintura y pedir ayuda a tus padres, cuidador, amigas, o cualquier adulto que te este acompañando." },
      { type: 'subheading', text: "¿Qué hago si me llega el periodo fuera de casa?" },
      { type: 'paragraph', text: "¡No te preocupes! Si tienes tu kit, busca un baño y ponte una toalla. Si no lo tienes, puedes pedirle ayuda a tus padres, cuidador, amigas, o cualquier adulto que te este acompañando. ¡Seguro que te ayudan!" },
      { type: 'subheading', text: "¿Y si se me olvida la toalla?" },
      { type: 'paragraph', text: "¡Ups, despistes tenemos todas! Puedes hacer un 'apaño' temporal con varias capas de papel higiénico mientras consigues una toalla. Pide ayuda, ¡no te quedes con la preocupación!" },
    ],
  },
  {
    id: 'para-papas',
    navTitle: 'Papás',
    title: 'Para Mamás, Papás y Personas que Cuidan',
    icon: '👨‍👩‍👧‍👦',
    bgColor: 'bg-gradient-to-br from-fuchsia-100 to-pink-50',
    textColor: 'text-fuchsia-700',
    titleColor: 'text-fuchsia-600',
    content: [
      { type: 'paragraph', text: "Acompañar a las niñas en esta etapa es fundamental. Aquí algunos consejos:" },
      { type: 'list', items: [
          "💖 **Comunicación Abierta y Positiva:** Hablen sobre la menstruación con naturalidad, como una parte más del crecimiento. Eviten que sea un tema tabú o vergonzoso. Usen un lenguaje claro y adaptado a su edad.",
          "🛍️ **Preparación Conjunta:** Ayúdenla a preparar su primer 'kit de periodo'. Involucrarla en la elección de productos puede hacerla sentir más cómoda y en control.",
          "👂 **Escucha Activa:** Estén disponibles para responder sus preguntas sin juicios. Validen sus emociones, ya sean de curiosidad, nerviosismo o alegría.",
          "💪 **Empoderamiento:** Refuercen la idea de que la menstruación es un proceso natural y saludable, un signo de que su cuerpo funciona correctamente. ¡Es una etapa para celebrar, no para esconder!",
          "📚 **Infórmense Juntos:** Si hay dudas que no saben responder, busquen información fiable juntos. Esto también les enseña a buscar recursos y conocimiento."
        ]
      },
    ],
  },
  {
    id: 'juegos',
    navTitle: '¡A Jugar!',
    title: '¡A Jugar y Aprender!',
    icon: '🎮',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100',
    textColor: 'text-rose-700', 
    titleColor: 'text-pink-600', 
    content: [
      { type: 'paragraph', text: "¡Ahora vamos a divertirnos un poco y ver cuánto hemos aprendido! Elige un juego:" },
      { type: 'comprehensionQuiz', quizData: comprehensionQuizData },
      { type: 'padIdentificationGame', identificationGameData: padIdentificationGameData }
    ],
  },
];
