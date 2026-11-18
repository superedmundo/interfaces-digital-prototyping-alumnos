# Preparación WO-002

 > **ESTADO EDITORIAL PAQ-B01 D-056:** S01 v0.2 (D-042) y S02 v0.2 (D-055) aceptadas documentalmente. Rúbricas D-049 recibidas como BORRADORES, sin autorización para calificar. Gate B histórico técnico D-044; Gate C y verificación de aula pendientes. Sin publicación, Pages, Classroom ni IA. El contenido original bajo esta cabecera conserva notas históricas.


IDP | Interfaces Digital for Prototyping — DATI / CUAAD–UdeG

S01 — GUÍA DEL ALUMNO: LECTURA E INVESTIGACIÓN INDIVIDUAL

Versión 0.1 · 12 noviembre 2026 · Responsable: Chat 04 · WO IDP-WO-20261112-002

Estado: BORRADOR PARA REVISIÓN. NO PUBLICADO EN CLASSROOM. Material original de acceso libre; no contiene claves.

PROPÓSITO Y RESULTADOS

Antes de la sesión conceptual S01, entenderás qué distingue la interfaz de usuario (UI) de la experiencia de usuario (UX), reconocerás convenciones móviles y explicarás por qué un patrón familiar puede facilitar una tarea. No necesitas haber usado Figma, comprar libros ni conocer desarrollo móvil.

Al completar esta preparación podrás: explicar UI/UX con un ejemplo [S01-O1: C1/C6]; identificar tarea, usuario supuesto y dificultad hipotética [O2: C1]; reconocer y justificar tres convenciones [O3: C1/C3/C6]; formular una limitación verificable [O6: C1/C6]. La construcción del frame y las capas [O4/O5] se trabaja con los recursos técnicos del Chat 05 y en S01, NO en esta lectura.

LECTURA ORIGINAL — PARTE 1: INTERFAZ NO ES TODA LA EXPERIENCIA

Imagina una app ficticia llamada «Cartelera CUAAD». En su pantalla principal aparece el título «Actividades», una lupa junto a «Buscar», tarjetas con nombres de eventos y un botón «Ver detalles». Los textos, íconos, controles y su organización forman parte de la interfaz de usuario o UI: son el punto visible con el que una persona interpreta y controla el producto.

UX es más amplia. Considera si la persona logra averiguar cuándo comienza un evento, si la información es confiable, si el proceso tiene obstáculos y qué sucede después de tocar «Ver detalles». Una interfaz puede verse atractiva pero producir una mala experiencia si muestra horarios equivocados o si la información necesaria no existe. La UX también puede involucrar momentos fuera de la pantalla, como recibir una confirmación o encontrar ayuda.

Por eso no evaluamos una pantalla solo porque «se ve bonita». Preguntamos: ¿qué tarea quiere completar alguien?, ¿qué información necesita?, ¿qué decisión facilita o dificulta el diseño? En esta etapa todavía hablamos de posibilidades: una dificultad que imaginas al mirar una pantalla es una HIPÓTESIS, no un problema demostrado con usuarios.

LECTURA ORIGINAL — PARTE 2: LA LEY DE JAKOB SIN MEMORIZAR UN ESLOGAN

Cuando una persona abre una nueva app, ya trae experiencias acumuladas de otras apps. Si ve una lupa, puede esperar una búsqueda; si lee «Guardar», espera conservar algo. La Ley de Jakob nos invita a respetar esos aprendizajes previos: la familiaridad suele reducir el trabajo de descifrar cómo funciona una pantalla.

Ejemplo ficticio: en «Cartelera CUAAD» se sustituye el botón «Buscar» por un símbolo inventado y la etiqueta «Explorar ecosistemas». Quizá el equipo diseñador lo juzga creativo; pero para quien solo quiere encontrar un concierto puede ser menos transparente. Mantener una etiqueta clara y un control reconocible es una DECISIÓN JUSTIFICABLE, aunque se deberá comprobar con personas reales más adelante.

La ley no dice que todas las apps deban verse idénticas, ni que las convenciones sean eternas o universales. Las expectativas cambian según contexto, cultura, plataforma y tipo de usuario. Romper un patrón puede tener sentido cuando resuelve una necesidad evidente, siempre que se explique el cambio de forma comprensible. La ley es una orientación de diseño, no una prueba empírica de que tu interfaz funcionará.

LECTURA ORIGINAL — PARTE 3: TRES LENTES PARA EXAMINAR UNA PANTALLA

## 1. Etiquetas comprensibles. Un control llamado «Ver detalles» informa más sobre lo que ocurrirá que «Hacer magia». La formulación debe describir una acción en el lenguaje del usuario, no en jerga del equipo creador.

## 2. Coherencia interna. Si «Guardar evento» conserva un evento en una pantalla, usar la misma acción en otra pantalla con igual significado evita obligar a reinterpretar el producto. La misma palabra NO debe cambiar de función sin explicación.

## 3. Familiaridad externa. Un patrón ampliamente reconocido —como una lupa asociada a búsqueda— puede facilitar la primera visita. Pero el contexto importa: si un ícono solo no comunica, una etiqueta textual puede despejar la duda.

Estas lentes sirven para justificar, no para repetir gustos personales. Evita «así se ve profesional»; prefiere «si alguien busca horarios, una etiqueta directa podría reducir su incertidumbre». No necesitas teoría formal de Gestalt, WCAG, componentes ni pruebas de usabilidad para este análisis introductorio.

LECTURA ORIGINAL — PARTE 4: UN MISMO DISEÑO, DOS ARGUMENTOS DISTINTOS

Caso A, pantalla ficticia «Mi Taller». Tiene un encabezado «Tareas de hoy», una tarjeta «Modelo 3D — Entregar el viernes» y un botón «Marcar como terminado». Argumento UI: el verbo del botón comunica una acción específica y aparece cerca de la tarea a la que corresponde. Argumento UX: si el estado realmente se actualiza y permanece guardado, la persona quizá sienta mayor control sobre su trabajo; sin probarlo, esto continúa siendo una hipótesis.

Caso B, pantalla ficticia «Museo de Bolsillo». Muestra dos botones «Entrar» y «Comenzar» sin explicar sus diferencias. No podemos afirmar que todos se confundirán. Sí podemos plantear que una persona que quiere empezar un recorrido podría dudar y proponer una aclaración de etiquetas. Una observación razonada distingue: lo que se ve, lo que inferimos y lo que falta comprobar.

ACTIVIDAD 1 — OBSERVACIÓN PERSONAL DE DOS INTERFACES (20 MIN)

Elige dos apps que puedas consultar sin compartir datos personales; pueden ser de transporte, agenda, música o eventos. No hagas capturas con nombres, chats, correos, ubicación ni perfiles reales. Si no puedes abrir dos apps, usa ejemplos públicos sin registro o los casos ficticios de «Mi Taller» y «Museo de Bolsillo» de esta guía y aclara la sustitución.

Completa para cada interfaz: A) nombre genérico o «Caso ficticio»; B) tarea principal que intentarías realizar; C) usuario SUPUESTO; D) dos controles/etiquetas visibles y qué prometen; E) una convención reconocible; F) una dificultad POSIBLE y por qué la crees posible. Finaliza con una comparación: una convención que ambas respetan o resuelven de forma distinta, sin calificar ninguna como «comprobada mejor».

Plantilla breve: «Observo ___; supongo que la persona quiere ___; el control ___ podría ayudar/dificultar porque ___; para saberlo tendría que comprobar ___».

Destina aproximadamente 8 minutos por interfaz y 4 a la comparación. No se piden pruebas con usuarios.

ACTIVIDAD 2 — MICROINVESTIGACIÓN GUIADA (15 MIN)

Consulta el recurso libre «Jakob’s Law» de Laws of UX (enlace abajo) o la explicación pública de Nielsen Norman Group. Responde con tus palabras en 4–6 renglones:

a) ¿Qué experiencia previa aprovecha una convención de diseño?

b) ¿Qué diferencia encuentras entre una convención externa (otras apps) y la coherencia interna (la misma app)?

c) Da un ejemplo distinto de los inventados en esta lectura.

d) Menciona una situación en la que una convención podría no ser la mejor solución e indica por qué no puedes afirmarlo sin verificar.

Registra nombre y URL de la fuente que usaste. No copies definiciones ni pasajes. Invierte unos 5 min en consulta y 10 min en síntesis. Si una página no abre, la lectura original anterior basta para responder; anota «fuente web no disponible» y usa este documento.

ACTIVIDAD 3 — CUESTIONARIO DE PREPARACIÓN (15 MIN)

Responde el cuestionario ALUMNO S01 v0.1 (documento independiente, sin claves): 8 reactivos cerrados y 2 abiertos, sobre el contenido de esta lectura. La modalidad y el envío serán definidos por el docente; no hay un enlace de Classroom creado. No consultes ni difundas un banco de claves. Puedes revisar este texto durante la preparación, salvo que el profesor indique una condición distinta al implementarlo.

ENTREGA PREVISTA Y AUTONOMÍA

Guarda una hoja breve (texto seleccionable en Google Docs o PDF) que reúna tu observación de dos interfaces, la comparación y la microinvestigación con fuente. El cuestionario se conserva como documento separado hasta que el profesor decida cómo recogerlo. Si optas por ejemplos ficticios, dilo. No adjuntes datos reales de terceras personas. No se te pide diseñar un sistema completo, comprar materiales ni realizar pruebas de usuarios.

Presupuesto de esta especialidad: lectura 25 min + observación 20 + investigación 15 + cuestionario 15 = 75 min. Se reservan 25 min para Figma (Chat 05) y 20 min como margen de recuperación/entrega: TOTAL SEMANAL nominal 120 min, NO 120 min adicionales por tarea. Esta distribución es PRELIMINAR, deberá reconciliarse con la práctica real de Figma y el guion S01; si aumentan las tareas, sustituyen minutos, no se suman.

FUENTES ABIERTAS Y DERECHOS

[S1] Nielsen, J., Jakob's Law of Internet User Experience (video público, 2 min): https://www.nngroup.com/videos/jakobs-law-internet-ux/

[S2] Yablonski, J., Jakob’s Law, sitio Laws of UX: https://lawsofux.com/jakobs-law/ (también permite cambiar a español desde su menú).

[S3] Nielsen, J., 10 Usability Heuristics, sección 4 Consistency and Standards: https://www.nngroup.com/articles/ten-usability-heuristics/

[S4] Nielsen Norman Group, The Definition of User Experience (UX): https://www.nngroup.com/articles/definition-user-experience/

[F1] Figma, Frames in Figma Design (consulta opcional, práctica a cargo de Chat 05): https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma-Design

Referencia comercial OPCIONAL: Jon Yablonski, Leyes de la UX, 2.ª edición, cap. 1. No se requiere acceso ni adquisición: el texto anterior es una explicación ORIGINAL y autosuficiente, NO una reproducción del libro, de Udemy ni de interfaces de terceros.

Fuente curricular interna (no lectura exigida al alumno): contrato S01–S02 v0.1 aceptado por Dirección y matriz oficial. Última consulta de fuentes públicas: 12 noviembre 2026. Acceso en el aula pendiente de QA independiente.

