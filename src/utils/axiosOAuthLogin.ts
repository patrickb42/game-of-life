import Axios from 'axios';

interface AxiosWithOAuthLoginProps {
  username: string,
  password: string,
  url: string,
  client: string,
  secret: string,
}

export const axiosOAuthLogin = async ({
  username, password, url, client, secret,
}: AxiosWithOAuthLoginProps) => {
  try {
    const response = await Axios.post(
      url,
      `grant_type=password&username=${username}&password=${password}`,
      {
        headers: {
          Authorization: `Basic ${btoa(`${client}:${secret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    localStorage.setItem('token', response.data.access_token);
  } catch (error) {
    console.error(error.response);
  }
};

export default axiosOAuthLogin;
