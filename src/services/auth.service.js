import axios from 'axios';

const authService = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`
});

export function signUp(credentials) {
  return authService.post('/signup', credentials)
};

export function logIn(credentials) {
  return authService.post('/login', credentials)
};

export function verify(token) {
  return authService.post('/verify', { token: token });
}


