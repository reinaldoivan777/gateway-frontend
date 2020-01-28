import React from 'react';
import { Card, Table } from 'react-bootstrap';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 8px;
`;

export const CardResultImport = ({ result }) => {
  const { tracking } = result;
  console.log(result);
  return (
    <Card>
      <Card.Body>
        <Paragraph>
          <span className='text-muted'>MBL Number:</span> {tracking.mbl_no}
        </Paragraph>
        <Paragraph>
          <span className='text-muted'>Port of Destination:</span> {tracking.port_of_destination}{' '}
        </Paragraph>
        <Paragraph>
          <span className='text-muted'>Vessel:</span> {tracking.vessel}
        </Paragraph>
        <Paragraph>
          <span className='text-muted'>ETD:</span> {tracking.etd}
        </Paragraph>
        <Paragraph>
          <span className='text-muted'>ETA:</span> {tracking.eta}
        </Paragraph>
        <Paragraph>
          <span className='text-muted'>Container Number:</span> {tracking.container_no}
        </Paragraph>
        <TableStatus status={tracking.status} />
      </Card.Body>
    </Card>
  );
};

export const CardResultExport = () => (
  <Card>
    <h1>Import</h1>
  </Card>
);

const TableStatus = ({ status }) => (
  <Table responsive striped bordered>
    <thead>
      <tr>
        <td>#</td>
        <td>HBL No.</td>
        <td>Shipper</td>
        <td>Consignee</td>
        <td>Port of Origin</td>
        <td>ATA</td>
        <td>Pickup Do</td>
        <td>Pickup Cargo</td>
      </tr>
    </thead>
    <tbody>
      {status.map((data, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{data[0].hbl_no}</td>
          <td>{data[1].shipper}</td>
          <td>{data[2].consignee}</td>
          <td>{data[3].port_of_origin}</td>
          <td>{data[4].ata}</td>
          <td>{data[5].pickup_do}</td>
          <td>{data[6].pickup_cargo}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
