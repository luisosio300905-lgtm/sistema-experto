import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://sistema-experto-psicologia.vercel.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const apiService = {
  // Get API health status
  getStatus: async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      console.error('Error getting status:', error);
      throw error;
    }
  },

  // Submit evaluation and get diagnosis
  submitEvaluation: async (payload) => {
    try {
      const response = await api.post('/evaluacion/diagnosticar', payload);
      return response.data;
    } catch (error) {
      console.error('Error submitting evaluation:', error);
      if (error.response?.status === 422) {
        throw new Error('Error en la validación de datos. Por favor verifica tus respuestas.');
      }
      throw new Error('Error al procesar el diagnóstico. Por favor intenta de nuevo.');
    }
  },

  // Get available dimensions
  getDimensions: async () => {
    try {
      const response = await api.get('/evaluacion/dimensiones');
      return response.data;
    } catch (error) {
      console.error('Error getting dimensions:', error);
      throw error;
    }
  }
};

export default api;
