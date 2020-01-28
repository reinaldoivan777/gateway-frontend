import React from 'react';
import { Card } from 'react-bootstrap';

export const CardResultImport = ({ result }) => {
  const { tracking } = result;
  console.log(result);
  return (
    <Card>
      <Card.Body>
        <p>MBL Number: {tracking.mbl_no}</p>
        <p>Port of Destination: {tracking.port_of_destination} </p>
        <p>Vessel: {tracking.vessel}</p>
        <p>ETD: {tracking.etd}</p>
        <p>ETA: {tracking.eta}</p>
        <p>Container Number: {tracking.container_no}</p>
      </Card.Body>
    </Card>
  );
};

export const CardResultExport = () => (
  <Card>
    <h1>Import</h1>
  </Card>
);
