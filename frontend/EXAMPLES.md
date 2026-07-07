# 📚 Ejemplos de Uso - Frontend React

## Casos de Prueba para el Sistema Experto Psicoacadémico

---

## 📋 Prueba 1: Usuario Bien Adaptado

**Descripción:** Simula a un estudiante con bajo estrés, buena autoestima y estado anímico positivo.

### Respuestas del Formulario
```javascript
{
  "1": "D",  // Estrés: Asertivo
  "2": "D",  // Estrés: Asertivo
  "3": "D",  // Estrés: Asertivo
  "4": "D",  // Estrés: Asertivo
  "5": "D",  // Estrés: Asertivo
  
  "6": "D",  // Autoestima: Sana
  "7": "D",  // Autoestima: Sana
  "8": "D",  // Autoestima: Sana
  "9": "D",  // Autoestima: Sana
  "10": "D", // Autoestima: Sana
  
  "11": "D", // Anímico: Sano
  "12": "D", // Anímico: Sano
  "13": "D", // Anímico: Sano
  "14": "D", // Anímico: Sano
  "15": "D"  // Anímico: Sano
}
```

### Resultado Esperado
- ✅ Diagnóstico: "Excelente bienestar psicoacadémico"
- ✅ Estrés: Bajo (~ 0.0)
- ✅ Autoestima: Sana (~ 0.0)
- ✅ Estado Anímico: Sano (~ 0.0)
- 💡 Recomendaciones: Mantener hábitos actuales

---

## 📋 Prueba 2: Usuario con Estrés

**Descripción:** Simula a un estudiante con alto estrés pero buen manejo de otras dimensiones.

### Respuestas del Formulario
```javascript
{
  "1": "A",  // Estrés: Evitar
  "2": "B",  // Estrés: Hiperactividad
  "3": "C",  // Estrés: Bloqueo
  "4": "A",  // Estrés: Evitar
  "5": "B",  // Estrés: Hiperactividad
  
  "6": "D",  // Autoestima: Sana
  "7": "D",  // Autoestima: Sana
  "8": "D",  // Autoestima: Sana
  "9": "D",  // Autoestima: Sana
  "10": "D", // Autoestima: Sana
  
  "11": "D", // Anímico: Sano
  "12": "D", // Anímico: Sano
  "13": "D", // Anímico: Sano
  "14": "D", // Anímico: Sano
  "15": "D"  // Anímico: Sano
}
```

### Resultado Esperado
- ⚠️ Diagnóstico: "Presenta estrés académico significativo"
- ⚠️ Estrés: Alto (~ 2.0)
- ✅ Autoestima: Sana (~ 0.0)
- ✅ Estado Anímico: Sano (~ 0.0)
- 💡 Recomendaciones: Técnicas de manejo del estrés

---

## 📋 Prueba 3: Usuario con Baja Autoestima

**Descripción:** Simula a un estudiante con problemas de autoestima.

### Respuestas del Formulario
```javascript
{
  "1": "D",  // Estrés: Asertivo
  "2": "D",  // Estrés: Asertivo
  "3": "D",  // Estrés: Asertivo
  "4": "D",  // Estrés: Asertivo
  "5": "D",  // Estrés: Asertivo
  
  "6": "A",  // Autoestima: Crítica
  "7": "B",  // Autoestima: Dependencia
  "8": "C",  // Autoestima: Defensiva
  "9": "A",  // Autoestima: Crítica
  "10": "B", // Autoestima: Dependencia
  
  "11": "D", // Anímico: Sano
  "12": "D", // Anímico: Sano
  "13": "D", // Anímico: Sano
  "14": "D", // Anímico: Sano
  "15": "D"  // Anímico: Sano
}
```

### Resultado Esperado
- ⚠️ Diagnóstico: "Autoestima comprometida requiere intervención"
- ✅ Estrés: Bajo (~ 0.0)
- ❌ Autoestima: Crítica (~ 2.0+)
- ✅ Estado Anímico: Sano (~ 0.0)
- 💡 Recomendaciones: Terapia de autoestima, autocuidado

---

## 📋 Prueba 4: Usuario con Estado Anímico Negativo

**Descripción:** Simula a un estudiante con depresión o problemas emocionales.

### Respuestas del Formulario
```javascript
{
  "1": "D",  // Estrés: Asertivo
  "2": "D",  // Estrés: Asertivo
  "3": "D",  // Estrés: Asertivo
  "4": "D",  // Estrés: Asertivo
  "5": "D",  // Estrés: Asertivo
  
  "6": "D",  // Autoestima: Sana
  "7": "D",  // Autoestima: Sana
  "8": "D",  // Autoestima: Sana
  "9": "D",  // Autoestima: Sana
  "10": "D", // Autoestima: Sana
  
  "11": "A", // Anímico: Apatía
  "12": "B", // Anímico: Irritabilidad
  "13": "C", // Anímico: Aislamiento
  "14": "A", // Anímico: Apatía
  "15": "C"  // Anímico: Aislamiento
}
```

### Resultado Esperado
- 🔴 Diagnóstico: "Estado anímico comprometido - buscar apoyo profesional"
- ✅ Estrés: Bajo (~ 0.0)
- ✅ Autoestima: Sana (~ 0.0)
- ❌ Estado Anímico: Negativo (~ 2.0+)
- 💡 Recomendaciones: Consulta psicológica urgente

---

## 📋 Prueba 5: Usuario en Crisis Total

**Descripción:** Simula a un estudiante con problemas en todas las dimensiones.

### Respuestas del Formulario
```javascript
{
  "1": "A",  // Estrés: Evitar
  "2": "B",  // Estrés: Hiperactividad
  "3": "C",  // Estrés: Bloqueo
  "4": "A",  // Estrés: Evitar
  "5": "C",  // Estrés: Bloqueo
  
  "6": "A",  // Autoestima: Crítica
  "7": "B",  // Autoestima: Dependencia
  "8": "C",  // Autoestima: Defensiva
  "9": "A",  // Autoestima: Crítica
  "10": "C", // Autoestima: Defensiva
  
  "11": "A", // Anímico: Apatía
  "12": "B", // Anímico: Irritabilidad
  "13": "C", // Anímico: Aislamiento
  "14": "B", // Anímico: Irritabilidad
  "15": "A"  // Anímico: Apatía
}
```

### Resultado Esperado
- 🔴 Diagnóstico: "Requiere intervención inmediata de salud mental"
- ❌ Estrés: Alto (~ 2.4)
- ❌ Autoestima: Muy Baja (~ 2.4)
- ❌ Estado Anímico: Crítico (~ 2.0+)
- 💡 Recomendaciones: Contactar a servicios de salud mental

---

## 📋 Prueba 6: Respuestas Mixtas (Balanceado)

**Descripción:** Simula a un estudiante con perfil equilibrado con algunas áreas de mejora.

### Respuestas del Formulario
```javascript
{
  "1": "B",  // Estrés: Hiperactividad
  "2": "D",  // Estrés: Asertivo
  "3": "B",  // Estrés: Hiperactividad
  "4": "D",  // Estrés: Asertivo
  "5": "C",  // Estrés: Bloqueo
  
  "6": "C",  // Autoestima: Defensiva
  "7": "D",  // Autoestima: Sana
  "8": "D",  // Autoestima: Sana
  "9": "C",  // Autoestima: Defensiva
  "10": "D", // Autoestima: Sana
  
  "11": "C", // Anímico: Aislamiento
  "12": "D", // Anímico: Sano
  "13": "D", // Anímico: Sano
  "14": "C", // Anímico: Aislamiento
  "15": "D"  // Anímico: Sano
}
```

### Resultado Esperado
- ⚠️ Diagnóstico: "Bienestar moderado con áreas de mejora"
- ⚠️ Estrés: Moderado (~ 1.2)
- ⚠️ Autoestima: Moderada (~ 1.0)
- ⚠️ Estado Anímico: Moderado (~ 1.0)
- 💡 Recomendaciones: Trabajo en manejo de estrés y autoconfianza

---

## 🧪 Cómo Ejecutar Pruebas Manuales

### 1. Abre la Aplicación
```bash
npm run dev
# Accede a http://localhost:5173
```

### 2. Completa el Formulario
- Selecciona las respuestas según un caso de prueba
- Observa la barra de progreso actualizar
- Verifica que el botón "Obtener Diagnóstico" se habilite cuando todas las preguntas estén respondidas

### 3. Envía el Formulario
- Haz clic en "Obtener Diagnóstico"
- Observa el spinner de carga
- Espera la respuesta del backend

### 4. Verifica los Resultados
- Comprueba que el diagnóstico general sea relevante
- Verifica las puntuaciones de cada dimensión
- Revisa las gráficas (BarChart y LineChart)
- Lee las recomendaciones personalizadas

### 5. Prueba Funcionalidades Adicionales
- Haz clic en "Realizar Nuevo Diagnóstico" para volver al formulario
- Prueba el botón "Imprimir Resultados" (Ctrl+P)
- Verifica que los datos se muestren correctamente en impresión

---

## 🔍 Validaciones del Formulario

### Validación Incompleta
```javascript
// Si intentas enviar sin responder todas las preguntas:
alert("Por favor responde todas las preguntas. Has respondido 12 de 15.")
```

### Cambio de Respuesta
- Haz clic en una respuesta diferente
- La respuesta anterior debe deseleccionarse
- La barra de progreso debe mantenerse igual

### Reset del Formulario
- Haz clic en "Limpiar Formulario"
- Todas las respuestas deben borrarse
- La barra de progreso debe volver a 0%
- El botón "Obtener Diagnóstico" debe deshabilitarse

---

## 🎨 Pruebas de UI/UX

### Responsividad
```bash
# En DevTools (F12):
1. Presiona Ctrl+Shift+M para modo responsive
2. Prueba en:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
3. Verifica que el layout se adapte correctamente
```

### Colores y Contraste
```bash
# Verifica que:
- Los botones sean visibles en distintos estados
- El texto sea legible en todos los fondos
- Los colores de error/éxito sean claros
```

### Interactividad
```bash
# Prueba en:
- Hover de botones (cambio de color)
- Focus de inputs (outline visible)
- Estados disabled (opacidad)
- Animaciones suave
```

---

## 📊 Pruebas de Integración API

### Prueba de Conexión
```javascript
// Abre la consola (F12) y ejecuta:
fetch('http://localhost:8000/')
  .then(r => r.json())
  .then(d => console.log('API OK:', d))
  .catch(e => console.error('API Error:', e))
```

### Prueba de Envío
```javascript
// Abre la consola (F12) y ejecuta:
const answers = {
  "1": "D", "2": "D", "3": "D", "4": "D", "5": "D",
  "6": "D", "7": "D", "8": "D", "9": "D", "10": "D",
  "11": "D", "12": "D", "13": "D", "14": "D", "15": "D"
};

fetch('http://localhost:8000/evaluacion/diagnosticar', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ respuestas: answers })
})
  .then(r => r.json())
  .then(d => console.log('Diagnóstico:', d))
  .catch(e => console.error('Error:', e))
```

---

## 🐛 Debugging Común

### Error: "API no responde"
```javascript
// En la consola del navegador:
console.log('API URL:', import.meta.env.VITE_API_URL)
console.log('Backend corriendo:', window.fetch('http://localhost:8000/'))
```

### Error: "CORS origin not allowed"
Verifica en el backend:
```python
# backend/main.py
origins = [
    "http://localhost:5173",  # Frontend debe estar aquí
    "http://localhost:3000",
    "*"  # Para desarrollo
]
```

### Gráficas no se muestran
```javascript
// Abre DevTools Network tab
// Busca solicitudes a /evaluacion/diagnosticar
// Verifica que response sea válido JSON
```

---

## ✅ Checklist de Pruebas

### Antes de Despliegue
- [ ] Todas las 15 preguntas aparecen correctamente
- [ ] Barra de progreso funciona (0-15)
- [ ] Validación previene envío incompleto
- [ ] Botón Reset limpia todas las respuestas
- [ ] Spinner aparece durante carga
- [ ] Resultados muestran todas las secciones
- [ ] Gráficas se renderizan correctamente
- [ ] Botón Imprimir abre diálogo de impresión
- [ ] Botón "Nuevo Diagnóstico" vuelve al formulario
- [ ] Responsive en móvil, tablet y desktop
- [ ] Ningún error en la consola
- [ ] Variables de entorno configuradas

### Rendimiento
- [ ] Tiempo inicial de carga < 2s
- [ ] Transiciones suave y fluidas
- [ ] Sin memory leaks en DevTools
- [ ] Bundle size < 500KB (sin compresión)

### Accesibilidad
- [ ] Navegación por teclado funciona
- [ ] Labels visibles para inputs
- [ ] Colores con suficiente contraste
- [ ] Mensajes de error claros

---

## 📝 Notas para QA/Testing

1. **Ambiente de Testing:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8000
   - Backend Docs: http://localhost:8000/docs

2. **Datos Sensibles:**
   - No almacenar datos personales en test
   - Usar respuestas genéricas

3. **Reportar Bugs:**
   - Incluir pasos para reproducir
   - Captura de pantalla si es necesario
   - Versión de navegador
   - Mensajes de error exactos

---

**¡Listo para Pruebas! 🚀**

Usa estos ejemplos para validar que el sistema funciona correctamente en todos los escenarios posibles.
