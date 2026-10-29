<p align="right">🌐 English | <a href="README.es.md">Español</a> | <a href="README.pt_BR.md">Português (Brasil)</a> | <a href="README.ko.md">한국어</a></p>

<div align="center">

# 🎮 Mona Mayhem

### Convierte los gráficos de contribuciones de GitHub en un duelo de arcade.

Construye paso a paso, con GitHub Copilot, una arena de estilo retro que compara a dos usuarios de GitHub. Elige cómo trabajar: usa VS Code o acepta el reto desde la terminal con Copilot CLI.

<p>
   <a href="workshop/es/00-overview.md"><strong>Empieza el taller →</strong></a>
   &nbsp;·&nbsp;
   <a href="https://copilot-dev-days.github.io/mona-mayhem/">Abre el sitio del taller</a>
</p>

**~60 minutos** &nbsp;·&nbsp; **7 partes** &nbsp;·&nbsp; **Dos formas de construir**

</div>

<p align="center">
   <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Arena de batalla retro arcade para comparar contribuciones de GitHub" width="900" />
</p>

<p align="center"><em>La arena de batalla de contribuciones que construirás durante el taller.</em></p>

## Elige tu jugador

Ambos itinerarios siguen el mismo proyecto y las mismas partes del taller. Elige el entorno en el que quieras trabajar:

| VS Code | Copilot CLI |
|---------|-------------|
| Explora con Chat, planifica con Plan Mode, construye con Agent Mode y pule el resultado con agentes en segundo plano y revisiones integradas en el editor. | Trabaja desde la terminal con `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` y `/review`. |

## Tu recorrido de construcción

Empieza con un plan y convierte después el proyecto inicial en una arena de batalla de gráficos de contribuciones. Practicarás cómo proporcionar contexto útil del proyecto a Copilot, definir una implementación antes de programar, iterar en el diseño y revisar el resultado.

| Parte | Misión | En qué trabajarás |
|------|--------|------------------|
| [00 · Visión general](workshop/es/00-overview.md) | Elige tu itinerario | Objetivos de aprendizaje y preparación del taller |
| [01 · Configuración](workshop/es/01-setup.md) | Define el contexto | Instrucciones, permisos y entorno |
| [02 · Planificación y estructura](workshop/es/02-plan-and-scaffold.md) | Diseña la construcción | Arquitectura de la API y de la página |
| [03 · Construye el juego](workshop/es/03-agent-mode.md) | Hazlo jugable | Implementación con agentes e iteración |
| [04 · Tematización desde el diseño](workshop/es/04-design-vibes.md) | Encuentra el estilo arcade | Planificación e implementación visual |
| [05 · Pulido](workshop/es/05-polish.md) | Refina la experiencia | Trabajo paralelo, revisiones y controles de calidad |
| [06 · Bonus](workshop/es/06-bonus.md) | Ve más allá del encargo | Funciones adicionales y experimentos con Copilot |

## Empieza

1. Crea tu propio repositorio con **Use this template** o haz un fork de este.
2. Clona el repositorio y ábrelo en VS Code, o trabaja desde la terminal con Copilot CLI.
3. Sigue la [visión general del taller](workshop/es/00-overview.md) y elige tu itinerario.

### Qué necesitas

- GitHub Copilot (Pro, Business o Enterprise), Git y Node.js
- **Itinerario de VS Code:** VS Code 1.107 o posterior y la extensión de GitHub Copilot con la sesión iniciada
- **Itinerario del CLI:** GitHub Copilot CLI (`copilot`); Node.js 22 o posterior si lo instalas con npm, o Homebrew / WinGet

## Cómo está construido

- [Astro](https://astro.build/) 6 con el [adaptador de Node](https://docs.astro.build/en/guides/integrations-guide/node/)
- Datos del gráfico de contribuciones de GitHub
- Press Start 2P, para darle un aire arcade

## Nota sobre el despliegue

El flujo de trabajo actual de GitHub Pages publica el taller estático y la documentación de `docs/` y `workshop/`. **No** compila ni despliega la aplicación Astro de `src/`.

Para desplegar la aplicación Astro en GitHub Pages, cambia Astro a salida estática, elimina el adaptador de Node y actualiza el flujo de trabajo para compilar y publicar `dist/`. Si necesitas las rutas de API en producción, despliega en una plataforma de servidor como Vercel, Netlify o un host de Node.

## Licencia

[MIT](LICENSE)
