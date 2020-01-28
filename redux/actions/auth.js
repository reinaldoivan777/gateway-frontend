import { setCookie, removeCookie } from '../../utils/cookie';
import { Router } from '../../routes';

export const login = body => async dispatch => {
  const response = await fetch(`${process.env.BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => {
      return response.json();
    })
    .then(async data => {
      setCookie('token', data.token);

      await dispatch({
        type: 'LOGIN',
        payload: data
      });

      return data;
    });

  return response;
};

export const logout = () => {
  removeCookie('token');
  Router.push('/login');
};
