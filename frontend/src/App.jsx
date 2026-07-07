import { useState, useEffect } from 'react';
import QuestionnaireForm from './components/QuestionnaireForm';
import Results from './components/Results';
import { apiService } from './services/api';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const status = await apiService.getStatus();
        console.log('API Status:', status);
      } catch (err) {
        console.error('Error connecting to API:', err);
        setApiStatus(null);
      }
    };
    checkStatus();
  }, []);

  const handleSubmit = async (answers) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiService.submitEvaluation(answers);
      setResults(response);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message || 'Error al procesar el diagnóstico');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sistema Experto Psicología</h1>
        <p>Evaluación Multidimensional del Bienestar Estudiantil</p>
      </div>

      {error && (
        <div className="error-message" style={{ marginBottom: '20px' }}>
          ⚠️ {error}
        </div>
      )}

      {!results ? (
        <div>
          <QuestionnaireForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      ) : (
        <Results data={results} onReset={handleReset} />
      )}

      <footer style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '0.9rem'
      }}>
      </footer>
    </div>
  );
}

export default App;
