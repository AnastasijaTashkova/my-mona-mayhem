<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematización desde el diseño

---

En esta parte, usarás los ciclos de planificación e implementación de Copilot para diseñar una transformación completa del tema. Este es un enfoque de desarrollo desde el diseño: empieza con una visión, itera en los elementos visuales y deja que Copilot se encargue del trabajo pesado de CSS.

## Tarea 1: Planifica el tema retro

<!-- track:vscode:start -->
Cambia al modo **Plan** en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI o pulsa **Shift+Tab** hasta activar el modo plan.
<!-- track:cli:end -->

Escribe este prompt:

> Quiero transformar esta página en una experiencia completa de arcade retro. Planifica una renovación visual que incluya: efectos de líneas de barrido CRT en el fondo, un brillo de neón en el título que pulse como un letrero, una insignia VS animada con cambios de color en el degradado, una capa de brillo sobre las tarjetas de resultados de usuario, animaciones de entrada flotante para los campos, texto de carga que cambie entre verde y morado, y efectos de brillo al pasar el cursor sobre los cuadrados de contribuciones. Mantén el fondo oscuro (`#0a0a1a`) con acentos verdes (`#5fed83`) y morados (`#8a2be2`). Usa un tema oscuro con la fuente de videojuegos retro Press Start 2P de Google Fonts.

Copilot generará un plan detallado de implementación que abarcará todos los efectos visuales. **No lo aceptes de inmediato**: revisa el plan e itera:

- Sugiere ajustes al ritmo de las animaciones (por ejemplo, *"Haz que el pulso de neón sea más lento, de unos 3 segundos"*).
- Pregunta por efectos concretos (por ejemplo, *"¿Cómo funcionará la capa de brillo de las tarjetas?"*).
- Pide cambios en el enfoque si algo no te convence.

<!-- track:vscode:start -->
Cuando te convenza el plan, pide a Copilot que lo implemente.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Cuando te convenza el plan, pide a Copilot CLI que lo implemente.
<!-- track:cli:end -->

## Tarea 2: Implementa el tema

<!-- track:vscode:start -->
Pide a Copilot que implemente el plan que acabáis de diseñar:
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pide a Copilot CLI que implemente el plan que acabáis de diseñar:
<!-- track:cli:end -->

> Implementa el plan del tema retro de arcade que acabamos de diseñar.

Copilot añadirá varias animaciones CSS, pseudoelementos y transiciones en la hoja de estilos. Entre otras cosas, podría añadir:

- `@keyframes` para scanlines, pulso de neón, shimmer y efectos de aparición flotante
- Pseudoelementos (`::before`, `::after`) para efectos superpuestos
- CSS custom properties para los colores del tema
- Transiciones y estados hover para elementos interactivos

<!-- track:cli:start -->
Una vez aplicados los cambios, usa `/diff` para revisar los estilos antes de aprobarlos.
<!-- track:cli:end -->

## Tarea 3: Ajusta el estilo

> **⚠️ ¿No ves los cambios?** Si el nuevo tema o las animaciones no aparecen, detén el servidor de desarrollo (`Ctrl+C`), reinícialo con `npm run dev` y recarga el navegador a la fuerza (`Ctrl+Shift+R`).

Mantén abierta la vista previa del navegador e itera en el diseño. Prueba prompts como:

> El efecto de líneas de barrido es demasiado intenso; reduce la opacidad a 0.03.

> Añade un parpadeo eléctrico sutil al título.

> La insignia VS debería pulsar con más intensidad.

Este es un enfoque de **desarrollo desde el diseño**: iteras en tiempo real sobre el resultado visual. Cada prompt refina la experiencia hasta que te convenza. No te conformes con algo «suficientemente bueno»: lleva el estilo al máximo para que la página parezca de una máquina recreativa.

## Tarea 4: Actualiza las instrucciones

Tus instrucciones deben reflejar las decisiones de diseño importantes para que los prompts posteriores mantengan la coherencia.

<!-- track:vscode:start -->
Pide a Copilot Chat:
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pide a Copilot CLI:
<!-- track:cli:end -->

> Añade una sección de guía de diseño a copilot-instructions.md que describa el tema retro de arcade: colores, fuentes y estilo de animación.

Haz commit de las instrucciones y los cambios de diseño cuando la página te convenza.

## ✅ Parte 4 completada

**Lo que has aprendido:**

- Usar flujos de planificación para esbozar un **sistema de diseño antes de implementarlo**
- **Iterar en el resultado visual** con prompts de seguimiento
- **Actualizar las instrucciones tras tomar decisiones importantes** para mantener una identidad visual coherente
