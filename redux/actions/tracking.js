import { getCookie } from '../../utils/cookie';

export const tracking = async body => {
  const result = await fetch(`${process.env.BASE_URL}/tracking`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${getCookie('token')}` },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data);

  return result;
};
