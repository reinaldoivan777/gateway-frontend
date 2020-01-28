import React from 'react';
import { Card, Table } from 'react-bootstrap';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 8px;
  display: flex;
`;

const Label = styled.div`
  width: 165px;
`;

export const CardResultImport = ({ result }) => {
  const { tracking } = result;
  console.log(result);
  return (
    <Card>
      <Card.Body>
        <Paragraph>
          <Label className='text-muted'>MBL Number:</Label> {tracking.mbl_no}
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Port of Destination:</Label> {tracking.port_of_destination}{' '}
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Vessel:</Label> {tracking.vessel}
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETD:</Label> {tracking.etd}
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>ETA:</Label> {tracking.eta}
        </Paragraph>
        <Paragraph>
          <Label className='text-muted'>Container Number:</Label> {tracking.container_no}
        </Paragraph>
        <TableStatusImport status={tracking.status} />
      </Card.Body>
    </Card>
  );
};

export const CardResultExport = () => (
  <Card>
    <h1>Import</h1>
  </Card>
);

const TableStatusImport = ({ status }) => (
  <Table responsive striped bordered>
    <thead>
      <tr>
        <td>No.</td>
        <td>HBL</td>
        <td>Shipper</td>
        <td>Consignee</td>
        <td>Port of Origin</td>
        <td>Actual Time of Arrival</td>
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
