import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({ size = '' }) => (
  <div className='text-center'>
    <Spinner animation='border' size={size} role='status' className='my-3'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
