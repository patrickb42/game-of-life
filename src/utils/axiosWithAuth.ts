import Axios from 'axios';

export const axiosWithAuth = () => Axios.create({
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});

export default axiosWithAuth;
