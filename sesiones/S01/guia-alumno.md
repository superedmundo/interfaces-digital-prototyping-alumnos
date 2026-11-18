# S01 — Alumno v0.2

 > **ESTADO EDITORIAL PAQ-B01 D-056:** S01 v0.2 (D-042) y S02 v0.2 (D-055) aceptadas documentalmente. Rúbricas D-049 recibidas como BORRADORES, sin autorización para calificar. Gate B histórico técnico D-044; Gate C y verificación de aula pendientes. Sin publicación, Pages, Classroom ni IA. El contenido original bajo esta cabecera conserva notas históricas.


INTERFACES DIGITAL FOR PROTOTYPING — DATI / CUAAD–UdeG

S01 · Fundamentos de UI/UX, convenciones y decisiones en Figma

GUÍA AUTÓNOMA DEL ALUMNO · v0.2 · 14 noviembre 2026

WO IDP-WO-20261112-004 · Chat 02 · Ajuste D-031

ESTADO: PROPUESTO — PENDIENTE DE DICTAMEN DOCUMENTAL DE DIRECCIÓN.

Documento de preparación para revisión, NO publicado en Classroom, NO validado para impartirse. El acceso colaborativo Figma sigue sin verificarse. Es una sesión conceptual individual, no una competencia por equipos.

### PREGUNTA CENTRAL

¿Puedes diseñar una pantalla que deje clara una tarea y luego mejorar otra explicando qué cambiaste, por qué lo hiciste y qué todavía no sabes?

## 1. LO QUE VAS A LOGRAR

S01-O1 [C1/C6]. Distinguir UI y UX en un ejemplo y explicar una consecuencia para quien usa la interfaz.

S01-O2 [C1]. Señalar tarea, usuario supuesto y una dificultad posible sin fingir evidencia de usuarios.

S01-O3 [C1/C3/C6]. Identificar y justificar al menos tres convenciones básicas que ayuden a realizar la tarea.

S01-O4 [C3]. Crear o modificar un Frame móvil en Figma con al menos cuatro capas nativas, nombradas y seleccionables.

S01-O5 [C1/C3/C6]. Diseñar una primera pantalla con información y acción principal inteligibles; defender al menos dos decisiones.

S01-O6 [C1/C6]. Reconocer una incertidumbre o límite que sería necesario comprobar después.

Aquí no hacen falta Auto Layout, componentes, variantes, navegación, interacciones funcionales, WCAG formal, entrevistas, React Native ni programación.

## 2. PREPARACIÓN PREVIA: NO REPITAS LO QUE YA HICISTE

Si completaste la guía de lectura, observación y microinvestigación de WO-002, ya tienes las bases. No hay nueva lectura ni cuestionario. Consulta la guía original cuando quieras recordar un concepto: [recurso Drive reservado; Classroom pendiente]

Cuestionario de preparación ya previsto por WO-002, sin claves: [recurso Drive reservado; Classroom pendiente]

Sabemos que tu grupo ya ha utilizado Figma. Por eso en la clase nos centraremos en elegir, justificar y mejorar decisiones, no en una capacitación extensa de botones y atajos. Si necesitas recordar herramientas, consulta la ruta de ayuda del apartado 10.

## 3. TRES IDEAS PARA TRABAJAR MEJOR

UI es la parte de una interfaz que puedes observar: títulos, textos, figuras, tarjetas, etiquetas, botones visuales y su organización. UX se refiere a la experiencia al intentar cumplir una tarea: comprender qué hacer, recibir información correcta y alcanzar un resultado. Ver un botón claro no demuestra que funcione ni que quienes lo usan completen su tarea. En S01 solo diseñaremos pantallas estáticas.

La Ley de Jakob propone considerar expectativas aprendidas en otras interfaces: quien ya conoce un patrón probablemente espera una función semejante. Esto orienta, pero no sustituye observaciones reales. Tres convenciones introductorias que puedes razonar son: llamar una acción por lo que hace («Leer sinopsis»), agrupar datos relacionados dentro de una tarjeta, y conservar el mismo significado de una etiqueta en toda la pantalla. No basta escribir «es convencional»: debes explicar cómo ayuda a la tarea.

Un diagnóstico responsable contiene tres capas de razonamiento: OBSERVO («el texto ‘Materiales’ aparece después de los pasos»); SUPONGO («quien comienza la tarea podría pasar por alto lo necesario»); COMPROBARÍA («preguntaría a una persona dónde buscaría los materiales antes de comenzar»). Lo tercero es pregunta futura, no prueba realizada.

## 4. MINI RECORDATORIO DE FIGMA (SOLO SI LO NECESITAS)

Frame: contenedor de una pantalla móvil. Layer/capa: objeto editable dentro de ese Frame. Un texto y un rectángulo son dos capas, aunque juntos parezcan un botón. Layers: panel que permite seleccionar, nombrar y ordenar esos objetos. Los rectángulos pueden tapar textos si quedan encima. Atajos habituales: F Frame, R Rectángulo, T Texto; la interfaz o el idioma puede cambiar. No necesitas usar atajos si conoces otra forma de crear los objetos. Un PNG sirve como referencia visual, pero no demuestra cuatro capas nativas.

Trabaja en TU archivo/espacio autorizado con permiso de edición, no en la demostración maestra. No compartas enlaces ni credenciales hasta que el profesor confirme el procedimiento seguro.

## 5. DEMOSTRACIÓN DEL PROFESOR: MIRAR EL CAMBIO Y SU RAZÓN

Caso ficticio «Técnicas de boceto»: una persona quiere comprender qué técnica está viendo antes de abrir su explicación.

ANTES que el profesor mostrará en un esquema: encabezado genérico «Métodos»; un texto «5 min» separado de la técnica; la tarjeta «Rayado cruzado» aparece lejos de ese tiempo; acción visual «Abrir ficha».

DESPUÉS propuesto: título «Técnicas de boceto»; tarjeta con «Rayado cruzado» y «Duración aproximada: 5 min» juntos; acción «Ver explicación» visible.

Observa dos decisiones: (1) aclarar qué contiene la pantalla sin inventar información; (2) poner el dato de duración junto a la técnica correspondiente. La etiqueta «Ver explicación» anticipa lo que se espera ver. No hemos probado que el cambio mejore la experiencia: eso todavía es una hipótesis. El docente explica; tú haces los dos retos de manera INDIVIDUAL.

## 6. RETO 1 — CREAR UNA PANTALLA PROPIA EN FIGMA (25 MIN, INDIVIDUAL)

Caso ficticio nuevo: «Estante de lectura». Una persona que dispone de unos minutos quiere decidir si consulta la reseña de un cuento corto.

DATOS DE TRABAJO (TODOS INVENTADOS): título del cuento «El jardín de papel»; categoría «Cuento breve»; tiempo estimado de lectura «8 min»; acción principal «Leer sinopsis». La pantalla NO muestra contenido real del cuento, no conecta a internet ni tiene una acción programada.

Tu tarea no es reproducir un ejemplo perfecto, sino decidir cómo hacer comprensible la ficha de ese cuento.

Pasos sugeridos:

A. En una línea, escribe: «La persona hipotética quiere ______». Añade qué dato considera útil para decidir.

B. En un archivo editable propio, crea un Frame de teléfono (el tamaño aproximado puede ser 390×844, no se exige medida exacta). Nómbralo «S01 / Estante de lectura».

C. Organiza título de pantalla, tarjeta del cuento, categoría, duración y un ÚNICO botón visual «Leer sinopsis». Usa texto y rectángulos; no necesitas fotografías ni iconos.

D. Abre Layers y confirma como mínimo cuatro capas nativas identificables, por ejemplo «Título», «Cuento / nombre», «Cuento / duración», «Acción / etiqueta». Nómbralas con sentido.

E. Identifica al menos tres convenciones observables y escribe por qué podrían ayudar: etiqueta de acción explícita, datos agrupados, coherencia entre el nombre y su función, u otras que puedas defender.

F. Redacta dos decisiones que tomaste («Coloqué ___ cerca de ___ porque quien quiere ___ podría ___»). Si terminas antes, revisa claridad en vez de agregar funciones avanzadas.

Producto del Reto 1: un Frame individual editable y una nota corta con tarea, tres convenciones y dos razones. El botón es VISUAL; no debe navegar.

## 7. RETO 2 — REPARAR OTRA PANTALLA, DISTINTA DEL RETO 1 (20 MIN, INDIVIDUAL)

Caso original e independiente: «Mini libreta — guía rápida». Una persona desea seguir tres instrucciones para fabricar una mini libreta sencilla. No se trata de talleres, horarios, sedes, eventos ni fichas de actividad.

DATOS CORRECTOS (NO LOS MODIFIQUES): materiales = 3 hojas de papel y 1 clip; paso 1 = «Reúne las tres hojas»; paso 2 = «Dóblalas por la mitad»; paso 3 = «Sujétalas con el clip». La única acción visual adicional es «Ver ejemplo», que NO necesita funcionar.

PANTALLA ANTES — ESQUEMA PARA RECREAR (CON ERRORES DE ORGANIZACIÓN)

Título: Mini libreta — guía rápida

[2] Dóblalas por la mitad

[3] Sujétalas con el clip

Botón visual: Ver ejemplo

[1] Reúne las tres hojas

Materiales: 3 hojas de papel y 1 clip

El contenido es correcto, pero el orden mostrado puede dificultar seguir las indicaciones y el lector encuentra los materiales demasiado tarde. La pantalla original existe aquí como ESQUEMA TEXTUAL creado para esta guía, no como archivo Figma previamente preparado ni como pantalla de otro juego.

Tu reparación:

## 1) Antes de tocar Figma, anota al menos dos observaciones sobre el esquema y su consecuencia HIPOTÉTICA para quien intenta preparar la mini libreta.

## 2) En TU propio archivo crea un nuevo Frame «S01 / Mini libreta — reparación». Reconstruye brevemente la disposición ANTES mediante cajas de texto y, si deseas, una forma para el botón. Puedes conservar la comparación mediante una captura simple sin datos personales y/o un segundo Frame duplicado propio; no se exige técnica avanzada de duplicación.

## 3) Organiza un DESPUÉS que sitúe los materiales donde realmente ayuden antes de comenzar y presente los pasos en una secuencia legible 1 → 2 → 3. Puedes ubicar «Ver ejemplo» al final, como acción complementaria, sin inventar su funcionamiento.

## 4) Comprueba que el Frame final tiene por lo menos cuatro capas nativas nombradas y editables. Mantén los datos correctos, sin añadir registro, pago, mapas o funciones nuevas.

## 5) Señala DOS cambios propios: cada uno con «ANTES observé ___; DESPUÉS cambié ___; supongo que esto ayuda a ___ porque ___». Escribe una incertidumbre: «No sé si ___; lo comprobaría más adelante mediante ___».

## 6) Guarda la comparación ANTES/DESPUÉS. Como fuente del antes puedes mostrar esta guía y tu anotación/captura; como después, el Frame propio editable.

No hay equipos, roles, rondas, sorpresas, sellos ni puntos en este ejercicio. Nadie tiene que evaluar el diseño de un compañero.

## 8. JUSTIFICAR DECISIONES Y RECONOCER LÍMITES (10 MIN)

Entrega para revisión docente una nota individual con esta estructura:

- UI frente a UX: «En mi pantalla puedo VER ___ (UI), y supongo que al intentar ___ podría ocurrir ___ (UX posible)».

- Mi tarea y usuario supuesto: «Una persona que quiere ___ necesitaría ___».

- Tres convenciones justificadas: «Convención A/B/C, qué señal observable la muestra y por qué ayuda al objetivo».

- Reto 1: dos decisiones de diseño que puedas señalar en tu Frame.

- Reto 2: dos modificaciones concretas del antes al después, con razón ligada a la secuencia o agrupación.

- Incertidumbre: una sola duda real y cómo la comprobarías más adelante.

No digas «probé con usuarios» si solo observaste tu boceto. No se valorará que hayas agregado más pantallas o colores.

## 9. QUÉ EVIDENCIAS CONSERVAR

E1: tu explicación breve UI/UX, tarea, usuario supuesto, tres convenciones e incertidumbre (S01-O1/O2/O3/O6).

E2: Reto 1 «Estante de lectura» en tu Figma propio, Frame + al menos cuatro capas nativas editables y nombradas, acción clara y dos razones (S01-O4/O5).

E3: Reto 2 «Mini libreta» con esquema/foto del antes, Frame editable del después y dos modificaciones justificadas; se enlaza a O2/O3/O4/O5/O6.

Una captura del canvas sirve para recordar la apariencia, pero NO prueba por sí sola que haya capas editables; para eso el docente deberá poder inspeccionar Layers en el archivo autorizado. No hay actividad Classroom real, calificación, rúbrica ni enlace obligatorio de envío en este documento.

## 10. PISTAS Y NIVELACIÓN SIN FRENAR A QUIEN YA SABE

Pista inicial: pregúntate «¿qué quiere resolver la persona en esta pantalla?» antes de dibujar.

Pista de organización: lee los textos en el orden visual en que aparecen. ¿Ese orden coincide con la secuencia de acciones que describen?

Pista de selección: si la pantalla parece una sola imagen, crea capas de texto nativo; el resultado no depende de plugins ni imágenes externas.

Pista de apilamiento: si un botón tapa su etiqueta, mueve la etiqueta encima del rectángulo en Layers.

Pista de hipótesis: cambia «mejoré la UX» por «es posible que esta organización facilite ___; todavía no se ha comprobado».

Si ya manejas Figma, pasa directo a diseñar y argumentar; si necesitas apoyo, usa los atajos F/R/T o el panel de herramientas, mira la mini guía de WO-003 [recurso Drive reservado; Classroom pendiente] y pide nivelación individual. No se exige usar funciones de sesiones posteriores.

## 11. AUTOEVALUACIÓN SIN CALIFICACIÓN FORMAL

- Expliqué UI y UX sin confundir apariencia con experiencia demostrada.

- Distinguí lo visible, lo hipotético y lo que tendría que comprobar.

- Di tres convenciones razonadas, no solo nombradas.

- Construí una pantalla de lectura con objetivo y acción principal claros.

- Puedo abrir el Frame y mostrar cuatro capas nativas seleccionables.

- Reparé la guía de mini libreta sin cambiar los hechos ni inventar funcionalidades.

- Presenté antes/después y dos modificaciones con sus motivos.

- Identifiqué una limitación honesta de mi diseño.

- Trabajé por mi cuenta, sin revisión de otros equipos ni votos.

## 12. INCLUSIÓN, ACCESO Y CONTINGENCIA

Puedes usar el idioma de Figma que tengas, escalas de pantalla o zoom y entrada por ratón, touchpad o teclado; los nombres de controles pueden variar. Las instrucciones están en texto para no depender exclusivamente de color, capturas o video. Las etiquetas deben ser legibles y distinguibles sin apoyarte solo en cambios cromáticos; esto es una buena práctica básica, NO evaluación WCAG ni C5 formal.

Si Figma no abre o no tienes Can edit, no uses credenciales de otra persona ni modifiques el maestro. Haz ambos ejercicios con un esquema de papel o documento de texto, marca qué serían tus capas y conserva las razones y el antes/después. Esto es RESPALDO PROVISIONAL: no acredita cuatro capas Figma y tendrás que completar la evidencia digital cuando el docente resuelva el acceso autorizado. Si necesitas apoyo por una barrera de acceso, solicita una alternativa de representación equivalente para el razonamiento y acuerda cómo demostrar después la editabilidad.

Si faltaste: trabaja autónomamente los apartados 3–9 con una distribución orientativa de hasta 90 minutos para RECUPERAR la sesión presencial; ese tiempo de reposición no se suma como deber regular de quienes sí asistieron. Conserva la práctica y pide al docente revisión diferida. No repitas actividades de WO-002 que ya resolviste.

## 13. DISTRIBUCIÓN AUTÓNOMA NOMINAL SEMANAL

Lo ya planificado por WO-002 es: lectura/reflexión 25 min + observación 20 + microinvestigación 15 + cuestionario 15 = 75 min. Ya existen. Quedan reservados 25 min de exploración/reacondicionamiento Figma (si ya sabes usar la herramienta, empléalos en revisar tus capas y preparar acceso, NO en volver a realizar los retos completos); además 20 min de margen técnico/entrega. Total semanal NOMINAL = 75 + 25 + 20 = 120 min. Los dos retos completos ocurren DENTRO de los 90 minutos efectivos de S01, no como tarea extra. Estos tiempos son una previsión, NO mediciones de estudiantes.

## 14. REFERENCIAS

Contrato académico S01-O1..O6: [recurso Drive reservado; Classroom pendiente]

Preparación WO-002: [recurso Drive reservado; Classroom pendiente]

Figma Help, Frames: https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma-Design

Figma Help, Layers: https://help.figma.com/hc/en-us/articles/360040449873-Select-layers-and-objects

Nielsen Norman Group, Jakob’s Law: https://www.nngroup.com/videos/jakobs-law-internet-ux/

Laws of UX, Jakob’s Law: https://lawsofux.com/jakobs-law/

No necesitas comprar Leyes de la UX ni acceder a cursos comerciales; aquí se ofrecen explicaciones originales. No edites referencias Figma del proyecto ni abras archivos de S02 para resolver estos retos.

### CIERRE DE ESTADO

Esta versión v0.2 es una propuesta documental sujeta al dictamen del Director 00, pruebas técnicas y QA independiente posterior. No declara S01 lista para aula ni acredita el funcionamiento de permisos o colaboración multiusuario.

