import axios from 'axios';

const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get('http://containers-us-west-167.railway.app:7495/api/endpoint');
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      console.error(error);
      throw error; // Trata o erro, se necessário
    }
  };
  