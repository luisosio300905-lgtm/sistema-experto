import React from 'react';

const Results = ({ data, onReset }) => {
  if (!data) return null;

  const pesos = data.pesos_calculados;
  const paciente = data.paciente;
  const perfilGanador = data.perfil_ganador;
  const porcentajeMatch = data.porcentaje_match;
  const prioridad = data.prioridad;
  const dictamen = data.dictamen;
  const recomendacion = data.recomendacion;

  const calcularPesos = () => {
    const estresTotal = pesos.estres.reduce((a, b) => a + b, 0);
    const autoestimaTotal = pesos.autoestima.reduce((a, b) => a + b, 0);
    const animoTotal = pesos.animo.reduce((a, b) => a + b, 0);

    return {
      estres: estresTotal,
      autoestima: autoestimaTotal,
      animo: animoTotal
    };
  };

  const pesosTotal = calcularPesos();

  const perfilesData = [
    { name: 'Estrés', Puntuación: pesosTotal.estres },
    { name: 'Autoestima', Puntuación: pesosTotal.autoestima },
    { name: 'Ánimo', Puntuación: pesosTotal.animo }
  ];

  const getRiskColor = (prioridad) => {
    switch(prioridad) {
      case 'Baja':
        return '#10b981'; // Green
      case 'Media':
        return '#f59e0b'; // Orange
      case 'Alta':
        return '#ef4444'; // Red
      default:
        return '#3b82f6'; // Blue
    }
  };

  return (
      <div className="results-container">
        <h2 style={{ gridColumn: '1 / -1', color: '#3b82f6', marginBottom: '20px' }}>
          📋 Diagnóstico Psicoacadémico
        </h2>

        <div className="result-card" style={{ gridColumn: '1 / -1', background: `linear-gradient(135deg, ${getRiskColor(prioridad)} 0%, rgba(59, 130, 246, 0.1) 100%)`, borderLeft: `4px solid ${getRiskColor(prioridad)}` }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1f2937' }}>Paciente: {paciente}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '5px' }}>Perfil Detectado</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1f2937' }}>{perfilGanador}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '5px' }}>Nivel de Prioridad</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: getRiskColor(prioridad) }}>{prioridad}</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '5px' }}>Porcentaje de Coincidencia</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b82f6' }}>{porcentajeMatch.toFixed(1)}%</p>
          </div>
        </div>

        <div className="result-card" style={{ gridColumn: '1 / -1' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1f2937' }}>Dictamen Clínico</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            {dictamen}
          </p>
            <div style={{
                backgroundColor: '#f0f4f8',
                padding: '20px',
                borderRadius: '8px',
                borderLeft: '4px solid #3b82f6'
            }}>
                <h4 style={{ fontSize: '1.1rem', color: '#1f2937', marginBottom: '15px' }}>
                    💡 Recomendaciones Personalizadas
                </h4>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {recomendacion}
                </p>
            </div>
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button
              className="btn btn-primary"
              onClick={onReset}
              style={{ flex: 1 }}
          >
            📝 Realizar Nuevo Diagnóstico
          </button>
        </div>
      </div>
  );
};

export default Results;
