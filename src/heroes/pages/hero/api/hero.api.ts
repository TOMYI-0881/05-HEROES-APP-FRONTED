/**
 * Instancia de Axios preconfigurada para el API de héroes.
 * La BASE_URL se obtiene de la variable de entorno VITE_API_URL.
 * Todas las peticiones a la API de héroes pasan por esta instancia.
 * Endpoint base: {VITE_API_URL}/api/heroes
 */
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const HeroApi = axios.create({
  baseURL: `${BASE_URL}/api/heroes`,
});
