// utils/api.ts
import axios from 'axios';

const API_URL = process.env.API_URL || "https://api-eco-guard.vercel.app";  // URL base da API

// Função auxiliar para obter cabeçalhos com o token de autenticação, caso necessário
const getHeaders = (token: string | null) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

// Função para realizar requisições GET
export const get = async (endpoint: string, token: string | null = null) => {
  try {
    console.log('GET Request:', `${API_URL}${endpoint}`);
    const response = await axios.get(`${API_URL}${endpoint}`, {
      // headers: getHeaders(token),
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;  // Lança o erro para ser tratado na camada superior
  }
};

// Função para realizar requisições POST
export const post = async (endpoint: string, data: any, token: string | null = null) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      // headers: getHeaders(token),
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error;  // Lança o erro para ser tratado na camada superior
  }
};

// Função para realizar requisições PUT
export const put = async (endpoint: string, data: any, token: string | null = null) => {
  try {
    const response = await axios.put(`${API_URL}${endpoint}`, data, {
      // headers: getHeaders(token),
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('PUT Request Error:', error);
    throw error;  // Lança o erro para ser tratado na camada superior
  }
};

// Função para realizar requisições DELETE
export const remove = async (endpoint: string, token: string | null = null) => {
  try {
    const response = await axios.delete(`${API_URL}${endpoint}`, {
      // headers: getHeaders(token),
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('DELETE Request Error:', error);
    throw error;  // Lança o erro para ser tratado na camada superior
  }
};
