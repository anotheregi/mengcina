import axios from 'axios';

const API_BASE = 'https://mycina.vercel.app/api';

export const getTrending = async () => {
  try {
    const response = await axios.get(`${API_BASE}/trending`);
    return response.data?.data || response.data || [];
  } catch (error) {
    console.error("Error fetching trending:", error);
    return [];
  }
};

export const getMustSee = async () => {
  try {
    const response = await axios.get(`${API_BASE}/muse`);
    return response.data?.data || response.data || [];
  } catch (error) {
    console.error("Error fetching must-see:", error);
    return [];
  }
};

export const getHiddenGems = async () => {
  try {
    const response = await axios.get(`${API_BASE}/hige`);
    return response.data?.data || response.data || [];
  } catch (error) {
    console.error("Error fetching hidden gems:", error);
    return [];
  }
};

export const getDramaDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/drama/${id}`);
    return response.data?.data || response.data || {};
  } catch (error) {
    console.error("Error fetching drama details:", error);
    return {};
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE}/genres`);
    return response.data?.data || response.data || [];
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};

export const getGenreDetails = async (genreId) => {
  try {
    const response = await axios.get(`${API_BASE}/genres/${genreId}`);
    return response.data?.data || response.data || {};
  } catch (error) {
    console.error("Error fetching genre details:", error);
    return {};
  }
};

export const searchDramas = async (query) => {
  try {
    const response = await axios.get(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
    return response.data?.data || response.data || [];
  } catch (error) {
    console.error("Error searching dramas:", error);
    return [];
  }
};