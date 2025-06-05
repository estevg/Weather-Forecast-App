# 🌤️ Weather Forecast App

Aplicación desarrollada como parte del proceso de selección técnica. Permite consultar el clima actual y la previsión por horas para tres ciudades, en dos idiomas.

---

## 📌 Características

- 🌍 **Selección de idioma**: inglés y español.
- 🏙️ **Ciudades disponibles**: London, Toronto y Singapore.
- 📈 **Pronóstico por horas** para el día actual.
- 🌐 **Internacionalización** con `i18next`.
- 🧱 **Arquitectura limpia + DDD** aplicada en React + TypeScript.
- ⚙️ **Componentes reutilizables** basados en diseño atómico.
- 🧪 **Pruebas unitarias** con Vitest y Testing Library.
- 💅 Estilo minimalista y responsive con HTML semántico y CSS separado.

---

## 🧠 Tecnologías utilizadas

| Categoría            | Tecnología                      |
| -------------------- | ------------------------------- |
| Framework            | [React](https://reactjs.org/)   |
| Lenguaje             | TypeScript                      |
| Build tool           | [Vite](https://vitejs.dev/)     |
| HTTP client          | Axios                           |
| Internacionalización | i18next                         |
| Testing              | Vitest + @testing-library/react |
| Arquitectura         | Clean Architecture + DDD        |

---

## 📂 Estructura del proyecto

```bash
src/
├── app/                  # App shell y configuración global
├── domain/               # Entidades, repositorios (DDD)
├── application/          # Casos de uso
├── infrastructure/       # Conexión con API externa (OpenWeather)
├── presentation/         # Vistas, hooks, componentes UI
│   └── components/
│       ├── ui/           # Átomos reutilizables como Button
│       ├── WeatherTable.tsx
│       ├── LanguageSelector.tsx
│       └── CitySelector.tsx
│       └── WeatherSkeleton.tsx
│   └── hooks/           # Hooks personalizados
│   └── view/            # Vistas y páginas
│
├── shared/
│   ├── i18n/             # Archivos de traducción
│   ├── config/           # Constantes globales
│   └── types/            # Tipos compartidos
│   └── utils/            # Utils
```

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
```

2. Instala dependencias:

```bash
yarn install
```

3. Agrega tu API key de OpenWeather:

Crea un archivo `.env` en la raíz:

```
VITE_OPENWEATHER_API_KEY=tu_api_key
VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5
```

---

## 🖥️ Ejecutar en desarrollo

```bash
yarn run dev
```

---

## 🧪 Ejecutar pruebas

```bash
yarn run test
yarn run test:ui
```

Incluye pruebas unitarias para:

- ✅ Caso de uso `GetWeatherForecast`
- ✅ Hook `useWeather`, `LanguageSelector`
- ✅ Componentes `WeatherTable`, `CitySelector`, `LanguageSelector`, `Button`

---

## 📌 Decisiones técnicas

- Se aplicó **Clean Architecture + DDD** para separar responsabilidades.
- Se crearon **componentes atómicos reutilizables** como `Button`.
- Se utilizó `i18next` para permitir **internacionalización escalable**.
- La tabla de clima utiliza `Skeleton UI` para una mejor experiencia de carga.
- Toda la lógica de infraestructura está desacoplada del dominio.

---

## 📬 Contacto

Esteban Vega
Frontend Developer
[LinkedIn](https://www.linkedin.com/in/estevg/)
