import axios from 'axios';

const API_URL = 'http://localhost:3020';

function getAllJobs() {
  return axios.get(`${API_URL}/jobs`);
}

function getJob(id) {
  return axios.get(`${API_URL}/jobs/${id}`);
}

export { getAllJobs, getJob };
