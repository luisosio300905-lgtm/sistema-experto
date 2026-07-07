import React, { useState } from 'react';

const QuestionnaireForm = ({ onSubmit, isLoading }) => {
  const [nombrePaciente, setNombrePaciente] = useState('');
  const [answers, setAnswers] = useState({});

  const sections = {
    'Estrés y Mecanismos de Afrontamiento': [
      {
        id: 1,
        question: 'Tienes una entrega universitaria crucial mañana a primera hora y el proyecto está a la mitad. ¿Cómo reaccionas?',
        options: {
          A: 'Decido ver una película o jugar algo para relajarme un rato, intentando no pensar en el problema.',
          B: 'Cancelo mis horas de sueño por completo y me obligo a trabajar sin parar, ignorando el cansancio o el hambre.',
          C: 'Me abrumo tanto pensando en el fracaso que me quedo congelado frente a la pantalla sin saber por dónde empezar.',
          D: 'Reviso qué es lo vital, armo un plan de emergencia para las horas disponibles y, si es necesario, pido ayuda a un compañero.'
        }
      },
      {
        id: 2,
        question: 'Te enteras de que hubo un cambio de último minuto en las reglas de un examen y ahora es mucho más difícil. Tu primera acción es:',
        options: {
          A: 'Quejarme con mis amigos y considerar seriamente no presentarme al examen.',
          B: 'Buscar el doble de material para estudiar, obsesionándome con dominar todo el nuevo temario de inmediato.',
          C: 'Sentir un nudo en el estómago y asumir que voy a reprobar, perdiendo la concentración para estudiar lo que ya sabía.',
          D: 'Evaluar con calma los nuevos temas, priorizar los puntos clave y ajustar mi método de estudio.'
        }
      },
      {
        id: 3,
        question: 'Cuando acumulas demasiadas responsabilidades y tareas pendientes en tu semana, ¿cómo se manifiesta tu comportamiento?',
        options: {
          A: 'Empiezo a posponer las cosas y me distraigo con cualquier actividad irrelevante.',
          B: 'Me vuelvo sumamente rígido con mis horarios, me sobrecargo de cafeína y me molesto si alguien me interrumpe.',
          C: 'Siento un cansancio mental extremo que me impide tomar decisiones simples sobre por dónde empezar.',
          D: 'Hago una lista, descarto las tareas que no son urgentes y delego o pido prórrogas de manera tranquila.'
        }
      },
      {
        id: 4,
        question: 'Has cometido un error crítico en un trabajo grupal que afecta la nota de todos. ¿Cómo lo manejas emocionalmente?',
        options: {
          A: 'Intento minimizar la importancia del error o evito hablar del tema con el grupo por vergüenza.',
          B: 'Me culpo obsesivamente, me quedo despierto pensando en el error y trato de compensarlo haciendo todo el resto del trabajo yo solo.',
          C: 'Me hundo en la frustración, sintiendo que soy incapaz de hacer las cosas bien y prefiero distanciarme del grupo.',
          D: 'Admito el error ante el grupo de forma transparente y propongo de inmediato dos soluciones para corregirlo.'
        }
      },
      {
        id: 5,
        question: 'Llegas a tu casa o espacio de trabajo tras un día sumamente caótico y lleno de presión. Lo primero que haces es:',
        options: {
          A: 'Buscar un escape inmediato (comer en exceso, dormir de más o pasar horas pegado a las redes sociales).',
          B: 'Seguir revisando pendientes en el teléfono o la computadora, siendo incapaz de desconectarme del trabajo.',
          C: 'Sentirme mentalmente drenado, irritable ante cualquier ruido o pregunta de quienes me rodean.',
          D: 'Tomarme un momento para respirar, darme una ducha o hacer una actividad relajante de forma consciente.'
        }
      }
    ],
    'Autoestima y Autoconcepto': [
      {
        id: 6,
        question: 'El profesor te devuelve un proyecto con bastantes correcciones en rojo frente a toda la clase. ¿Qué piensas?',
        options: {
          A: '"Soy pésimo en esto, el profesor tiene razón en dudar de mi capacidad."',
          B: 'Me enfoco en si el profesor está molesto conmigo y busco la forma de agradarle en la próxima oportunidad.',
          C: '"El profesor la tiene tomada conmigo o no entendió mi brillante enfoque."',
          D: '"Las correcciones son duras, pero me sirven para entender en qué fallé y mejorar mi trabajo."'
        }
      },
      {
        id: 7,
        question: 'Alguien te da un cumplido sincero y público sobre una habilidad que posees. Tu reacción interna es:',
        options: {
          A: 'Incomodidad extrema; siento que solo lo dicen por amabilidad y que realmente no soy tan bueno.',
          B: 'Una gran satisfacción, pero inmediatamente siento la presión de tener que mantener esa expectativa ajena siempre.',
          C: 'Lo tomo con naturalidad, pensando que es lo mínimo que merezco ya que suelo ser mejor que el promedio.',
          D: 'Agradecimiento genuino; acepto el elogio con tranquilidad reconociendo mi propio esfuerzo.'
        }
      },
      {
        id: 8,
        question: 'Tienes que tomar una decisión importante sobre tu futuro, pero las personas que te rodean no están de acuerdo contigo. ¿Qué haces?',
        options: {
          A: 'Abandono mi idea por completo, asumiendo que mi criterio probablemente esté equivocado.',
          B: 'Modifico mis planes para adaptarlos a lo que ellos esperan de mí, buscando que se queden tranquilos.',
          C: 'Defiendo mi postura de forma agresiva, cortando la comunicación con quienes me contradicen.',
          D: 'Escucho sus puntos de vista con respeto, evalúo los riesgos y mantengo mi decisión si considero que es lo mejor para mí.'
        }
      },
      {
        id: 9,
        question: 'Estás viendo las redes sociales o conversando con colegas y notas que a todos les va "mejor" que a ti. ¿Cómo te afecta?',
        options: {
          A: 'Siento una profunda envidia e inferioridad, pensando que me estoy quedando atrás en la vida.',
          B: 'Me obsesiono con publicar mis propios logros (reales o exagerados) para no parecer menos ante los demás.',
          C: 'Desmerito el éxito de los demás, pensando que han tenido suerte o ayuda que yo no tuve.',
          D: 'Entiendo que cada persona tiene su propio ritmo de vida y me alegro por ellos sin descuidar mi propio proceso.'
        }
      },
      {
        id: 10,
        question: 'Cometes un error social vergonzoso (como decir algo fuera de lugar) en una reunión. ¿Cómo pasas el resto de la noche?',
        options: {
          A: 'Analizando el momento una y otra vez en mi cabeza, deseando que la tierra me trague y queriendo irme a casa.',
          B: 'Buscando desesperadamente la atención de alguien para hacer un chiste o acción que borre la mala impresión.',
          C: 'Fingiendo que lo hice a propósito o actuando de forma indiferente y altanera ante las miradas.',
          D: 'Dejándolo pasar; reconozco que fue un momento incómodo, me disculpo si ofendí a alguien y sigo disfrutando de la reunión.'
        }
      }
    ],
    'Estado Anímico / Emocional': [
      {
        id: 11,
        question: '¿Cómo describirías tu nivel general de energía e interés al despertar por las mañanas últimamente?',
        options: {
          A: 'Siento un desgano profundo; la mayoría de los días me cuesta encontrar una razón motivadora para levantarme.',
          B: 'Despierto ya con la mente acelerada, sintiendo tensión acumulada o malhumor desde el primer minuto.',
          C: 'Vacío o neutro; me levanto por pura inercia y rutina, bloqueando cualquier pensamiento sobre cómo me siento.',
          D: 'Estable; con los niveles de energía normales para afrontar el día, independientemente de las tareas.'
        }
      },
      {
        id: 12,
        question: 'Tus amigos te invitan a una reunión para hacer una actividad que solías disfrutar muchísimo en tu tiempo libre. ¿Cuál es tu postura?',
        options: {
          A: 'Rechazo la invitación; la verdad es que ya nada de eso me genera entusiasmo ni placer.',
          B: 'Voy, pero termino frustrándome o discutiendo por cosas insignificantes debido a mi susceptibilidad actual.',
          C: 'Invento una excusa para quedarme solo; prefiero encerrarme y ocultar que no tengo ánimos de interactuar.',
          D: 'Acepto con gusto; valoro el espacio para compartir con ellos y despejar la mente de forma saludable.'
        }
      },
      {
        id: 13,
        question: 'Has tenido una semana sumamente triste o frustrante. Si un ser querido se acerca y te pregunta genuinamente "¿Cómo estás?", tú:',
        options: {
          A: 'Respondo con un "bien" desanimado y desvío el tema, porque me da igual hablar de ello.',
          B: 'Reacciono de forma cortante o explosiva, diciendo que me dejen en paz o descargando mi enojo con esa persona.',
          C: 'Sonrío falsamente y aseguro que todo marcha perfecto para no preocupar a nadie ni mostrarme vulnerable.',
          D: 'Me permito ser honesto, comparto cómo me siento y agradezco el espacio para desahogarme.'
        }
      },
      {
        id: 14,
        question: 'Cuando experimentas una racha de varios días donde las cosas no salen como esperabas, tu diálogo interno suele volverse:',
        options: {
          A: 'Inexistente; caigo en una especie de adormecimiento emocional donde simplemente dejo de importar el resultado.',
          B: 'Un torbellino de quejas, enojo constante y pensamientos pesimistas sobre la situación.',
          C: 'Racional al extremo; me obligo a ignorar lo que siento y actúo como si fuera un robot inmune a los problemas.',
          D: 'Compasivo; entiendo que son días difíciles, acepto mi frustración y confío en que la racha pasará.'
        }
      },
      {
        id: 15,
        question: 'Al detenerte a pensar en tus proyectos personales y el futuro a corto plazo (los próximos meses), el sentimiento predominante es:',
        options: {
          A: 'Desesperanza o vacío; siento que nada de lo que haga cambiará mi situación actual.',
          B: 'Ansiedad constante y miedo al fracaso, sintiendo que el futuro es una amenaza constante.',
          C: 'Incertidumbre controlada; prefiero no pensar en el futuro en absoluto para no alterar mi calma presente.',
          D: 'Optimismo moderado; tengo metas claras y confío en mis capacidades para sortear los retos que vengan.'
        }
      }
    ]
  };

  const handleAnswerChange = (questionId, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombrePaciente.trim()) {
      alert('Por favor ingresa el nombre del paciente.');
      return;
    }
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = 15;
    if (answeredQuestions !== totalQuestions) {
      alert(`Por favor responde todas las preguntas. Has respondido ${answeredQuestions} de ${totalQuestions}.`);
      return;
    }
    const formattedData = {
      nombre_paciente: nombrePaciente.trim(),
      respuestas: Object.keys(answers).map(questionId => ({
        pregunta_id: parseInt(questionId),
        alternativa_marcada: answers[questionId]
      }))
    };
    onSubmit(formattedData);
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = 15;

  return (
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section" style={{ marginBottom: '30px', borderBottom: '2px solid var(--border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Información del Paciente</h2>
          <div className="question-group">
            <label htmlFor="nombrePaciente" className="question-label">
              Nombre del Paciente
            </label>
            <input
                id="nombrePaciente"
                type="text"
                value={nombrePaciente}
                onChange={(e) => setNombrePaciente(e.target.value)}
                placeholder="Ej: Luis Osio"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Progreso: {answeredCount} de {totalQuestions} preguntas
          </span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}></div>
          </div>
        </div>

        {Object.keys(sections).map((sectionTitle, sectionIndex) => (
            <div key={sectionIndex} className="form-section">
              <h2>{sectionTitle}</h2>
              {sections[sectionTitle].map((q) => (
                  <div key={q.id} className="question-group">
                    <label className="question-label">
                      <strong>P{q.id}:</strong> {q.question}
                    </label>
                    <div className="options-container">
                      {Object.keys(q.options).map((option) => (
                          <button
                              key={option}
                              type="button"
                              className={`option-button ${answers[q.id] === option ? 'selected' : ''}`}
                              onClick={() => handleAnswerChange(q.id, option)}
                          >
                            <span style={{ fontWeight: 'bold', marginRight: '4px' }}>{option}</span>
                            {q.options[option]}
                          </button>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
        ))}

        <div className="button-group">
          <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading || answeredCount !== totalQuestions || !nombrePaciente.trim()}
          >
            {isLoading ? (
                <>
                  <span className="spinner" style={{ width: '16px', height: '16px' }}></span>
                  Analizando...
                </>
            ) : (
                '📊 Obtener Diagnóstico'
            )}
          </button>
        </div>
      </form>
  );
};

export default QuestionnaireForm;
