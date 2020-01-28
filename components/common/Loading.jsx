import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className='text-center'>
    <Spinner animation='border' role='status' className='my-3'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
