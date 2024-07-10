import axios from 'axios';

// Create a new instance of axios
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Timeout duration in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

// Request interceptor for adding authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    // Perform any actions before the request is sent
    // e.g., adding headers, modifying request data, etc.
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    // e.g., logging, caching responses, etc.
    return response;
  },
  (error) => {
    // Handle error responses
    // e.g., redirect user, show error message, etc.
    return Promise.reject(error);
  }
);

export default axiosInstance;
