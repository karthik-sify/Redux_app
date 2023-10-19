import axios from 'axios';

const ApiKit = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5813d56377844fa9514e3ad80fee1fa', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiKit;
