import Axios from 'axios';

export const axiosWithOAuth = () => Axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosWithOAuth;
