import { setCookie } from '../../utils/cookie';

export const login = body => async dispatch => {
  const response = await fetch('http://localhost:5000/v1/login', {
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
        payload: data.user
      });

      return data;
    });

  return response;
};
