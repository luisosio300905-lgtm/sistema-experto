# Sistema Experto Psicoacadémico - Frontend

Frontend moderno en React con JavaScript para el Sistema Experto de Diagnóstico Psicoacadémico. Permite evaluar a estudiantes en tres dimensiones clave: Estrés, Autoestima y Estado Anímico.

## 🚀 Características

- ✅ Formulario interactivo con 15 preguntas organizadas en 3 secciones
- ✅ Barra de progreso en tiempo real
- ✅ Validación de respuestas antes de enviar
- ✅ Resultados detallados con gráficas (Recharts)
- ✅ Análisis multidimensional del bienestar psicoacadémico
- ✅ Recomendaciones personalizadas
- ✅ Opción para imprimir resultados
- ✅ Interfaz responsiva y moderna
- ✅ Indicador de estado de conexión con la API

## 📋 Requisitos Previos

- Node.js 16.x o superior
- npm o yarn
- Backend API ejecutándose en `http://localhost:8000`

## 📦 Instalación

1. **Navega al directorio del frontend:**
   ```bash
   cd frontend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Crea el archivo `.env.local`** (opcional, ya viene configurado):
   ```bash
   cp .env.example .env.local
   ```

   Edita según sea necesario:
   ```
   VITE_API_URL=http://localhost:8000
   ```

## 🎯 Cómo Ejecutar

### Desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Vista Previa de Producción
```bash
npm run preview
```

## 📊 Componentes Principales

### QuestionnaireForm
Componente que gestiona el formulario de evaluación con:
- 15 preguntas en 3 secciones (Estrés, Autoestima, Estado Anímico)
- Validación de respuestas completas
- Barra de progreso visual
- Botones para enviar y limpiar

### Results
Componente que muestra:
- Diagnóstico general basado en el análisis
- Tarjetas con puntuaciones por dimensión
- Gráficas de comparativa (BarChart y LineChart)
- Recomendaciones personalizadas
- Opción para imprimir o realizar nuevo diagnóstico

### API Service
Módulo de comunicación con el backend que maneja:
- Verificación de estado de la API
- Envío de respuestas al servidor
- Gestión de errores

## 🛠️ Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── QuestionnaireForm.jsx  # Formulario de evaluación
│   │   └── Results.jsx             # Mostrador de resultados
│   ├── services/
│   │   └── api.js                  # Cliente API con axios
│   ├── App.jsx                     # Componente principal
│   ├── App.css                     # Estilos de App
│   ├── index.css                   # Estilos globales
│   └── main.jsx                    # Punto de entrada
├── .env.example                    # Variables de entorno ejemplo
├── .env.local                      # Variables de entorno locales
├── vite.config.js                  # Configuración de Vite
├── package.json                    # Dependencias
└── README.md                       # Este archivo
```

## 🎨 Paleta de Colores

- **Primario:** #3b82f6 (Azul)
- **Secundario:** #8b5cf6 (Púrpura)
- **Éxito:** #10b981 (Verde)
- **Advertencia:** #f59e0b (Naranja)
- **Peligro:** #ef4444 (Rojo)

## 🔌 API Endpoints Utilizados

### GET /
Verifica el estado de la API
```json
{
  "status": "online",
  "proyecto": "Sistema Experto de Diagnóstico Psicoacadémico",
  "documentacion": "/docs"
}
```

### POST /evaluacion/diagnosticar
Envía las respuestas y recibe el diagnóstico
```json
Request:
{
  "respuestas": {
    "1": "A",
    "2": "B",
    ...
  }
}

Response:
{
  "diagnostico_general": "...",
  "analisis_dimensiones": {
    "estres": { "puntuacion": 1.5, "perfiles": {...} },
    "autoestima": { "puntuacion": 2.0, "perfiles": {...} },
    "animo": { "puntuacion": 1.2, "perfiles": {...} }
  }
}
```

## 📱 Responsividad

El frontend está optimizado para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Escritorio (1024px+)

## 🔐 Privacidad y Seguridad

- Los datos solo se envían al servidor backend
- No se almacenan datos en el navegador (localStorage)
- Se recomienda usar HTTPS en producción
- Aviso de confidencialidad visible en la interfaz

## 📚 Dependencias Principales

- **React 18.x** - Framework UI
- **Axios** - Cliente HTTP
- **Recharts** - Gráficas y visualización
- **Vite** - Build tool moderno

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Docker
Crea un `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🐛 Troubleshooting

### Error de CORS
Si recibes errores de CORS, verifica que el backend tenga CORS habilitado:
```python
# En el backend FastAPI
origins = ["http://localhost:5173", "http://localhost:3000", "*"]
```

### API no conecta
Asegúrate de que:
1. El backend esté ejecutándose en `http://localhost:8000`
2. La variable `VITE_API_URL` sea correcta en `.env.local`
3. No haya firewall bloqueando la conexión

### Variables de entorno no funcionan
Reinicia el servidor de desarrollo después de cambiar `.env.local`:
```bash
npm run dev
```

## 📖 Documentación Adicional

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Recharts Documentation](https://recharts.org/)
- [Axios Documentation](https://axios-http.com/)

## 📄 Licencia

Este proyecto es parte del Sistema Experto Psicoacadémico.

## 👥 Soporte

Para reportar problemas o sugerencias, contacta al equipo de desarrollo.
