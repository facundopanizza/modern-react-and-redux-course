import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6kteuDbqM4LT0F_CU6AE9cIo-gP5VaTY76hwG0tmy2A',
  },
});
