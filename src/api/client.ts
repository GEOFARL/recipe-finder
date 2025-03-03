import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const apiClient = setupCache(
  axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    params: { apiKey: process.env.SPOONACULAR_API_KEY },
    timeout: 5000,
  })
);

export default apiClient;
