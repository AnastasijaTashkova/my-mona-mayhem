<!-- l10n-sync: source-file="workshop/06-bonus.md" -->
# 🎉 Bonus y ampliaciones

---

¡Has creado una aplicación de GitHub Battle totalmente funcional! Ahora puedes ir más allá con estos **retos abiertos**.

<!-- track:vscode:start -->
Usa **Agent Mode** para todos los retos: describe lo que quieres y deja que Copilot te ayude a crearlo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa Copilot CLI para todos los retos: combina el contexto `@file`, `/plan`, el modo normal y `/review` según sea necesario.
<!-- track:cli:end -->

---

## 🏆 Reto 1: Pancarta del ganador

Cuando se hayan cargado ambos gráficos de contribuciones, compara los totales y muestra un anuncio dinámico del ganador.

**Qué crear:**
- Compara las contribuciones totales de ambos usuarios.
- Si hay un ganador claro, muestra **"🏆 {username} WINS! 🏆"** con un estilo festivo.
- Si el total de contribuciones es igual, muestra **"🤝 IT'S A TIE! 🤝"**.
- Añade una animación o confeti para darle más efecto.

**Prompt sugerido:**
> Cuando se carguen los datos de contribuciones de ambos usuarios, compara los totales y muestra una pancarta con el ganador. Muestra "🏆 {username} WINS! 🏆" si uno tiene más contribuciones o "🤝 IT'S A TIE! 🤝" si están empatados. Dale un aspecto llamativo con animaciones CSS.

---

## 🏆 Reto 2: Contador de rachas

Calcula y muestra la racha de contribuciones consecutivas más larga de cada usuario.

**Qué crear:**
- Analiza los datos de contribuciones día a día.
- Encuentra la secuencia más larga de días consecutivos con al menos una contribución.
- Muestra de forma destacada la duración de la racha de cada usuario.
- Resalta quién tiene la racha más larga.

**Prompt sugerido:**
> Añade un contador de rachas que analice los datos de contribuciones de cada usuario para encontrar su racha consecutiva más larga. Muestra "🔥 Longest Streak: X days" debajo del gráfico de contribuciones de cada usuario.

---

## 🏆 Reto 3: Historial de batallas

Guarda los resultados de las batallas para que los usuarios puedan ver sus enfrentamientos anteriores.

**Qué crear:**
- Guarda cada resultado de batalla en `localStorage` (nombres de usuario, totales, ganador y marca de tiempo).
- Añade una sección **"Recent Battles"** debajo del área de batalla principal.
- Muestra los últimos 5–10 enfrentamientos con sus resultados.
- Añade un botón «Clear History».

**Prompt sugerido:**
> Guarda los resultados de cada comparación en localStorage. Añade una sección "Recent Battles" que muestre las últimas 10 batallas, los nombres de usuario, los totales de contribuciones, el ganador y la fecha. Incluye un botón "Clear History".

---

## 🏆 Reto 4: Efectos de sonido

Añade efectos de sonido retro de arcade con la Web Audio API, sin archivos externos.

**Qué crear:**
- Un sonido de **moneda insertada** al hacer clic en el botón «Battle!».
- Un sonido de **potenciación** cuando los resultados se carguen correctamente.
- Un sonido de **explosión** cuando haya un error (usuario no encontrado o fallo de la API).
- Un botón para silenciar y activar el sonido.

**Prompt sugerido:**
> Añade efectos de sonido retro de arcade con la Web Audio API (sin archivos de audio). Reproduce el sonido de una moneda al iniciar una batalla, un sonido de potenciación cuando se carguen los resultados y una explosión si se produce un error. Genera los sonidos mediante osciladores y nodos de ganancia. Incluye un control para silenciar.

---

## 🏆 Reto 5: Secuencia de batalla animada

Crea expectación con una cuenta atrás dramática antes de revelar los resultados.

**Qué crear:**
- Al hacer clic en «Battle!», muestra una superposición a pantalla completa.
- Anima: **"3..."** → **"2..."** → **"1..."** → **"⚡ FIGHT! ⚡"**.
- Después, muestra los gráficos de contribuciones con una entrada dramática.
- Usa animaciones CSS o temporizadores de JavaScript.

**Prompt sugerido:**
> Añade una secuencia de batalla animada al hacer clic en "Battle!". Muestra una cuenta atrás superpuesta: "3...", después "2...", luego "1..." y, por último, "⚡ FIGHT! ⚡"; cada paso debe durar aproximadamente 1 segundo. Después de la cuenta atrás, revela los resultados con una animación deslizante.

---

## 🏆 Reto 6: Leyenda de contribuciones

Añade una leyenda de escala de color que coincida con la paleta del gráfico de contribuciones.

**Qué crear:**
- Una leyenda horizontal que muestre los niveles de intensidad de las contribuciones.
- Etiquetas desde **"Less"** hasta **"More"**.
- Usa la paleta de colores real de la respuesta de la API de contribuciones de GitHub.
- Colócala cerca de los gráficos de contribuciones.

**Prompt sugerido:**
> Añade debajo de los gráficos una leyenda de contribuciones que muestre la escala de colores de la paleta de la API. Muestra una fila de cuadrados que vaya de "Less" (el más claro) a "More" (el más oscuro) y coincida con los colores de nivel de contribución que devuelve la API.

---

## 🏆 Reto 7: Comparte los resultados

Permite que los usuarios compartan los resultados de la batalla con un solo clic.

**Qué crear:**
- Un botón **"📋 Share Results"** que aparezca después de una batalla.
- Copia al portapapeles un resumen de texto con formato.
- Incluye los nombres de usuario, los totales de contribuciones y el ganador.
- Muestra brevemente una confirmación «Copied!».

**Prompt sugerido:**
> Añade un botón "📋 Share Results" que copie al portapapeles un resumen formateado de la batalla. El resumen debe incluir ambos nombres de usuario, sus totales de contribuciones y quién ganó. Usa la Clipboard API y muestra brevemente la confirmación "Copied to clipboard!".

---

<!-- track:cli:start -->
## 💻 Extras del CLI

Si quieres explorar más funciones de Copilot CLI después del taller principal:

- Usa `copilot -p "Write a conventional commit message for the current git diff"` para generar una respuesta rápida que puedas pegar en Git.
- Ejecuta `/share file` para guardar tu sesión como Markdown y consultarla más adelante.
- Usa `/session` y `/session plan` para inspeccionar cómo el CLI sigue tu trabajo actual.
<!-- track:cli:end -->

## 🎊 ¡Enhorabuena!

¡Has completado el taller **Mona Mayhem: GitHub Battle**! Esto es lo que has conseguido:

### Lo que has creado

- ✅ Una **aplicación web completa con varias páginas** a partir de una especificación de diseño
- ✅ Una **página de inicio** con tema retro de arcade y diseño adaptable
- ✅ Una **arena de batalla** que obtiene y compara datos reales de contribuciones de GitHub
- ✅ **Gráficos de contribuciones interactivos** con niveles de actividad diferenciados por color
- ✅ **Manejo de errores, estados de carga y mejoras de accesibilidad**
- ✅ **Diseño adaptable** para distintos dispositivos

### Lo que has practicado

| Habilidad | Qué has practicado |
|---|---|
| **Ingeniería de contexto** | Proporcionar a Copilot los archivos, las instrucciones y las restricciones adecuadas |
| **Planificación** | Generar e iterar en planes de implementación antes de programar |
| **Programación agéntica** | Delegar a Copilot tareas con varios pasos y archivos |
| **Iteración de diseño** | Partir de una dirección visual y perfeccionar el resultado |
| **Disciplina de revisión** | Inspeccionar los cambios generados por IA antes de hacer commit |

### 🚀 Sigue aprendiendo

- 📺 [Canal de YouTube de VS Code](https://www.youtube.com/@code) — Consejos, tutoriales y novedades
- 📖 [Documentación de GitHub Copilot](https://docs.github.com/en/copilot) — Documentación y guías oficiales
- 💻 [Documentación de GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — Instalación, comandos slash y prácticas recomendadas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — Recursos y ejemplos de la comunidad
- 🛠️ [Talleres de Copilot Dev Days](https://github.com/github/copilot-dev-days) — Más talleres prácticos

---

## 🙏 ¡Gracias!

¡Gracias por participar en este taller! Has comprobado cómo GitHub Copilot puede acelerar todas las fases del desarrollo, desde la planificación y el diseño hasta la implementación y el pulido. Las técnicas que has practicado sirven para cualquier proyecto, framework y escala. ¡Ahora crea algo increíble! 🚀
